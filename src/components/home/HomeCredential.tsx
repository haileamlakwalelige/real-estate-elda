// import React from 'react'
import cre1 from '../../assets/cre1.png';
import cre2 from '../../assets/cre2.png';
import cre3 from '../../assets/cre3.png';

const HomeCredential = () => {
  return (
    <div>
      <h1 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-center py-3 px-2 sm:px-6 md:px-12 lg:px-20 pb-10">Why Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-10 lg:gap-20 px-2 sm:px-6 md:px-12 lg:px-20'>
        <div className='text-center justify-center flex flex-col items-center gap-4'>
          <img src={cre1} alt="" className='h-[105px] w-[105px] md:mt-4'/>
          <p className='text-black font-semibold text-center text-[20px]'>Trusted Credentials</p>
          <p className='text-black text-[12px] md:text-[14px]'>ELDANA Spring Homes: Your trusted, fully licensed residential expert. With vast experience and a commitment to professionalism, we ensure compliance with regulations and exceed industry standards for your real estate requirements."</p>
        </div>

        {/* Item 2 */}
        <div className='text-center justify-center flex flex-col items-center gap-4'>
          <img src={cre2} alt="" className='h-[105px] w-[105px]'/>
          <p className='text-black font-semibold text-center text-[20px]'>
            Strategic Location <br/>Selection</p>
          <p className='text-black text-[12px] md:text-[14px]'>We select prime locations with convenience and thriving communities, ensuring our residents enjoy the best living environment and investment potential.</p>
        </div>

        {/* Item 3 */}
        <div className='text-center justify-center flex flex-col items-center gap-4'>
          <img src={cre3} alt="" className='h-[105px] w-[105px]'/>
          <p className='text-black font-semibold text-center text-[20px]'>
          Uncompromising Quality <br/> Assurance</p>
          <p className='text-black text-[12px] md:text-[14px]'>Our top priority is quality, upheld from materials selection to craftsmanship throughout the construction process. We're dedicated to ensuring our esteemed residents enjoy comfortable and lasting living experiences in our superior residences.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCredential