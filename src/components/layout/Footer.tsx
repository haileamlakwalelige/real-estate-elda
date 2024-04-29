// import React from 'react'
import { BiPhone } from 'react-icons/bi';
import { BiSolidLocationPlus } from "react-icons/bi";
import { IoMdMailOpen } from "react-icons/io";
import logo from '../../assets/footerlogo.png';
import twit from '../../assets/twit.png';
import link from '../../assets/link.png';
import face from '../../assets/face.png';
import insta from '../../assets/insta.png';

const Footer = () => {
  return ( 
    <div className='bg-footer min-h-[60vh] py-10'>
        <div className='flex flex-wrap gap-8 items-center justify-center lg:justify-between bg-primary px-2 sm:px-6 md:px-12 lg:px-16 '>
            <div>
                <img src={logo} alt="" className='w-[262px] h-[250px]'/>
            </div>
            <div className='flex justify-start items-center gap-3'>
                <div className='text-footer  border-r-2 border-gray-400 pr-4'>
                    <BiPhone size={20} className='my-2'/>
                    <BiSolidLocationPlus size={20} className='my-5'/>
                    <IoMdMailOpen size={20} className='my-2'/>
                </div>
                <div>
                    <p className='font-semibold text-black'>+1-123-456-7890</p>
                    <p className='my-5'>123 Main Street, Akaki Kality , Addis Ababa Ethiopia.</p>
                    <p className='font-semibold text-black'>info@abcrealestate.com</p>
                </div>
            </div>
        </div>


        {/* second footer */}
        <div className='flex gap-10 lg:gap-5 flex-col md:flex-row flex-wrap justify-center items-center  md:justify-between py-10 px-2 sm:px-6 md:px-12'>
            <div>
                <p className='text-white text-xl pb-4 text-center font-semibold'>Social Media</p>
                <div className='flex gap-4'>
                    <img src={face} alt='' className='h-[20px] w-[20px]'/>
                    <img src={link} alt='' className='h-[20px] w-[20px]'/>
                    <img src={insta} alt='' className='h-[20px] w-[20px]'/>
                    <img src={twit} alt='' className='h-[20px] w-[20px]'/>
                </div>
            </div>
            <div className='flex flex-col'>
            <p className='text-white text-xl pb-4 text-center font-semibold'>Social Media</p>
            <div className='ml-4 gap-1 flex flex-col'>
            <p className='text-white'>About Us</p>
            <p className='text-white'>Contact Us</p>
            <p className='text-white'>Properties</p>
            </div>
            </div>
            <div>
            <p className='text-white text-xl pb-4 text-center font-semibold'>Working time</p>
            <div className='flex flex-col gap-1.5'>
            <p className='text-white'>8:00 AM - 5:30 PM MON-FRI</p>
            <p className='text-white'>Sat, 8:00 AM - 12:00 AM</p>
            <p className='text-white'>Online 24hr/7day</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer