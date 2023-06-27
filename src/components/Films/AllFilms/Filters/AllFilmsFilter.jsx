
import SortBy from "./SortBy";
import FilmGenre from "./FilmGenre";
import { useEffect, useState } from "react"




const AllFilmsFilter = ({ setAllFilms, showAllFilms }) => {

    const [sortBy, setSortBy] = useState("popularity.desc")
    const [showGenres, setGenres] = useState()
    const [selectGenre, setSelectGenre] = useState()





    return (
        <>
            <SortBy setAllFilms={setAllFilms} showAllFilms={showAllFilms} sortBy={sortBy} setSortBy={setSortBy} setSelectGenre={setSelectGenre} />
            <FilmGenre setAllFilms={setAllFilms} showAllFilms={showAllFilms}
                setSortBy={setSortBy} showGenres={showGenres} setGenres={setGenres}
                selectGenre={selectGenre} setSelectGenre={setSelectGenre} />
        </>
    )

}

export default AllFilmsFilter