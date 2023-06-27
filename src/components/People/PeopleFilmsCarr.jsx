import Carousel from 'react-bootstrap/Carousel'
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const PeopleFilmsCarr = ({ showMovies }) => {


    return (

        <Carousel >
            <Carousel.Item>

                <Carousel.Caption>

                    <Row>
                        {
                            showMovies?.slice(0, 5).map(elem => {

                                return (
                                    <Col md={{ span: 2, offset: 0 }} className='CarrouselEachFilm' key={elem.id}>
                                        <Link to={`/films/${elem.id}`}>
                                            {
                                                <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} alt="" />
                                            }
                                        </Link>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>


                <Carousel.Caption>

                    <Row>
                        {
                            showMovies?.slice(5, 10).map(elem => {

                                return (
                                    <Col md={{ span: 2, offset: 0 }} className='CarrouselEachFilm' key={elem.id}>
                                        <Link to={`/films/${elem.id}`}>

                                            {
                                                <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} alt="" />
                                            }
                                        </Link>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <Carousel.Caption>

                    <Row>
                        {
                            showMovies?.slice(10, 15).map(elem => {

                                return (
                                    <Col md={{ span: 2, offset: 0 }} className='CarrouselEachFilm' key={elem.id}>
                                        <Link to={`/films/${elem.id}`}>

                                            {
                                                <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} alt="" />
                                            }
                                        </Link>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>

                <Carousel.Caption>

                    <Row>
                        {
                            showMovies?.slice(15, 20).map(elem => {

                                return (
                                    <Col md={{ span: 2, offset: 0 }} className='CarrouselEachFilm' key={elem.id}>
                                        <Link to={`/films/${elem.id}`}>

                                            {
                                                <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} alt="" />
                                            }
                                        </Link>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}




export default PeopleFilmsCarr