// import React from 'react'
import home from '../assets/home2.png';
import Hero from '../components/home/Hero';
import HomeAbout from '../components/home/HomeAbout';
import HomeAkakki from '../components/home/HomeAkakki';
import HomeCredential from '../components/home/HomeCredential';
import HomeExplore from '../components/home/HomeExplore';
import HomeForm from '../components/home/HomeForm';
// import HomeHero from '../components/home/HomeHero';
import HomeWhy from '../components/home/HomeWhy';
import HorizontalLine from '../components/reusable/HorizontalLine';

const Home = () => {
  return (
    <div className='bg-primary text-black overflow-x-hidden'>
      <img src={home} alt='' className='min-h-screen'/>
      {/* <HomeHero /> */}
      <Hero />
      <HorizontalLine />
      <HomeExplore />
      <HorizontalLine />
      <HomeAbout />
      <HorizontalLine />
      <HomeWhy />
      <HorizontalLine />
      <HomeAkakki />
      <HorizontalLine />
      <HomeCredential />
      <HorizontalLine />
      <HomeForm />
    </div>
  )
}

export default Home