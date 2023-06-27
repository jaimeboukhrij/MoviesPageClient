import { Row, Col } from "react-bootstrap"
import Providers from "./Providers"
import { useEffect, useState } from "react"
import movies from "../../../services/movies.services"
import YouTubePlayer from "./Videos"
import { useParams } from "react-router-dom"
import DetailFilmPoster from "./DetailFilmPoster"
import React from 'react';
import PopularFilmsCarr from "../../Home/PopularFilms/PopularFilmsCarr"
import StarRating from "./StarRating"
import Cast from "./Cast"



const DetailsFilmBody = ({ filmDetails, filmProvider }) => {

    const { idFilm } = useParams()
    const [idVideos, setIdVideos] = useState()
    const [similarFilms, setSimilarFilms] = useState()
    const [director, setDirector] = useState()

    useEffect(() => {
        movies
            .getMovieVideo(idFilm)
            .then(({ data }) => setIdVideos(data.results.slice(-4)))
            .catch(e => console.log(e))

        movies
            .getSimilarFilms(idFilm)
            .then(({ data }) => setSimilarFilms(data.results))
            .catch(e => console.log(e))

        movies
            .getFilmCast(idFilm)
            .then(({ data }) => {
                const filerData = data.crew.filter(elem => elem.job == "Director")
                setDirector(filerData)

            })
            .catch(e => console.log(e))


    }, [idFilm])




    return (
        <>
            <section className="bodyDetails">
                <Row>
                    <Col md={{ span: 4, offset: 0 }}>
                        <DetailFilmPoster filmDetails={filmDetails} />
                        <hr />

                        <div className="topFilmDetails">
                            <h6>RATING</h6>
                            <p> 9.5</p>
                        </div>
                        <hr />

                        <div className="topFilmDetails">
                            <h6>GENRES</h6>
                            <p>{filmDetails?.genres.map(({ name }) => <React.Fragment key={name}>{name} {' | '} </React.Fragment>)}</p>
                        </div>
                        <hr />

                        <div className="topFilmDetails">
                            <h6>RUNTIME</h6>
                            <p>{Math.floor(filmDetails?.runtime / 60)}h{filmDetails?.runtime % 60}min</p>
                        </div>
                        <hr />

                        <div className="topFilmDetails">
                            <h6>DIRECTOR</h6>
                            {
                                director?.map(({ name }) => <p>{name}</p>)
                            }
                        </div>
                    </Col>

                    <Col md={{ span: 8, offset: 0 }} style={{ paddingLeft: "5%" }}>

                        <h4>{filmDetails?.title} <span>({filmDetails?.release_date.substring(0, 4)}) </span></h4>
                        <h6>{filmDetails?.tagline}</h6>

                        <Providers filmProvider={filmProvider} />

                        <div className="videos">
                            <h5>VIDEOS: TRAILERS, TEASERS,FEATURETTES</h5>
                            <Row>

                                {
                                    idVideos?.map(({ key }) => <Col md={{ span: 6 }}><YouTubePlayer key={key} videoId={key} /></Col>)
                                }


                            </Row>
                        </div>
                        <div>
                            <Cast />
                        </div>

                    </Col>


                </Row>

            </section>
            {
                similarFilms?.length &&
                <div style={{ marginTop: "-12%" }}>
                    <h5 style={{ color: "grey", marginLeft: "6%" }}>PEOPLE WHO LIKED {filmDetails?.title.toUpperCase()} ALSO LIKED</h5>
                    <PopularFilmsCarr showMovies={similarFilms} />
                </div>}
        </>
    )

}

export default DetailsFilmBody
