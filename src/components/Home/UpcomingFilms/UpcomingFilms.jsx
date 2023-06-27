
import popularIcon from "../../../assets/images/upcoming.png"

import movies from '../../../services/movies.services';
import { useEffect, useState } from 'react';
import PopularFilmsCarr from "../PopularFilms/PopularFilmsCarr";


const UpcomingFilms = () => {

    const [showMovies, setShowMovies] = useState()

    useEffect(() => {
        movies
            .getFilmUpcoming()
            .then(({ data }) => setShowMovies(data.results))
            .catch(e => console.log(e))
    }, []);

    return (
        <section className="popularFilms">
            <h4>UPCOMING <span>FILMS</span>  </h4>
            <PopularFilmsCarr showMovies={showMovies} />


        </section>
    )
}


export default UpcomingFilms