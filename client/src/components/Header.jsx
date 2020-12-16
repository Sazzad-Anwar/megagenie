import React from 'react'
import {Nav, Navbar,Container, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';
// import logo from './logo.gif';

const Header = () => {

    const dispatch = useDispatch();
    const userLogin = useSelector(state=> state.userLogin);
    const { userInfo }= userLogin;
    
    const logoutHandler =()=>{
        window.location = '/login';
        dispatch(logout());
    }


return <header className='sticky-top'>
    <Navbar bg="dark" variant='dark' className="py-1" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>MegaGenie</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="ml-auto">
                    <LinkContainer to="/cart">
                        <Nav.Link> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                    </LinkContainer>
                    { userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            {userInfo && userInfo.isAdmin === 'true' && (
                                <>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                            </>
                            )}
                        </NavDropdown>
                    ):(
                        <LinkContainer to="/login">
                            <Nav.Link> <i className="fas fa-user"></i> Sign In</Nav.Link>
                        </LinkContainer>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
}

export default Header