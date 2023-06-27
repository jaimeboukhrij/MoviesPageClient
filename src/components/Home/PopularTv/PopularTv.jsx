
import popularIcon from "../../../assets/images/fuego.png"

import movies from '../../../services/movies.services';
import { useEffect, useState } from 'react';
import PopularFilmsCarr from "../PopularFilms/PopularFilmsCarr";


const PopularTV = () => {

    const [showMovies, setShowMovies] = useState()

    useEffect(() => {
        movies
            .getTVTrending()
            .then(({ data }) => setShowMovies(data.results))
            .catch(e => console.log(e))
    }, []);

    return (
        <section className="popularFilms">
            <h4>POPULAR <span>TV</span>  <img src={popularIcon} alt="" /> </h4>
            <PopularFilmsCarr showMovies={showMovies} />


        </section>
    )
}


export default PopularTV