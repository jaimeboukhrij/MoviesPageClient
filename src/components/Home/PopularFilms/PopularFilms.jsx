import "./PopularFilms.css"
import popularIcon from "../../../assets/images/fuego.png"
import PopularFilmsCarr from "./PopularFilmsCarr"
import movies from '../../../services/movies.services';
import { useEffect, useState } from 'react';


const PopularFilms = () => {

    const [showMovies, setShowMovies] = useState()

    useEffect(() => {
        movies
            .getMovieTrending()
            .then(({ data }) => setShowMovies(data.results))
            .catch(e => console.log(e))
    }, []);

    return (
        <section className="popularFilms">
            <h4>POPULAR <span>FILMS</span>  <img src={popularIcon} alt="" /> </h4>
            <PopularFilmsCarr showMovies={showMovies} />


        </section>
    )
}


export default PopularFilms