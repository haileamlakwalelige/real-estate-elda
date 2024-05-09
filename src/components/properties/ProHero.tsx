// import React from 'react';
import ProHeroImage from '../../assets/prophome.png';

const ProHero: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ProHeroImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', // 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        color: 'white', // Text color on top of the image
      }}
    >
     <div className='flex flex-col justify-center items-start pb-10 px-2 sm:px-6 md:px-12 lg:px-20'>
     <h1 className='text-[50px] md:text-[60px] lg:text-[70px] font-bold'>Explore Our Properties</h1>
      <p className='text-[20px] md:text-[24px] lg:text-[28px]'>At Eldana Spring Homes, we pride ourselves on offering a diverse range of properties designed to meet the needs and preferences of our clients. Whether you're searching for a cozy apartment or a spacious family home, we have something for everyone.</p>
     </div>
    </div>
  );
};

export default ProHero;
