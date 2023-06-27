import { useEffect, useState } from "react"
import movies from "../../services/movies.services"
import userService from "../../services/user.services"
import { Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import notImage from "../../assets/images/noImage.png"
import "./watchList.css"


const WatchList = () => {

    const [showList, setShowList] = useState()
    const [showAll, setShowAll] = useState()
    const [showFilms, setShowFilms] = useState([])
    const [showTv, setShowTv] = useState([])
    const [ids, setIds] = useState()


    const navigate = useNavigate()

    useEffect(() => {

        userService
            .getWatchlist()
            .then(({ data }) => { setIds(data) })
            .catch(e => console.log(e))
    }, [])

    useEffect(() => getMovieInf(), [ids]);


    const getMovieInf = () => {
        const allPromises = ids?.map((elem, index) => {
            if (elem.typeId === "movie") {
                return movies.getMovieById(elem.id).then(({ data }) => data);
            } else {
                return movies.getTvById(elem.id).then(({ data }) => data);
            }
        });

        if (allPromises) {
            Promise.all(allPromises)
                .then((data) => {
                    setShowList(data)
                    setShowAll(data)
                    let movie = data.filter(elem => elem.type != "Scripted")
                    let tv = data.filter(elem => elem.type == "Scripted")
                    setShowFilms(movie)
                    setShowTv(tv)
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <Row className="films">

            <Col md={{ span: 2, offset: 0 }} style={{ paddingLeft: "2%", display: "flex", flexDirection: "column" }} className="watchlistB">
                <Button onClick={() => setShowList(showAll)}>All</Button>
                <Button onClick={() => setShowList(showFilms)}>Movies</Button>
                <Button onClick={() => setShowList(showTv)}>TvShows</Button>
            </Col>

            <Col md={{ span: 9, offset: 1 }}>
                <Row>
                    {
                        showList?.map(elem => {
                            return (
                                <Col md={{ span: 3, offset: 0 }} className="eachFilm" onClick={() => navigate(`/films/${elem.id}`)} >
                                    {
                                        elem.poster_path
                                            ? <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} alt="" />
                                            : <img src={notImage} alt="" />

                                    }
                                    <h6>{elem?.title || elem.name}</h6>
                                </Col>
                            )
                        })
                    }
                </Row >
            </Col>
        </Row >
    )

}

export default WatchList