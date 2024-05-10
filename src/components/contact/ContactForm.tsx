// import React from 'react'

import { useState } from "react"
import Button from "../reusable/Button"
import { FaPlusCircle } from "react-icons/fa";


const ContactForm = () => {
    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);

    const handleOne = () => {
        setFaq1(true);
        setFaq2(false);
        setFaq3(false);
    }
    const handleTwo = () => {
        setFaq1(false);
        setFaq2(true);
        setFaq3(false);
    }
    const handleThree = () => {
        setFaq1(false);
        setFaq2(false);
        setFaq3(true);
    }

    return (
        <div className="px-2 sm:px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-start gap-16 items-start">
                <div className="cols-span-1">
                    <form className="flex justify-center border-[1px] rounded-2xl border-gray-500 items-center py-10 my-10 gap-5 px-2 sm:px-4 md:px-6 flex-col">

                        {/* Item 1 */}
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-gray-800 text-[14px] pb-2 font-semibold">Full Name</p>
                            <input type="text" className="min-w-[300px]  px-2 h-[45px] bg-primary border-[1px] border-footer rounded-lg  placeholder:px-2 placeholder:text-gray-800 text-gray-800 outline-none focus:outline-none" />
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-gray-800 text-[14px] pb-2 font-semibold">Email</p>
                            <input type="email" className="min-w-[300px]  px-2 h-[45px] bg-primary border-[1px] border-footer rounded-lg placeholder:px-2 placeholder:text-gray-800 text-gray-800 outline-none focus:outline-none" />
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-gray-800 text-[14px] pb-2 font-semibold">Subject</p>
                            <input type="text" className="min-w-[300px]  px-2 h-[45px] bg-primary border-[1px] border-footer rounded-lg placeholder:px-2 placeholder:text-gray-800 text-gray-800 outline-none focus:outline-none" />
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-gray-800 text-[14px] pb-2 font-semibold">How can we help?</p>
                            <textarea rows={3} className="min-w-[300px]  px-2 bg-primary border-[1px] border-footer rounded-lg  placeholder:px-2 placeholder:text-gray-800 text-gray-800 outline-none focus:outline-none py-0.5" />
                        </div>
                        <div className="flex justify-center items-center text-center min-w-[465px] mb-10 lg:mb-0 mt-5">
                            <Button type="submit" text="Send" />
                        </div>
                    </form>
                </div>
                <div className="col-span-1 lg:col-span-2 my-10 justify-start items-start">
                    <p className="text-footer text-[20px] md:text-[22px] lg:text-[24px] font-semibold">Contact Us</p>
                    <p className="text-[26px] md:text-[29px] lg:text-[32px] text-gray-800  font-semibold">How can we help?</p>
                    <p className="text-[18px] md:text-[20px] lg:text-[24px] text-gray-800">To know more about Eldana spring home services, please fill out the contact form and a member of the team will be in touch soon.</p>
                    <div className="mt-10 flex flex-col gap-5 ">
                        <div className="flex justify-between items-center gap-10 lg:gap-20 xl:gap-40">
                            <p className="text-gray-800 text-[18px] md:text-[20px] lg:text-[22px]"> Apartment for family </p>
                            <FaPlusCircle className="bg-white cursor-pointer text-footer h-[20px] w-[20px]" size={15} onClick={handleOne} />
                        </div>
                        {faq1 && <div>
                            <p className="text-gray-800 text-[16px] lg:text-[18px]">Spacious 3-bedroom luxury apartments in Addis Ababa, ideal for families seeking comfort and convenience. Includes underground parking and standby generator.</p>
                        </div>}
                        <hr className="text-gray-800 w-full h-[2px]" />
                        <div className="flex justify-between items-center gap-10 lg:gap-20 ">
                            <p className="text-gray-800 text-[18px] md:text-[20px] lg:text-[22px] w-full"> More about Eldana spring home </p>
                            <FaPlusCircle className="bg-white cursor-pointer text-footer h-[24px] w-[24px]" size={15} onClick={handleTwo} />
                        </div>
                        {faq2 && <div>
                            <p className="text-gray-800 text-[16px] lg:text-[18px]">
                                Eldana Spring Homes offer fully finished 3-bedroom luxury apartments in Addis Ababa, featuring family-oriented layouts, underground parking, standby generator, and a dedicated transformer for uninterrupted power supply, ensuring comfort and convenience.
                            </p>
                        </div>}
                        <hr className="text-gray-800 w-full h-[2px]" />
                        <div className="flex justify-between items-center gap-10 lg:gap-20 xl:gap-40">
                            <p className="text-gray-800 text-[18px] md:text-[20px] lg:text-[22px]"> How to get us </p>
                            <FaPlusCircle className="bg-white cursor-pointer text-footer h-[20px] w-[20px]" size={15} onClick={handleThree} />
                        </div>
                        {faq3 && <div>
                            <p className="text-gray-800 text-[16px] lg:text-[18px]">
                                To find Eldana Spring Homes in Akaki Kality Sub-city, Addis Ababa, simply reach out to us through our website or contact us directly for location details and directions. We look forward to welcoming you!
                            </p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm