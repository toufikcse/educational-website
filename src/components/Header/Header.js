import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Education Site</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="navLink" to="/home">
                            Home
                        </NavLink>
                        <NavLink className="navLink" to="/services">
                            Services
                        </NavLink>
                        <NavLink className="navLink" to="/blog">
                            Blog
                        </NavLink>
                        <NavLink className="navLink" to="/about">
                            About Us
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Header;