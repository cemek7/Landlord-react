// LoginHeader.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginHeader() {
  return (
    <header>
      {
      /* Login page header content */
      /* Signup page header content */
      <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
        <Nav.Link as={Link} to="/">
        <div className="container small-container">
          {/* Logo */}
          <a className="navbar-brand mr-2 ml-2" href="#">
            <img
              src="header-logo.jpeg" // Replace with your logo image URL
              alt="Logo"
              className="logo small-logo"
            />
          </a>
          </div>
          </Nav.Link>
        </Navbar.Brand>
        <Nav className='justify-content-end'>
          <Nav.Link as={Link} to="/login">
            <Button variant="light">Don't Have an Account? </Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/signup">
            <Button variant="primary">Signup</Button>
              </Nav.Link>

          </Nav>
        </Container>
        </Navbar>
      }
    </header>
  );
}

export default LoginHeader;
