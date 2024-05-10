import about from '../../assets/about.png';

const HomeAbout = () => {
  return (
    <div>
        <h1 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-center py-3 px-2 sm:px-6 md:px-12 lg:px-20">About ELDANA Spring Homes</h1>
        <p className="text-gray-800 text-[20px] px-2 sm:px-6 md:px-12 lg:px-20 text-center mb-5">Discover the epitome of modern living with our exclusive collection of fully finished 3-bedroom luxury apartments nestled in the heart of Akaki Kality Sub-city, Addis Ababa.</p>
        <div className="bg-secondary grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-2 sm:mx-4 gap-6">
            <div className='px-2 sm:px-3'>
                <p className="text-footer text-start font-semibold text-[24px] mb-5">Discover Your Dream Home at ABC Apartments</p>
                <p className='font-normal text-[16px]'>Our family-oriented apartments offer spacious 3-bedroom layouts, fully finished, underground parking facilities, a reliable standby generator, and a dedicated transformer for uninterrupted power supply. Experience the perfect blend of comfort, convenience, and peace of mind for you and your families at ELDANA Spring Homes.</p>
            </div>
            <div>
                <img src={about} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomeAbout