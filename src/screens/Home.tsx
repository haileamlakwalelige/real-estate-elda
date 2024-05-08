// import React from 'react'
// import Hero from '../components/home/Hero';
import HomeAbout from '../components/home/HomeAbout';
import HomeAkakki from '../components/home/HomeAkakki';
import HomeCredential from '../components/home/HomeCredential';
import HomeExplore from '../components/home/HomeExplore';
import HomeForm from '../components/home/HomeForm';
import HomeHero from '../components/home/HomeHero';
import HomeProperty from '../components/home/HomeProperty';
import HomeWhy from '../components/home/HomeWhy';
import Try from '../components/home/HomeExplorer2';
import HorizontalLine from '../components/reusable/HorizontalLine';

const Home = () => {



  return (
    <div className='bg-primary text-black overflow-x-hidden'>
      <HomeHero />
      <HorizontalLine />
      <HomeExplore />
      <Try />
      <HorizontalLine />
      <HomeAbout />
      <HorizontalLine />
      <HomeWhy />
      <HorizontalLine />
      <HomeAkakki />
      <HorizontalLine />
      <HomeCredential />
      <HorizontalLine />
      <HomeProperty />
      <HorizontalLine />
      <HomeForm />
    </div>
  )
}

export default Home