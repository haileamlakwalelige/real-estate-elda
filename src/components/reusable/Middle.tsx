// import React from 'react'
import vis from '../../assets/viso.jpg';
import mis from '../../assets/miso.jpg';
import val from '../../assets/valo.jpg';

const Middle = () => {
  return (
    <div className='hidden md:flex xl:hidden px-10'>
        <div className="carousel rounded-box h-full">
  <div className="carousel-item h-full">
  <div className=" flex justify-center items-center  py-10 min-h-[500px]">
           <div className='grid grid-cols-1justify-center items-center '>
           <img src={vis} alt="" className="h-[100px] w-[100px]" />
            <p className="text-bold text-green-500 text-[24px] md:text-[28px] font-bold">
              Vision
            </p>
            <p className="text-gray-800 lg:-mt-40 lg:ml-32 px-6 text-center text-[17px] md:px-8">
              Outline the company's vision for the future, <br/> including goals for expansion,<br/>
              innovation, and continued excellence <br/> in the real estate industry.
            </p>
           </div>
          </div>
  </div> 

  {/* Two */}
  <div className="carousel-item h-full  border-l-2 border-gray-500 pl-10">
  <div className=" flex justify-center items-center  py-10 min-h-[500px]">
           <div className='grid grid-cols-1justify-center items-center '>
           <img src={val} alt="" className="h-[100px] w-[100px]" />
            <p className="text-bold text-green-500 text-[24px] md:text-[28px] font-bold">
              Value
            </p>
            <p className="text-gray-800 lg:-mt-40 lg:ml-32 px-6 text-center text-[17px] md:px-8">
            Detail the core values that guide Eldana <br/> Spring Homes in all its endeavors,
              such as <br/> integrity, professionalism, customer <br/> satisfaction, and a commitment to <br/>
              quality.
            </p>
           </div>
          </div>
  </div>

  {/* three */}
  <div className="carousel-item h-full  border-l-2 border-gray-500 pl-10">
  <div className=" flex justify-center items-center  py-10 min-h-[500px]">
           <div className='grid grid-cols-1justify-center items-center '>
           <img src={mis} alt="" className="h-[100px] w-[100px]" />
            <p className="text-bold text-green-500 text-[24px] md:text-[28px] font-bold">
              Mission
            </p>
            <p className="text-gray-800 lg:-mt-40 lg:ml-32 px-6 text-center text-[17px] md:px-8">
            our mission is to redefine the real estate <br/> experience by providing unparalleled <br/> service, exceptional properties, and <br/> personalized solutions to meet the <br/> diverse needs of our clients.
            </p>
           </div>
          </div>
  </div> 
  
</div>
    </div>
  )
}

export default Middle