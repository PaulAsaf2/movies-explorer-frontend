import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import AboutProject from './AboutProject/AboutProject';

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <main className='main'>
        <AboutProject />
      </main>
    </>
  )
}

export default Main;