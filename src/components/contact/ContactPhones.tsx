// import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactPhones = () => {
    return (
        <div className="px-2 sm:px-6 md:px-10 lg:px-20 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center border-[1px] border-gray-400 rounded-3xl p-10 gap-10 lg:gap-0">

                {/* 1 */}
                <div className="flex flex-col justify-center items-center gap-1">
                    <FaLocationDot className="text-footer mb-2" size={24} />
                    <div className="w-full h-[1px] bg-gray-400 text-gray-400 "></div>
                    <p className="text-gray-800 text-[20px]">Ethiopia</p>
                    <p className="text-[16px] text-gray-800">123 Main Street, Akaki Kality , Addis Ababa.</p>
                </div>

                {/* 2 */}
                <div className="flex flex-col justify-center items-center gap-1">
                    <MdEmail className="text-footer mb-2" size={24}/>
                    <div className="w-full h-[1px] bg-gray-400 text-gray-400 "></div>
                    <p className="text-gray-800 text-[20px]">Email</p>
                    <p className="text-[16px] text-gray-800">info@abcrealestate.com</p>

                </div>

                {/* 3 */}
                <div className="flex flex-col justify-center items-center gap-1">
                    <FaPhoneAlt className="text-footer mb-2" size={24}/>
                    <div className="w-full h-[1px] bg-gray-400 text-gray-400 "></div>
                    <p className="text-gray-800 text-[20px]">Phone</p>
                    <p className="text-[16px] text-gray-800">+1-123-456-7890</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPhones