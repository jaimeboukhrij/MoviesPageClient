import { Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import check from "../../../assets/images/check.png"
import checkY from "../../../assets/images/checkY.png"
import tag from "../../../assets/images/tag.png"
import tagY from "../../../assets/images/tagY.png"
import like from "../../../assets/images/like.png"
import likeY from "../../../assets/images/likeY.png"
import dislike from "../../../assets/images/dislike.png"
import dislikeY from "../../../assets/images/dislikeY.png"
import { useContext, useEffect, useState } from "react"
import userService from "../../../services/user.services"
import { AuthContext } from "../../../contexts/auth.context"


const DetailTvPoster = ({ tvDetails }) => {

    const [likeFilm, setLikeFilm] = useState()
    const [dislikeFilm, setDislikeFilm] = useState(false)
    const [tagFilm, setTagFilm] = useState(false)
    const [checkFilm, setCheckFilm] = useState(false)
    const { idTvShow: idFilm } = useParams()
    const type = "tv"
    const saveWatchlist = () => userService.saveWatchlist({ idFilm, type }).catch(e => console.log(e))
    const savefilmSeen = () => userService.savefilmSeen({ idFilm }).catch(e => console.log(e))
    const savefilmsLike = () => userService.savefilmsLike({ idFilm }).catch(e => console.log(e))
    const savefilmsDislike = () => userService.savefilmsDislike({ idFilm }).catch(e => console.log(e))


    useEffect(() => {
        getWatchlist()
        getfilmSeen()
        getfilmsLike()
        getfilmsDislike()
    }, [idFilm]);

    const getWatchlist = () => {
        userService
            .getWatchlist(idFilm)
            .then(({ data }) => {
                data.includes(idFilm)
                    ? setTagFilm(true)
                    : setTagFilm(false)
            })
            .catch(e => console.log(e))
    }


    const getfilmSeen = () => {
        userService
            .getfilmSeen(idFilm)
            .then(({ data }) => {
                data.includes(idFilm)
                    ? setCheckFilm(true)
                    : setCheckFilm(false)
            })
            .catch(e => console.log(e))
    }



    const getfilmsLike = () => {
        userService
            .getfilmsLike(idFilm)
            .then(({ data }) => {
                data.includes(idFilm)
                    ? setLikeFilm(true)
                    : setLikeFilm(false)
            })
            .catch(e => console.log(e))
    }

    const getfilmsDislike = () => {
        userService
            .getfilmsDislike(idFilm)
            .then(({ data }) => {
                data.includes(idFilm)
                    ? setDislikeFilm(true)
                    : setDislikeFilm(false)
            })
            .catch(e => console.log(e))
    }




    return (
        <div style={{ height: "532px" }}>
            <img src={`https://www.themoviedb.org/t/p/original/${tvDetails?.poster_path}`} alt="" />
            <div className="imgFooter">

                <Row>
                    <Col md={{ span: 3, offset: 0 }} className="tag"
                        onClick={() => {
                            saveWatchlist()
                            setTagFilm(!tagFilm)
                        }}>

                        {tagFilm ? <img src={tagY} alt="" /> : <img src={tag} alt="" />}
                        <p style={{ color: tagFilm ? "#FBC500" : "white" }}>Watchlist</p>
                    </Col>

                    <Col md={{ span: 3, offset: 0 }} className="tag"
                        onClick={() => {
                            savefilmSeen()
                            setCheckFilm(!checkFilm)
                        }}>
                        {checkFilm ? <img src={checkY} alt="" /> : <img src={check} alt="" />}
                        <p style={{ color: checkFilm ? "#FBC500" : "white" }}>Seen</p>
                    </Col>

                    <Col md={{ span: 3, offset: 0 }} className="tag" onClick={() => {
                        savefilmsLike()
                        setLikeFilm(!likeFilm)
                    }}>
                        {likeFilm ? <img src={likeY} alt="" /> : <img src={like} alt="" />}
                        <p style={{ color: likeFilm ? "#FBC500" : "white" }}>Like</p>
                    </Col>

                    <Col md={{ span: 3, offset: 0 }} className="tag" onClick={() => {
                        savefilmsDislike()
                        setDislikeFilm(!dislikeFilm)
                    }}>
                        {dislikeFilm ? <img src={dislikeY} alt="" /> : <img src={dislike} alt="" />}
                        <p style={{ color: dislikeFilm ? "#FBC500" : "white" }}>Dislike</p>
                    </Col>
                </Row>

            </div>
        </div >
    )
}


export default DetailTvPoster