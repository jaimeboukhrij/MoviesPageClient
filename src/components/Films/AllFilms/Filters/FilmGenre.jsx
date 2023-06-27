import { useEffect, useState } from "react"
import movies from "../../../../services/movies.services"
import { Col, Row } from "react-bootstrap"
import Scroll from "../../../Others/Scroll"



const FilmGenre = ({ setAllFilms, setSortBy, showGenres, setGenres, showAllFilms, selectGenre, setSelectGenre }) => {
    const [page, setPage] = useState(2)



    useEffect(() => {
        movies
            .getAllGenre()
            .then(({ data }) => setGenres(data.genres))
            .catch(e => console.log(e))
    }, [])



    const handleGenre = genre => {
        setSelectGenre(genre)
        setSortBy(undefined)

        movies
            .getMovieByGenre(genre)
            .then(({ data }) => { setAllFilms(data.results) })
            .catch(e => console.log(e))

    }


    useEffect(() => {
        let copy
        movies
            .getMovieByGenre(selectGenre, page)
            .then(({ data }) => {
                if (showAllFilms) {
                    copy = [...showAllFilms, ...data.results]
                    setAllFilms(copy)
                }
            })
            .catch(e => console.log(e))

    }, [page])



    return (
        <>
            <section className="genres">
                <h6>Genres:</h6>
                <Row>
                    {
                        showGenres?.map(({ name, id }, index) => {
                            return (
                                <Col md={{ span: 6, offset: 0 }} key={index} onClick={() => handleGenre(id)} >
                                    <p className="eachGenre">{name}</p>
                                </Col>
                            )
                        })
                    }
                </Row>

            </section>
            {selectGenre && <Scroll page={page} setPage={setPage} />}
        </>

    )

}


export default FilmGenre