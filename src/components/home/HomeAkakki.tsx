import about from '../../assets/about.png';

const HomeAkakki = () => {

  return (
    <div>
        <h1 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-center py-3 px-2 sm:px-6 md:px-12 lg:px-20">About Akaki</h1>
        {/* <p className="text-black text-[20px] px-2 sm:px-6 md:px-12 lg:px-20 text-center mb-5">Discover the epitome of modern living with our exclusive collection of fully finished 3-bedroom luxury apartments nestled in the heart of Akaki Kality Sub-city, Addis Ababa.</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-2 sm:mx-4">
            <div className='px-2 sm:px-3 bg-secondary py-12 lg:px-6'>
                <p className="text-footer text-start font-semibold text-[24px] mb-5">Addis Ababa&apos;s Thriving Akaki Kality</p>
                <p className='font-normal text-[16px]'>Unlock the potential of Akaki Kality, nestled in the heart of Addis Ababa's industrial landscape. Despite its challenges, this dynamic subcity boasts a growing population and a thriving industrial sector. From factory workers to civil servants, its diverse community contributes to its vibrancy.</p>
            </div>
            <div>
                <img src={about} alt="" className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default HomeAkakki;