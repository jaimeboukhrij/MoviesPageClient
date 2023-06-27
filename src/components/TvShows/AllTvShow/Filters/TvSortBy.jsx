import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import movies from "../../../../services/movies.services";
import Scroll from "../../../Others/Scroll";

const TvSortBy = ({ showAllFilms, setAllFilms, sortBy, setSortBy, setSelectGenre }) => {

    const [page, setPage] = useState(2)


    useEffect(() => {
        setSelectGenre(undefined)
        movies
            .sortTvBy(sortBy, 1)
            .then(({ data }) => setAllFilms(data.results))
            .catch(e => console.log(e))
    }, [sortBy])


    useEffect(() => {
        let copy
        movies
            .sortTvBy(sortBy, page)
            .then(({ data }) => {
                if (showAllFilms) {
                    copy = [...showAllFilms, ...data.results]
                    setAllFilms(copy)
                }
            })
            .catch(e => console.log(e))

    }, [page])


    const handleSelectChange = event => {
        const { value } = event.target
        setSortBy(value)
    }
    return (
        <>
            <Form.Select aria-label="Default select example" onChange={handleSelectChange}>

                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>

                <option value="primary_release_date.asc">Release Date Ascending</option>
                <option value="primary_release_date.desc">Release Date Descending</option>

                <option value="vote_count.asc">Vote Count Ascending</option>
                <option value="vote_count.desc">Vote Count Descending</option>
            </Form.Select>
            {sortBy && <Scroll page={page} setPage={setPage} />}

        </>
    )
}


export default TvSortBy