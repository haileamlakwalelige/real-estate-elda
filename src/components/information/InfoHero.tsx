// import React from 'react'
import hero from '../../assets/aboutbg.png';
import about from '../../assets/info.png';

const InfoHero = () => {
  return (
    <div     style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', // 100% of the viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Text color on top of the image
      }} className='overflow-x-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
            <div className='lg:-mt-10 pl-2 sm:pl-4 md:pl-8 lg:pl-16 xl:pl-20 lg:items-start flex justify-center items-center flex-col pt-32 lg:pt-0'>
                <p className=' text-[20px] md:text-[25px] lg:text-[30px] font-bold'>We're more than just a brokerage; we're community builders, dedicated to fostering growth and prosperity for individuals and families alike.</p>
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
      }} className='min-w-[300px] md:w-full text-gray-800 md:min-w-[350px] lg:min-w-[400px] lg:max-w-[500px] xl:min-w-[500px] xl:max-w-[550px] px-2 md:px-5 lg:px-10 rounded-2xl'>
      </div>
        </div>
      </div>
  )
}

export default InfoHero