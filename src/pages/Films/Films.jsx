import { useEffect, useState } from "react"
import movies from "../../services/movies.services"
import { Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import AllFilmsFilter from "../../components/Films/AllFilms/Filters/AllFilmsFilter"
import notImage from "../../assets/images/noImage.png"

const Films = () => {

    const [showAllFilms, setAllFilms] = useState()
    const navigate = useNavigate()


    return (
        <Row className="films">

            <Col md={{ span: 2, offset: 0 }} style={{ paddingLeft: "2%" }}>
                <AllFilmsFilter setAllFilms={setAllFilms} showAllFilms={showAllFilms} />
            </Col>

            <Col md={{ span: 9, offset: 1 }}>
                <Row>
                    {
                        showAllFilms?.map(elem => {
                            return (
                                <Col md={{ span: 3, offset: 0 }} className="eachFilm" onClick={() => navigate(`/films/${elem.id}`)} >
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

export default Films