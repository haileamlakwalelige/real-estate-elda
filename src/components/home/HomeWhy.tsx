// import React from 'react'


const HomeWhy = () => {
  return (
    <div className="bg-secondary">
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-2 sm:px-4 md:px-12 lg:px-20">
        <div className="flex justify-center items-start gap-10 px-2 sm:px-4 md:px-6 flex-col">
          <div className="flex justify-start items-start">
            <p className="w-7 h-7 text-center p-1 rounded-full border-footer border-[1px] -mt-3 -mr-3 z-20">1</p>
            <p className="bg-white rounded-2xl py-2 flex justify-items-center px-10 text-[18px] md:text-[21px] lg:text-[24px] lg:min-w-[465px] text-center z-10"> Unique Living Experience</p>
          </div>

          {/* Item 2 */}
          <div className="flex justify-start items-start">
            <p className="w-7 h-7 text-center p-1 rounded-full border-footer border-[1px] -mt-3 -mr-3 z-20">2</p>
            <p className="bg-white rounded-2xl py-2 flex justify-items-center px-10 text-[18px] md:text-[21px] lg:text-[24px] lg:min-w-[465px] text-center z-10"> Fully Finished Luxury</p>
          </div>

          {/* Item 3 */}
          <div className="flex justify-start items-start">
            <p className="w-7 h-7 text-center p-1 rounded-full border-footer border-[1px] -mt-3 -mr-3 z-20">3</p>
            <p className="bg-white rounded-2xl py-2 flex justify-items-center px-10 text-[18px] md:text-[21px] lg:text-[24px] lg:min-w-[465px] text-center z-10"> Family-Friendly Three-Bedroom Layouts</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-footer text-[30px] md:text-[35px] lg:text-[40px] pb-8 font-semibold">Why Choose Us?</p>
          <p className="text-center font-normal text-[20px] md:text-[25px] lg:text-[30px]">We take pride in offering a unique living experience that blends comfort, convenience, and community.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeWhy;