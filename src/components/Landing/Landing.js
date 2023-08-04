import React from 'react';
import LandingHeader from './LandingHeader/LandingHeader';
import Hero from './Hero/Hero';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Landing({ handleMenuClick, loggedIn }) {
  return (
    <>
      {loggedIn ? <Header handleMenuClick={handleMenuClick} /> : <LandingHeader />}
      <main>
        <Hero />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default Landing;