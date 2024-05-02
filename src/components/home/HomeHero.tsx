// import React from 'react';
import home1 from '../../assets/home1.png';
import home2 from '../../assets/home2.png';
import home3 from '../../assets/home3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings as SliderSettings } from "react-slick";
import Button from '../reusable/Button';

const HomeHero = () => {

  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div>
       <Slider {...settings} className='z-10 relative'>
        <div>
          <img src={home1} alt="" className="w-screen h-screen" />
        </div>
        <div>
          <img src={home2} alt="" className="w-screen h-screen" />
        </div>
        <div>
          <img src={home3} alt="" className="w-screen h-screen" />
        </div>
      </Slider>
      <div className='-mt-96 z-30 absolute ml-4 sm:ml-8 md:ml-12 lg:ml-20'>
        <p className='text-white font-bold text-[50px] md:text-[60px] lg:text-[70px] py-4'>ELDANA Spring Homes</p>
        <p className='text-white text-[26px] md:text-[30px] lg:text-[34px] mb-8'>Where Luxury Meets Comfort</p>
        <div className='ml-10'>
        <Button type='button' text='Contact Us' />
        </div>
      </div>
    </div>
  )
}

export default HomeHero;