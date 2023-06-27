import { useParams } from "react-router-dom"
import "../Films.css"
import { useEffect, useState } from "react";
import movies from "../../../services/movies.services";
import DetailsFilmBody from "../../../components/Films/DetailsFilm/DetailsFilmBody";

const FilmDetail = () => {

    const [filmDetails, setFilmDetails] = useState()
    const [filmProvider, setFilmProvider] = useState()

    const { idFilm } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        movies
            .getMovieById(idFilm)
            .then(({ data }) => setFilmDetails(data))
            .catch(e => console.log(e))

        movies
            .getMovieProvider(idFilm)
            .then(({ data }) => setFilmProvider(data.results.ES))
    }, [idFilm])



    return (
        <main className="detailPage">
            <header
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(https://www.themoviedb.org/t/p/original/${filmDetails?.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    filter: 'brightness(1.8)',
                }}
            ></header>
            <DetailsFilmBody filmDetails={filmDetails} filmProvider={filmProvider} />
        </main>
    )
}

export default FilmDetail