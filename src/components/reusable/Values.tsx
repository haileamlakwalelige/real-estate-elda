// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import vis from '../../assets/viso.jpg';
import mis from '../../assets/miso.jpg';
import val from '../../assets/valo.jpg';

function Values() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container py-10 md:hidden">
      <Slider {...settings}>
        <div>
          <div className="carousel-item  flex justify-center items-center flex-col py-10">
            <img src={vis} alt="" className="h-[100px] w-[100px]" />
            <p className="text-bold text-green-500 text-[24px] md:text-[28px] font-bold">
              Vision
            </p>
            <p className="text-gray-800 lg:-mt-40 lg:ml-32 px-6 text-center text-[17px] md:px-8">
              Outline the company's vision for the future, including goals for expansion,
              innovation, and continued excellence in the real estate industry.
            </p>
          </div>
        </div>
        <div>
          <div className="carousel-item md:w-auto flex justify-center items-center flex-col py-10">
            <img src={val} alt="" className="h-[100px] w-[100px]" />
            <p className="text-bold text-green-500 text-[24px] md:text-[28px] font-bold">
              Value
            </p>
            <p className="text-gray-800 lg:-mt-40 lg:ml-32 px-6 text-center text-[17px] md:px-8">
              Detail the core values that guide Eldana Spring Homes in all its endeavors,
              such as integrity, professionalism, customer satisfaction, and a commitment to
              quality.
            </p>
          </div>
        </div>
        <div>
          <div className="carousel-item md:w-auto flex justify-center items-center flex-col py-10">
            <img src={mis} alt="" className="h-[100px] w-[100px]" />
            <p className="text-bold text-green-500 text-[24px] md:text-[28px] font-bold">
              Mission
            </p>
            <p className="text-gray-800 lg:-mt-40 lg:ml-32 px-6 text-center text-[17px] md:px-8">
              Our mission is to redefine the real estate experience by providing
              unparalleled service, exceptional properties, and personalized solutions to
              meet the diverse needs of our clients.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Values;