// import React from 'react'

const InfoTarget = () => {
  return (
    <div className='bg-secondary w-screen h-full px-2 sm:px-6 md:px-12 lg:px-20 py-10'>
        <p className='text-footer text-[30px] md:text-[35px] lg:text-[40px] text-center font-bold py-10'>Target Group</p>
        <div>
        <div className="flex justify-center items-start gap-10 px-2 sm:px-4 md:px-6 flex-col">
            <div className="flex justify-start items-start">
              <p className="text-center p-3 rounded-full -mr-3 border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center"><span>1</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[21px] lg:text-[24px] lg:min-w-[465px] text-start z-10"> 🏡  <span className="text-footer">Individuals and Families:</span> Seeking quality homes that fit their lifestyle and needs, whether it's a cozy apartment, a spacious house, or a modern condominium.</p>
            </div>
  
            {/* Item 2 */}
            <div className="flex justify-start items-start">
            <p className="text-center p-3 rounded-full border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center -mr-3"><span>2</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[21px] lg:text-[24px] lg:min-w-[465px] text-start z-10"> 💼 <span className="text-footer">Investors:</span>  Looking for lucrative opportunities in the real estate market, whether it's for rental income, property appreciation, or portfolio diversification.</p>
            </div>
  
            {/* Item 3 */}
            <div className="flex justify-start items-start">
            <p className="text-center p-3 rounded-full border-footer border-[1px] -mt-3  z-20 h-[30px] w-[30px] flex justify-center items-center -mr-3"><span>3</span></p>
              <p className="bg-white rounded-2xl py-2 px-8 text-[18px] md:text-[21px] lg:text-[24px] lg:min-w-[465px] text-start z-10">🏢 <span className="text-footer">Businesses:</span>   Searching for commercial spaces to establish or expand their operations, from retail stores and offices to warehouses and industrial facilities.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InfoTarget