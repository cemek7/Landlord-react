// Footer.js
import React from 'react';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className=" text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><Github size={24} /></a>
          <a href="#"><Instagram size={24} /></a>
          <a href="#"><Linkedin size={24} /></a>
          <a href="#"><Facebook size={24} /></a>
          <a href="#"><Twitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
