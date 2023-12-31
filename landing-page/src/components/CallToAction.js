// CallToAction.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section id="cta" className="bg-light text-dark" bg="light" data-bs-theme="light">
    <Container>
    <div className="mt-4">
          <img
            src="icon-logo.jpeg" // Replace with your image URL
            alt=''
            className="img-fluid thumbnail" // Add Bootstrap classes to center and style the image
          />
        </div>
      <h1>One App For</h1><br/>
      <h1>Everything Real Estate.</h1>
      <br />
      <p>Own, Rent and Invest in Real Estate the easy way
      <br /> Open your account to get Started</p>
      <Link as={Link} to="/signup"><Button variant="primary">Get a free Account</Button></Link>
    </Container>
  </section>
  );
}

export default CallToAction;
