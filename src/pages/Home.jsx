import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Departments from '../components/Departments';
import WhatSetsApart from '../components/WhatSetsApart';
import Features from '../components/Features';
import CaseStudies from '../components/CaseStudies';
import Resources from '../components/Resources';
import AnalystRecognition from '../components/AnalystRecognition';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Departments />
        <WhatSetsApart />
        <Features />
        <CaseStudies />
        <Resources />
        <AnalystRecognition />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
