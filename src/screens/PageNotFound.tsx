// import React from 'react'
import { Link } from 'react-router-dom';
import pagenotfound from '../assets/pagenotfound.svg';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <img src={pagenotfound} alt="" className='max-h-[80vh] relative'/>
        <div className='flex items-center gap-1 justify-center text-gray-800 text-[[20px] md:text-[25px] lg:text-[30px] font-bold'>
            <p>Go To</p>
            <Link to="/" className='text-green-500 hover:text-green-800 hover:border-b-[2px] border-r-gray-600 duration-200'>Home</Link>
        </div>
    </div>
  )
}

export default PageNotFound