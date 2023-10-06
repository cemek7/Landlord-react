// LandingPage.js
import React from 'react';
import Features from './Features';
import CallToAction from './CallToAction';
import Header from './Header';
import Footer from './Footer';

function LandingPage() {
  return (
    <div>
      <Header />
      <CallToAction />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
