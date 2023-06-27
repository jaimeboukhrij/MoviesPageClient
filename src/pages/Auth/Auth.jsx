import Modal from 'react-bootstrap/Modal';
import LoginForm from '../../components/Auth/LoginForm';
import { useState } from 'react';
import SingUpForm from '../../components/Auth/SingUpForm';

const Auth = ({ show, handleClose }) => {

    const [showLogin, setShowLogin] = useState(true)
    const [showSignup, setShowSignup] = useState(false)

    const clickLogin = () => {
        setShowLogin(true)
        setShowSignup(false)
    }

    const clickSignup = () => {
        setShowLogin(false)
        setShowSignup(true)
    }



    return (
        <>

            <Modal show={show} onHide={handleClose} >

                <Modal.Body>
                    {showLogin && <LoginForm clickSignup={clickSignup} handleClose={handleClose} />}
                    {showSignup && <SingUpForm clickLogin={clickLogin} />}
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Auth