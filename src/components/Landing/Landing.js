import React from 'react';
import LandingHeader from './LandingHeader/LandingHeader';
import Hero from './Hero/Hero';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

function Landing() {
  return (
    <main>
      <LandingHeader />
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  )
}

export default Landing;