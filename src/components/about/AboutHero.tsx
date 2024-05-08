// import React from 'react'
import hero from '../../assets/aboutbg.png';
import about from '../../assets/about2.png';

const AboutHero = () => {
  return (
    <div     style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', // 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Text color on top of the image
      }} className='overflow-x-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
            <div className='lg:pl-4 lg:items-start flex justify-center items-center flex-col'>
                <p className='text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] font-bold'>About</p>
                <p className='text-[30px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-bold'>Eldana Spring Homes</p>
            </div>
            <div style={{
        backgroundImage: `url(${about})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        minHeight:"320px"
      }} className='min-w-[300px] md:w-full text-black lg:max-w-[500px] xl:max-w-[550px] px-2 md:px-5 lg:px-10 rounded-2xl'>
        <p className='py-2 px-4 text-[20px] md:text-[22px] text-center'>At Eldana Spring Homes, we believe that finding the perfect home is more than just a transaction; it's about creating a sanctuary where families can thrive and memories are made. With a commitment to excellence and a passion for delivering exceptional properties, we are dedicated to helping our clients find their dream homes.</p>
      </div>
        </div>
      </div>
  )
}

export default AboutHero