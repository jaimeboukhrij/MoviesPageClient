import { useParams } from "react-router-dom"
import "../TvShow.css"
import { useEffect, useState } from "react";
import movies from "../../../services/movies.services";
import DetailsTvShowBody from "../../../components/TvShows/DetailsTvShow/DetailsTvShowBody";

const TvShowDetails = () => {

    const [tvDetails, setTvDetails] = useState()
    const [filmProvider, setFilmProvider] = useState()

    const { idTvShow } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        movies
            .getTvDetails(idTvShow)
            .then(({ data }) => setTvDetails(data))
            .catch(e => console.log(e))

        movies
            .getTvProviders(idTvShow)
            .then(({ data }) => setFilmProvider(data.results.ES))
    }, [idTvShow])

    console.log("------providers------", filmProvider)


    return (
        <main className="detailPage">
            <header
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(https://www.themoviedb.org/t/p/original/${tvDetails?.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    filter: 'brightness(1.8)',
                }}
            ></header>
            <DetailsTvShowBody tvDetails={tvDetails} filmProvider={filmProvider} />
        </main>
    )
}

export default TvShowDetails