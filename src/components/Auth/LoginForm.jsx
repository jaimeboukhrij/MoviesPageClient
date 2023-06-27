import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/auth.context"
import authService from '../../services/auth.services';


const LoginForm = ({ handleClose, clickSignup }) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate("/")
                handleClose()
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData




    return (
        <Form onSubmit={handleSubmit} >
            <Row style={{ margin: "0" }}   >
                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleInputChange}
                        name="email" />
                </Col>
                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleInputChange}
                        name="password" />
                </Col>

                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }}>
                    <h6>Still not registered?
                        <span onClick={clickSignup}
                            style={{
                                fontWeight: "600", textDecorationLine: "underline",
                                color: "red", cursor: "pointer", marginLeft: "2%"
                            }}>SignUp </span>
                    </h6>
                </Col>

            </Row>

            <Button variant="danger" type="submit">
                LogIn
            </Button>
        </Form>
    )


}


export default LoginForm