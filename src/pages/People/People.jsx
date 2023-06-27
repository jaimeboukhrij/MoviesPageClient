import { useEffect } from "react"
import "./People.css"
import { useParams } from "react-router-dom"
import movies from "../../services/movies.services"
import { Row, Col } from "react-bootstrap"
import { useState } from "react"
import PopularFilmsCarr from "../../components/Home/PopularFilms/PopularFilmsCarr"
import PeopleFilmsCarr from "../../components/People/PeopleFilmsCarr"
import PeopleTvCarr from "../../components/People/PeopleTvCarr"

const Pepole = () => {

    const [showPerson, setShowPerson] = useState()
    const [showImgPerson, setImgPerson] = useState()
    const [showFilmsPerson, setFilmsPerson] = useState()
    const [showTvPerson, setTvPerson] = useState()

    const { idPeople } = useParams()

    useEffect(() => {
        movies
            .getPersonById(idPeople)
            .then(({ data }) => setShowPerson(data))
            .catch(e => console.log(e))

        movies
            .getPersonImages(idPeople)
            .then(({ data }) => setImgPerson(data.profiles))
            .catch(e => console.log(e))

        movies
            .getPersonFilms(idPeople)
            .then(({ data }) => setFilmsPerson(data.cast))
            .catch(e => console.log(e))

        movies
            .getPersonTv(idPeople)
            .then(({ data }) => setTvPerson(data.cast))
            .catch(e => console.log(e))



    }, [])


    return (
        <>
            <Row className="people">
                <Col md={{ span: 4, offset: 1 }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${showPerson?.profile_path}`} alt="" />
                </Col>
                <Col md={{ span: 7, offset: 0 }}>
                    <h3>{showPerson?.name} ({<span>{showPerson?.birthday.substring(0, 4)}</span>})</h3>
                    <p>{showPerson?.biography.substring(0, 1000)}...</p>
                    <div className="imgs">
                        {
                            showImgPerson?.map(({ file_path }) => <img src={`https://image.tmdb.org/t/p/w500/${file_path}`} alt="" />)
                        }
                    </div>
                </Col>


            </Row>
            {showFilmsPerson?.length &&
                <div className="peopleFilms">
                    <h4>Leonardo's main movies.</h4>
                    <PeopleFilmsCarr showMovies={showFilmsPerson} />
                </div>
            }
            {showTvPerson?.length &&
                <div className="peopleFilms">
                    <h4>Leonardo's main TvShow.</h4>
                    <PeopleTvCarr showMovies={showTvPerson} />
                </div>}
        </>
    )
}


export default Pepole