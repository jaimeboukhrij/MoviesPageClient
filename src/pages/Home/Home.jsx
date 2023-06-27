import PopularFilms from "../../components/Home/PopularFilms/PopularFilms"
import PopularTV from "../../components/Home/PopularTv/PopularTv"
import UpcomingFilms from "../../components/Home/UpcomingFilms/UpcomingFilms"
import Header from "../../components/Home/Header/Header"

const Home = () => {





    return (
        <main style={{ marginTop: "5%" }}>
            <Header />
            <PopularFilms />
            <PopularTV />
            <UpcomingFilms />

        </main>
    )

}

export default Home