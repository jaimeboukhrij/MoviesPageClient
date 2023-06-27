import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import authService from '../../services/auth.services';
import FormError from '../Error/FormError';
import { useNavigate } from "react-router-dom"


function SingUpForm({ clickLogin }) {
    const [errors, setErrors] = useState([])
    const [userData, setUserData] = useState({
        email: "",
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
    })



    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        authService
            .signup(userData)
            .then(() => clickLogin())
            .catch(err => setErrors(err?.response?.data.errorMessages))

    }



    const { firstName, userName, email, password } = userData

    return (


        <Form onSubmit={handleSubmit}>
            <Row style={{ margin: "0" }}>

                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }} >

                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                        value={firstName} onChange={handleInputChange}
                        name='firstName'

                    />
                </Col>


                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        value={userName} onChange={handleInputChange}
                        name='userName'
                    />

                </Col>


                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email} onChange={handleInputChange}
                        name='email'

                    />

                </Col>

                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }}>
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password} onChange={handleInputChange}
                        name='password'

                    />

                </Col>

                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "20px" }}>
                    <h6>Still registered?
                        <span onClick={clickLogin}
                            style={{
                                fontWeight: "600", textDecorationLine: "underline",
                                color: "red", cursor: "pointer", marginLeft: "2%"
                            }}>LogIn </span>
                    </h6>
                </Col>
            </Row>


            {errors?.length > 0 && <FormError>{errors.map(elem => <p>{elem}</p>)}</FormError>}

            <Button type="submit" variant="danger"  >SignUp</Button>
        </Form>

    );
}

export default SingUpForm;