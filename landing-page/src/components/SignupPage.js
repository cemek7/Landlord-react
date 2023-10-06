// Signup.js
import React, { useState } from 'react';
import SignupHeader from './SignupHeader';
import SignupFooter from './SignupFooter';
import {Container, Card, Form, Button, Row, Col, Alert} from 'react-bootstrap';
import { ShieldLock, Activity, Building, CreditCard2Front } from 'react-bootstrap-icons';


function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();
 // Check for errors in form fields
 if (!email || !phoneNumber || !password || !confirmPassword || errors.email || errors.phoneNumber || errors.confirmPassword) {
  setErrors({ ...errors, submit: 'Please fill in all required fields correctly' });
  return;
}

    // Implement your signup logic here
  };

  const validateEmail = () => {
    // Implement email validation logic here, e.g., using a regular expression
    // Update the 'errors' state with validation results
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, email: '' });
    }
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

  const validatePasswordConfirmation = () => {
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
    } else {
      setErrors({ ...errors, confirmPassword: '' });
    }


    // Perform signup logic here
    // For this example, we're simply logging the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);



        // Reset form fields
        setName('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');


        // Optionally, display a success message
    setErrors({ ...errors, success: 'Signup successful' });
  };

  const smallerInputStyle = {
    width: '50%', // Adjust the width to your preferred size
  };

  const colleftstyle ={
    background:'light',
    //textAlign: 'center',
    justifyContent: 'right',
    alignItems: 'right',
    marginLeft:'80px',
  };
  const buttonstyle = {
    marginTop:'20px',
  }

  return (
    <div>
       <SignupHeader />
      {
      /* Login form and content */
      
      <Container>
      <Row>
        <Col className='justify-content-md-center bg-body-tertiary' bg="light" data-bs-theme="light" style={colleftstyle}>
        <div className=' justify-content-end'>
          <h1> Create an Account</h1>
          <p> <ShieldLock /> Transparency and Security</p>
          <p> <Activity /> Real-Time Trading</p>
          <p> <Building /> Real-Estate Fractionalization made easy </p>
          <p> <CreditCard2Front /> Secure Payments</p>
        </div>
        </Col>


        <Col>
        <div className="container small-container">
        <img
            src="icon-logo.jpeg" // Replace with your image URL
            alt=''
            className="img-fluid small-logo thumbnail" // Add Bootstrap classes to center and style the image
          />
        </div>
        <h2>Sign Up</h2>
        {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}
      {errors.success && <Alert variant="success">{errors.success}</Alert>}
      
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control-sm smaller-input"
            style={smallerInputStyle}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            isInvalid={errors.email}
            className="form-control-sm smaller-input"
            style={smallerInputStyle}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={validatePhoneNumber}
            isInvalid={errors.phoneNumber}
            className="form-control-sm smaller-input"
            style={smallerInputStyle}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={errors.password}
            className="form-control-sm smaller-input"
            style={smallerInputStyle}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            size="sm"
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validatePasswordConfirmation}
            isInvalid={errors.confirmPassword}
            className=" smaller-input"
            style={smallerInputStyle}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" style={buttonstyle}>
          Sign Up
        </Button>
      </Form>
      
        </Col>
      </Row>
      </Container>
      }
      <SignupFooter />
    </div>
  );
}

export default Signup;
