// import React from 'react'
import cant from '../../assets/cant.png';

const Cant = () => {
  return (
    <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 py-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center ">
            <div className="col-span-1 lg:col-span-2">
                <p className="text-[20px] md:text-[25px] lg:text-[27px] text-gray-800">Can't reach us during business hours? No problem! You can also fill out the contact form below, and a member of our team will get back to you as soon as possible. At Eldana Spring Homes, we're committed to providing exceptional service and personalized attention to each of our clients. Let us help you find your dream home or investment property today!</p>
            </div>
            <div className="col-span-1 lg:pr-20">
                <img src={cant} alt="" className="max-h-[317px] max-w-[434px] lg:pr-10"/>
            </div>
        </div>
    </div>
  )
}

export default Cant