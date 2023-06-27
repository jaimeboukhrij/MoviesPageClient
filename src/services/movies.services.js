import axios from 'axios';

class Movie {
    constructor() {
        this.api = axios.create({
            baseURL: "https://api.themoviedb.org/3",
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmY1OGNlYjQxNWZlMGUzZGMxYmNhZjY1ZGI5MjNkNiIsInN1YiI6IjY0OTFiY2Q3YzJmZjNkMDBmZmJkNWVmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cxTAScu5oPZZo3gxoC0H0g0LEZDBw9z08dwt8O5nvHY'
            }
        });
    }

    getMovieTrending() {
        return this.api.get(`/trending/movie/day?language=en-US`)
    }

    getTVTrending() {
        return this.api.get(`/trending/tv/day?language=en-US`)
    }

    getFilmUpcoming() {
        return this.api.get(`/movie/upcoming`)
    }

    searchMulti(query) {
        return this.api.get(`search/multi?query=${query}&include_adult=false&language=en-US&page=1`)
    }

    getPerson(query) {
        return this.api.get(`/search/person?query=${query}&include_adult=false&language=en-US&page=1`)
    }

    getMovieById(id) {
        return this.api.get(`/movie/${id}?language=en-US`)
    }

    getMovieProvider(id) {
        return this.api.get(`/movie/${id}/watch/providers`)
    }


    getMovieVideo(idVideo) {
        return this.api.get(`movie/${idVideo}/videos?language=en-US`)
    }

    getSimilarFilms(idFilm) {
        return this.api.get(`/movie/${idFilm}/recommendations?language=en-US&page=1`)
    }

    getFilmCast(idFilm) {
        return this.api.get(`/movie/${idFilm}/credits?language=en-US`)
    }

    sortFilmsBy(query, page) {
        return this.api.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${query}`)
    }

    getAllGenre() {
        return this.api.get(`genre/movie/list?language=en`)
    }

    getMovieByGenre(genre, page) {
        return this.api.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`)
    }




    getTvDetails(idTv) {
        return this.api.get(`/tv/${idTv}?language=en-US`)
    }

    getTvProviders(idTv) {
        return this.api.get(`/tv/${idTv}/watch/providers`)
    }

    getTvVideo(idVideo) {
        return this.api.get(`tv/${idVideo}/videos?language=en-US`)
    }

    getsimilarTvShows(idFilm) {
        return this.api.get(`/tv/${idFilm}/similar?language=en-US&page=1`)
    }

    getTvCast(idFilm) {
        return this.api.get(`/tv/${idFilm}/credits?language=en-US`)
    }


    sortTvBy(query, page) {
        return this.api.get(`/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${query}`)
    }

    getTvGenre() {
        return this.api.get(`genre/tv/list?language=en`)
    }

    getTvByGenre(genre, page) {
        return this.api.get(`/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`)
    }

    getTvById(id) {
        return this.api.get(`/tv/${id}?language=en-US`)
    }

    getPersonById(idPerson) {
        return this.api.get(`/person/${idPerson}?language=en-US`)
    }

    getPersonImages(idPerson) {
        return this.api.get(`/person/${idPerson}/images`)
    }

    getPersonFilms(idPerson) {
        return this.api.get(`/person/${idPerson}/movie_credits?language=en-US`)
    }

    getPersonTv(idPerson) {
        return this.api.get(`/person/${idPerson}/tv_credits?language=en-US`)
    }


















}


const movies = new Movie();

export default movies