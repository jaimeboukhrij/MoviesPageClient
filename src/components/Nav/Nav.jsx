import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../contexts/auth.context';
import { Link, useNavigate } from 'react-router-dom';
import "./Nav.css"
import Auth from '../../pages/Auth/Auth';
import SeachBar from '../Home/Header/SeachBar';


const Navegation = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <>
            <Navbar expand="lg" className='nav'>
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate("/")} >Home</Nav.Link>
                            <Nav.Link onClick={() => navigate("/films")} >Movies</Nav.Link>
                            <Nav.Link onClick={() => navigate("/tvshows")} >TvShows</Nav.Link>
                            {user && <Nav.Link onClick={() => navigate("/watchlist")} >WatchList</Nav.Link>}
                            {

                                user
                                    ? <Nav.Link onClick={logout}><Link to={"/logout"}>LogOut</Link></Nav.Link>
                                    :
                                    <>
                                        <Nav.Link onClick={handleShow} >LogIn</Nav.Link>
                                    </>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Auth show={show} handleClose={handleClose} />
        </>
    );
}

export default Navegation;