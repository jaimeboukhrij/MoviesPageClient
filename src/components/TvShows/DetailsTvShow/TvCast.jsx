import { useEffect, useState } from "react"
import movies from "../../../services/movies.services";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";


const TvCast = () => {


    const [showCast, setShowCast] = useState()
    const { idTvShow } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        movies
            .getTvCast(idTvShow)
            .then(({ data }) => setShowCast(data.cast.slice(0, 4)))
            .catch(e => console.log(e))
    }, [idTvShow]);

    return (
        <div className="detailsFilmCast">
            <h5>MAIN CAST</h5>
            <Row>
                {
                    showCast?.map((elem, index) => {
                        return (
                            <Col md={{ span: 3 }} key={index}>
                                <div className="eachCast" onClick={() => navigate(`/people/${elem.id}`)}>
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${elem.profile_path}`} alt="" />
                                    <h5>{elem.name}</h5>

                                    <p>{elem.character}</p>

                                </div>

                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}


export default TvCast