import React from 'react';

import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, Dropdown, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import './index.css'
// Navbar Component
const MyNavbar = () => {
    return (

        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Container>
                <Navbar.Brand href="#home">MyBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex mx-auto" style={{ width: '100%' }}>
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ flex: 1 }} />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav className="ms-auto text-center">
                        <Nav.Link href="#cart">Cart</Nav.Link>
                        <NavDropdown title="Login" id="login-dropdown">
                            <NavDropdown.Item as="div">
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    User
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item as="div">
                                <Link to="/vendor/login" style={{ textDecoration: 'none' }}>
                                    Vendor
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-light" id="language-dropdown">
                                Language
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="text-center" style={{ minWidth: '200px', padding: '10px' }}>
                                <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Language Select</label>
                                <Dropdown.Item href="#amharic">Amharic</Dropdown.Item>
                                <Dropdown.Item href="#english">English</Dropdown.Item>
                                <Dropdown.Item href="#arabic">Arabic</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// Slideshow Component
const MySlideshow = () => {
    return (
        <Carousel interval={3000}> {/* This will automatically change slides every 3 seconds */}
            <Carousel.Item>
                <img className="d-block w-100" src="/img/1.jpg" alt="First slide" style={{ height: '500px', objectFit: 'cover' }} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/2.jpg" alt="Second slide" style={{ height: '500px', objectFit: 'cover' }} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/3.jpg" alt="Third slide" style={{ height: '500px', objectFit: 'cover' }} />
            </Carousel.Item>
        </Carousel>
    );
};

// Home Component
function Home() {
    return (
        <div>
            <MyNavbar />
            <MySlideshow />
             <h1 style={{color:"white",}}>hi</h1>
        </div>
    );
}

export default Home;

