import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    saveWatchlist(data) {
        return this.api.post('/watchlistSave', data)
    }

    getWatchlist() {
        return this.api.get(`/watchlist`)
    }

    savefilmSeen(idFilm) {
        return this.api.post('/filmSeen', idFilm)
    }

    getfilmSeen() {
        return this.api.get(`/filmSeen`)
    }

    savefilmsLike(idFilm) {
        return this.api.post('/filmsLike', idFilm)
    }

    getfilmsLike() {
        return this.api.get(`/filmsLike`)
    }

    savefilmsDislike(idFilm) {
        return this.api.post('/filmsDislike', idFilm)
    }

    getfilmsDislike() {
        return this.api.get(`/filmsDislike`)
    }



}

const userService = new UserService()

export default userService