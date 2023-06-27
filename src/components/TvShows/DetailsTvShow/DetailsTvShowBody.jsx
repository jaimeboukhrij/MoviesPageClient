import { Row, Col } from "react-bootstrap"
import Providers from "../../Films/DetailsFilm/Providers"
import { useEffect, useState } from "react"
import movies from "../../../services/movies.services"
import YouTubePlayer from "../../Films/DetailsFilm/Videos"
import { useParams } from "react-router-dom"
import React from 'react';
import PopularFilmsCarr from "../../Home/PopularFilms/PopularFilmsCarr"
import DetailTvPoster from "./DetailTvPoster"
import TvCast from "./TvCast"



const DetailsTvShowBody = ({ tvDetails, filmProvider }) => {

    const { idTvShow } = useParams()
    const [idVideos, setIdVideos] = useState()
    const [similarTvShows, setSimilarTvShows] = useState()
    const [director, setDirector] = useState()

    useEffect(() => {
        movies
            .getTvVideo(idTvShow)
            .then(({ data }) => setIdVideos(data.results.slice(-4)))
            .catch(e => console.log(e))

        movies
            .getsimilarTvShows(idTvShow)
            .then(({ data }) => setSimilarTvShows(data.results))
            .catch(e => console.log(e))

        movies
            .getTvCast(idTvShow)
            .then(({ data }) => {
                const filerData = data.crew.filter(elem => elem.job == "Director")
                setDirector(filerData)

            })
            .catch(e => console.log(e))


    }, [idTvShow])




    return (
        <>
            <section className="bodyDetails">
                <Row>
                    <Col md={{ span: 4, offset: 0 }}>
                        <DetailTvPoster tvDetails={tvDetails} />
                        <hr />

                        <div className="toptvDetails">
                            <h6>RATING</h6>
                            <p> 9.5</p>
                        </div>
                        <hr />

                        <div className="toptvDetails">
                            <h6>GENRES</h6>
                            <p>{tvDetails?.genres.map(({ name }) => <React.Fragment key={name}>{name} {' | '} </React.Fragment>)}</p>
                        </div>
                        <hr />

                        <div className="toptvDetails">
                            <h6> EPISODE RUNTIME</h6>
                            <p>{Math.floor(tvDetails?.episode_run_time / 60)}h{tvDetails?.episode_run_time % 60}min</p>
                        </div>
                        <hr />

                        <div className="toptvDetails">
                            <h6>DIRECTOR</h6>
                            {
                                director?.map(({ name }) => <p>{name}</p>)
                            }
                        </div>
                    </Col>

                    <Col md={{ span: 8, offset: 0 }} style={{ paddingLeft: "5%" }}>

                        <h4>{tvDetails?.name} <span>({tvDetails?.first_air_date.substring(0, 4)}) </span></h4>
                        <h6>{tvDetails?.tagline}</h6>

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
                            <TvCast />
                        </div>

                    </Col>


                </Row>

            </section>
            {
                similarTvShows?.length &&
                <div style={{ marginTop: "-12%" }}>
                    <h5 style={{ color: "grey", marginLeft: "6%" }}>PEOPLE WHO LIKED {tvDetails?.name.toUpperCase()} ALSO LIKED</h5>
                    <PopularFilmsCarr showMovies={similarTvShows} />
                </div>}
        </>
    )

}

export default DetailsTvShowBody
