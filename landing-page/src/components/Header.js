// Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#how-it-works">How it Works</Nav.Link>
            <Nav.Link href="#benefits">Benefits</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#faqs">Faqs</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='justify-content-end'>
          <Nav.Link as={Link} to="/signup">
            <Button variant="primary">Signup</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
            <Button variant="light">Login</Button>
              </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  );
}

export default Header;

