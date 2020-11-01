import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from './../components/Loader';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { getUserDetails } from './../actions/userActions';

const ProfileScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.userDetails);
    const { loading, user, error } = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const submitHandler = e => {
        e.preventDefault();

        //Dispatch register
        if (password === confirmPassword) {
            //Dispatch update profile

        } else {
            setMessage('Passwords do not match')
        }
    }


    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'));
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [history, userInfo, dispatch, user.email, user.name])

    return <>
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message varient="danger">{message}
                </Message>}
                {error && <Message varient="danger">{error}
                </Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
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
                            <Link to={'/login'}><span style={{ color: 'blue', fontWeight: '900' }}> Login Here </span></Link>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col md={9}>
                <h2>Orders</h2>
            </Col>
        </Row>
    </>
}

export default ProfileScreen
