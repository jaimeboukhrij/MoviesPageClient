import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import notImage from "../../assets/images/noImage.png"
import AllTVFilter from "../../components/TvShows/AllTvShow/Filters/AllTvFilter"

const TvShows = () => {

    const [showAllFilms, setAllFilms] = useState()
    const navigate = useNavigate()


    return (
        <Row className="films">

            <Col md={{ span: 2, offset: 0 }} style={{ paddingLeft: "2%" }}>
                <AllTVFilter setAllFilms={setAllFilms} showAllFilms={showAllFilms} />
            </Col>

            <Col md={{ span: 9, offset: 1 }}>
                <Row>
                    {
                        showAllFilms?.map(elem => {
                            return (
                                <Col md={{ span: 3, offset: 0 }} className="eachFilm" onClick={() => navigate(`/tvshows/${elem.id}`)} >
                                    {
                                        elem.poster_path
                                            ? <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} alt="" />
                                            : <img src={notImage} alt="" />

                                    }
                                    <h6>{elem.title}</h6>
                                </Col>
                            )
                        })
                    }
                </Row >
            </Col>
        </Row>


    )
}

export default TvShows