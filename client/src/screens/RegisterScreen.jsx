import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from './../components/Loader';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { register } from './../actions/userActions';

const RegisterScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState(null);

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);

    const { loading,userInfo, error } = userRegister;

    const submitHandler = e => {
        e.preventDefault();

        //Dispatch register
        if(password === confirmPassword){
            dispatch(register(name,email,password));
        }else{
            setMessage('Passwords do not match')
        }
    }


    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }else{
            history.push('/register')
        }
    }, [history, userInfo, redirect])

    return <Container>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                <h1>Sign Up Here</h1>
                {message && <Message varient="danger">{message}
                </Message>}
                {error && <Message varient="danger">{error}
                </Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Register</Button>

                    <Row className="py-3">
                        <Col>
                            Have an Account?{' '} 
                            <Link to={'/login'}><span style={{ color: 'blue', fontWeight: '900' }}> Login </span></Link>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default RegisterScreen
