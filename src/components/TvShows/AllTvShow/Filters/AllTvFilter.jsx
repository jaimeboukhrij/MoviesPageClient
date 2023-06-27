
import { useEffect, useState } from "react"
import TvSortBy from "./TvSortBy";
import TvGenre from "./TvGenre";




const AllTVFilter = ({ setAllFilms, showAllFilms }) => {

    const [sortBy, setSortBy] = useState("popularity.desc")
    const [showGenres, setGenres] = useState()
    const [selectGenre, setSelectGenre] = useState()





    return (
        <>
            <TvSortBy setAllFilms={setAllFilms} showAllFilms={showAllFilms} sortBy={sortBy} setSortBy={setSortBy} setSelectGenre={setSelectGenre} />
            <TvGenre setAllFilms={setAllFilms} showAllFilms={showAllFilms}
                setSortBy={setSortBy} showGenres={showGenres} setGenres={setGenres}
                selectGenre={selectGenre} setSelectGenre={setSelectGenre} />
        </>
    )

}

export default AllTVFilter