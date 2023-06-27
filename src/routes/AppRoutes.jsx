import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import FilmDetail from "../pages/Films/FilmDetails/FilmDetail";
import Films from "../pages/Films/Films";
import TvShowDetails from "../pages/TvShows/TvShowDetails/TvShowDetails";
import TvShows from "../pages/TvShows/TvShows";
import WatchList from "../pages/WatchList/WatchList";
import Pepole from "../pages/People/People";
import PrivateRoute from "./PrivateRoutes";



const AppRoutes = () => {


    return (
        <Routes>



            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:idFilm" element={<FilmDetail />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route element={<PrivateRoute />}>
                <Route path="/watchList" element={<WatchList />} />
            </Route>
            <Route path="/tvshows/:idTvShow" element={<TvShowDetails />} />
            <Route path="/people/:idPeople" element={<Pepole />} />

        </Routes>


    )
}


export default AppRoutes