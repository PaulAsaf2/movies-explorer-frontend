import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <main className='main'>
        <AboutProject />
        <Techs />
      </main>
    </>
  )
}

export default Main;