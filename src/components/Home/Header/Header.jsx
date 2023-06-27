import { Button, Col, Row } from "react-bootstrap"
import "./Header.css"
import bg from "../../../assets/images/bgHome.jpg"
import SeachBar from "./SeachBar"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()
    return (
        <header>
            <Row>
                <Col md={{ span: 6, offset: 0 }}>
                    <SeachBar />

                    <Button onClick={() => navigate(`/films`)} className="button">Movies</Button>
                    <Button onClick={() => navigate(`/tvshows`)} className="button">TvShows</Button>

                </Col>
                <Col md={{ span: 6, offset: 0 }}>
                    <div className="bg" style={{ backgroundImage: `url(${bg})` }}> </div>
                </Col>

            </Row>
        </header>
    )
}

export default Header