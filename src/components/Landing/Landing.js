import React from 'react';
import LandingHeader from './LandingHeader/LandingHeader';
import Hero from './Hero/Hero';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Landing() {
  return (
    <div>
      <LandingHeader />
      <main>
        <Hero />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  )
}

export default Landing;