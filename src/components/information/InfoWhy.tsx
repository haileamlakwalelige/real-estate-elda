// import React from 'react'


const InfoWhy = () => {
    return (
      <div className="bg-secondary">
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-2 sm:px-4 md:px-12 lg:px-20 flex-row-reverse text-gray-800 gap-10">
        <div className="flex justify-center items-center flex-col gap-5">
            <p className="text-footer text-[30px] md:text-[35px] lg:text-[40px] pb-8 font-semibold">Why Kaliti?</p>
            <p className="text-center font-normal text-[20px] md:text-[25px] lg:text-[30px]">Kaliti, located in the vibrant city of Addis Ababa, Ethiopia, holds a special place in our hearts at Eldana Spring Homes.</p>
          </div>
          <div className="grid grid-cols-1 justify-center items-start gap-10 px-2 sm:px-4 md:px-6">
            <div className="flex justify-start items-start">
              <p className="text-center p-3 rounded-full -mr-3 border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center"><span>1</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[20] lg:min-w-[465px] text-start z-10"> <span className="text-footer">Location:</span> Kaliti is situated in the lively city of Addis Ababa, Ethiopia, making it an integral part of our focus at Eldana Spring Homes.</p>
            </div>
  
            {/* Item 2 */}
            <div className="flex justify-start items-start">
            <p className="text-center p-3 rounded-full border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center -mr-3"><span>2</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[20] lg:min-w-[465px] text-start z-10"> <span className="text-footer">Development:</span> Kaliti is experiencing rapid growth and development, with new infrastructure projects and urbanization initiatives underway.</p>
            </div>
  
            {/* Item 3 */}
            <div className="flex justify-start items-start">
            <p className="text-center p-3 rounded-full border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center -mr-3"><span>3</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[20] lg:min-w-[465px] text-start z-10"> <span className="text-footer">Population:</span> The area's population is steadily increasing, creating a demand for housing and commercial spaces.</p>
            </div>

             {/* Item 4 */}
             <div className="flex justify-start items-start">
            <p className="text-center p-3 rounded-full border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center -mr-3"><span>4</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[20] lg:min-w-[465px] text-start z-10"> <span className="text-footer">Investment Opportunities:</span> Kaliti presents promising opportunities for real estate investment, with the potential for high returns and sustainable growth.</p>
            </div>


             {/* Item 5 */}
             <div className="flex justify-start items-start">
            <p className="text-center p-3 rounded-full border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center -mr-3"><span>5</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[20] lg:min-w-[465px] text-start z-10"> <span className="text-footer">Transformation:</span> We are committed to contributing to the transformation of Kaliti into a bustling center of residential, commercial, and industrial activity, supporting its evolution into a vibrant community.</p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  
  export default InfoWhy;