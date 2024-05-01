// import React from 'react'

import Button from "../reusable/Button";



const HomeForm = () => {
    return (
        <div className="bg-secondary">
            <div className="py-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-start px-2 sm:px-4 md:px-12 lg:px-20">
                <form className="flex justify-center items-start gap-10 px-2 sm:px-4 md:px-6 flex-col">


                    {/* Item 1 */}
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-footer text-[14px] pb-2">Full Name</p>
                        <input type="text" className="min-w-[300px] lg:min-w-[465px] px-2 h-[50px] bg-primary placeholder:px-2 placeholder:text-footer text-footer rounded outline-none focus:outline-none" />
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-footer text-[14px] pb-2">Email</p>
                        <input type="email" className="min-w-[300px] lg:min-w-[465px] px-2 h-[50px] bg-primary placeholder:px-2 placeholder:text-footer text-footer rounded outline-none focus:outline-none" />
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-footer text-[14px] pb-2">Message</p>
                        <textarea rows={4} className="min-w-[300px] lg:min-w-[465px] px-2 bg-primary placeholder:px-2 placeholder:text-footer text-footer rounded outline-none focus:outline-none py-0.5" />
                    </div>
                    <div className="flex justify-start md:justify-center md:items-center items-start text-center min-w-[465px] mb-10 lg:mb-0">
                        <Button type="submit" text="Subscribe" />
                    </div>
                </form>
                <div className="flex justify-center items-center flex-col gap-5">
                    <p className="text-footer text-[30px] md:text-[35px] lg:text-[40px] pb-8 font-semibold">Get in Touch</p>
                    <p className="text-center font-normal text-[20px] md:text-[22px] lg:text-[24px]">WPlease feel free to reach out to our dedicated team. We are here to assist you every step of the way in finding your dream home at our newly built apartments.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeForm;