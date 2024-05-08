// import React from 'react'
import story from '../../assets/story.png';
import vis from '../../assets/vis.png';
import mis from '../../assets/mis.png';
import val from '../../assets/val.png';

const AboutStory = () => {
  return (
    <div  style={{
        backgroundImage: `url(${story})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        color: 'white', // Text color on top of the image
      }} className='py-10 overflow-hidden h-full lg:h-[100vh]'>
       <div className='px-2 md:px-4 lg:px-10 xl:px-16 flex flex-col'>
      <div className='flex justify-between items-center gap-10 w-screen lg:pr-28'>
        <div>
        <p className='text-normal text-[30px] md:text-[35px] lg:text-[40px] text-black uppercase'>Our Story</p>
        <div className='flex'>
        <div className='h-[2px] w-[70px] text-red-500 bg-red-500'></div>
        <div className='h-[2px] w-[70px] text-blue-500 bg-blue-500'></div>
        <div className='h-[2px] w-[70px] text-green-500 bg-green-500'></div>
        </div>
        <div className='mt-20 text-black text-[20px] md:text-[22px] '>
          <p>Share the journey of Eldana Spring Homes, including its founding <br/> principles, values, and mission. Highlight any milestones or <br/> achievements that demonstrate the company's growth and success.</p>
        </div>
        </div>
         <div className='mt-10 hidden xl:flex flex-col items-center justify-start'>
          <img src={vis} alt='' className='max-h-[300px]'/>
          <p className='text-black lg:-mt-40 lg:ml-32 '>Outline the company's vision for the <br/> future, including goals for expansion<br/>, innovation, and continued excellence in <br/> the real estate industry.</p>
         </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10 w-screen lg:pr-28'>
        <div className='mt-20'>
          <p className='pac text-blue-600 text-[24px] md:text-[28px] lg:text-[32px]'>Eldana Spring Homes</p>
        </div>
          <div className='mt-10 hidden xl:flex flex-col items-center justify-start'>
          <img src={val} alt='' className='max-h-[300px]'/>
          <p className='text-black lg:-mt-40 lg:ml-32 '>Detail the core values that guide Eldana <br/> Spring Homes in all its endeavors, such <br/> as integrity, professionalism, customer <br/> satisfaction, and a commitment to <br/> quality.</p>
         </div>
         <div className='mt-10 hidden xl:flex flex-col items-center justify-start'>
          <img src={mis} alt='' className='max-h-[300px]'/>
          <p className='text-black lg:-mt-40 lg:ml-32 '>our mission is to redefine the real estate <br/> experience by providing unparalleled <br/> service, exceptional properties, and <br/> personalized solutions to meet the <br/> diverse needs of our clients.</p>
         </div>
        </div>
       </div>
     
      </div>
  )
}

export default AboutStory