import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from './../components/Loader';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { login } from './../actions/userActions';

const LoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);

    const { loading,userInfo, error } = userLogin;

    const submitHandler = e => {
        e.preventDefault();
        //Dispatch Login
        dispatch(login(email, password));
    }


    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
        
    }, [history, userInfo, redirect])

    return <Container>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                <h1>Sign In</h1>
                {error && <Message varient="danger">{error}
                </Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
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
                    <Button type='submit' variant='primary'>Log In</Button>

                    <Row className="py-3">
                        <Col>
                            New Customer?{' '} 
                            <Link to={'/register'}><span style={{ color: 'blue', fontWeight: '900' }}> Register </span></Link>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>


}
export default LoginScreen; 