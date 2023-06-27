
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import movies from '../../../services/movies.services';
import { Col, Row } from 'react-bootstrap';
import search from "../../../assets/images/search.png"
import notFound from "../../../assets/images/notfound.png"
import { useNavigate } from 'react-router-dom';


function SeachBar() {

    const [query, setQuery] = useState()
    const [isFocused, setIsFocused] = useState(false)
    const [showResults, setShowResults] = useState()
    const [showPerson, setShowPerson] = useState()

    const navigate = useNavigate()


    const handleFocus = () => setIsFocused(true)

    const handleBlur = () => setIsFocused(false)

    const changeForm = e => setQuery(e.target.value)


    useEffect(() => {
        if (query?.length > 0) {

            handleFocus()
            movies
                .searchMulti(query)
                .then(({ data }) => setShowResults(data.results.slice(0, 4)))
                .catch(e => console.log(e))

            movies
                .getPerson(query)
                .then(({ data }) => setShowPerson(data.results.slice(0, 4)))
                .catch(e => console.log(e))
        }
        else {
            handleBlur()
        }
    }, [query])



    return (
        <>

            <Form.Control
                value={query}
                onChange={changeForm}
                type="text"
                id="searchHome"
                aria-describedby="passwordHelpBlock"
                placeholder='Search your favourite film, tv, person...'
                onFocus={handleFocus}
                onBlur={() => handleBlur}
            />
            {
                isFocused &&
                <div className='results'>
                    <Row>
                        <Col md={6}>
                            <h6>MOVIES & TV</h6>
                            <hr />


                            {
                                showResults?.map(elem => {
                                    return (<Row className='eachFilmResult' onClick={() => navigate(`/${elem.media_type == "movie" ? "films" : "tvshows"}/${elem.id}`)}>
                                        <Col md={{ span: 3, offset: 1 }}>
                                            {elem.poster_path
                                                ? <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} alt="" />
                                                : <img src={notFound} alt="" />
                                            }
                                        </Col>

                                        <Col md={{ span: 8, offset: 0 }} >
                                            {
                                                elem.title
                                                    ? <p style={{ marginTop: "2%" }}>{elem.title.substring(0, 15)}</p>
                                                    : <p style={{ marginTop: "2%" }}>{elem.name.substring(0, 15)}</p>
                                            }
                                            {
                                                elem.release_date
                                                    ? <p style={{
                                                        marginTop: "-8%",
                                                        color: "grey",
                                                        textTransform: "capitalize"
                                                    }}>
                                                        {elem.media_type}, {elem.release_date?.substring(0, 4)}</p>
                                                    : <p style={{
                                                        marginTop: "-8%",
                                                        color: "grey",
                                                        textTransform: "capitalize"
                                                    }}>
                                                        {elem.media_type}, {elem.first_air_date?.substring(0, 4)}</p>
                                            }

                                        </Col>
                                    </Row>
                                    )

                                })
                            }

                        </Col>
                        <Col md={6}>
                            <h6>PEOPLE</h6>
                            <hr />
                            {
                                showPerson?.map(elem => {

                                    return (<Row className='eachFilmResult' onClick={() => navigate(`/people/${elem.id}`)}>
                                        <Col md={{ span: 3, offset: 1 }}>
                                            {elem.profile_path
                                                ? <img src={`https://image.tmdb.org/t/p/w500/${elem?.profile_path}`} alt="" />
                                                : <img src={notFound} alt="" />
                                            }
                                        </Col>

                                        <Col md={{ span: 8, offset: 0 }} >
                                            {
                                                elem.name
                                                    ? <p style={{ marginTop: "2%" }}>{elem.name}</p>
                                                    : <p style={{ marginTop: "2%" }}>-Not Found-</p>}

                                        </Col>
                                    </Row>
                                    )

                                })
                            }
                        </Col>
                    </Row>


                </div>}

        </>
    );
}

export default SeachBar
