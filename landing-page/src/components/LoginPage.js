// Login.js
import React, { useState } from 'react';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import { Container, Card, Form, Button, Alert, Nav, CardHeader, CardBody } from 'react-bootstrap';

//import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

function Login() {

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password || errors.email) {
      setErrors({ ...errors, submit: 'Please fill in all required fields' });
      return;
    }
    // Implement your login logic here
  };

  const validatePhoneNumber = () => {
    // Implement phone number validation logic here, e.g., using a regular expression
    // Update the 'errors' state with validation results
    const phonePattern = /^\d{10}$/; // For simplicity, assumes a 10-digit phone number
    if (!phonePattern.test(phoneNumber)) {
      setErrors({ ...errors, phoneNumber: 'Invalid phone number' });
    } else {
      setErrors({ ...errors, phoneNumber: '' });
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, email: '' });
    }


     // Reset form fields
     setEmail('');
     setPassword('');

          // Optionally, display a success message
    setErrors({ ...errors, success: 'Login successful' });


  };
  const smallerInputStyle = {
    width: '80%', // Adjust the width to your preferred size
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };
  const imageContainerStyle = {
    marginBottom: '20px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const buttonstyle = {
    marginTop:'20px',
  }
  const loginheadstyle ={

    marginTop:'20px',
    marginBottom:'20px',
    marginLeft:'20px',
  }

  const [activeTab, setActiveTab] = useState('#first');

const handleTabChange = (tab) => {
  setActiveTab(tab);
};


  return (
    <div>
       <LoginHeader />
      {
      /* Login form and content */
      <Container style={containerStyle}>
        <div className="container small-container" style={imageContainerStyle}>
        <img
            src="icon-logo.jpeg" // Replace with your image URL
            alt=''
            className="img-fluid small-logo thumbnail" // Add Bootstrap classes to center and style the image
          />
        </div>
        <Card mx-auto style={{ width: '350px' }}>
        <div className='justify-content-md-center'>
      <h2 style={loginheadstyle}>Log in to Landlords</h2>
      {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}
      {errors.success && <Alert variant="success">{errors.success}</Alert>}
      <CardHeader>
      <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
            <Nav.Link href="#first" onClick={() => handleTabChange('#first')}>
              Email
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => handleTabChange('#link')}>
              Phone Number
            </Nav.Link>
          </Nav.Item>
          </Nav>


      </CardHeader>
      <CardBody>
      <Form gap={2} onSubmit={handleLogin}>
      {activeTab === '#first' ? (
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                isInvalid={errors.email}
                style={smallerInputStyle}
                className="form-control-sm"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          ) : (
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={validatePhoneNumber}
                isInvalid={errors.phoneNumber}
                style={smallerInputStyle}
                className="form-control-sm"
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
          )}

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={errors.password}
            style={smallerInputStyle}
            className="form-control-sm"
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button style={buttonstyle} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </CardBody>
      </div>
      </Card>
    </Container>
      }
      <LoginFooter />
    </div>
  );
}

export default Login;
