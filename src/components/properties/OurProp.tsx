// import React from 'react'

// import OurRight from "./OurRight";
import { ImageSlider } from "./ImageSlider"
import car1 from "./imgs/car-1.jpg"
import car2 from "./imgs/car-2.jpg"
import car3 from "./imgs/car-3.jpg"
import car4 from "./imgs/car-4.jpg"
import car5 from "./imgs/car-5.jpg"
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';
import seven from '../../assets/7.png';
import eight from '../../assets/8.png';
import nine from '../../assets/9.png';
import ten from '../../assets/10.png';
import eleven from '../../assets/11.png';
import twelve from '../../assets/12.png';


const IMAGES = [
  { url: one, alt: "" },
  { url: two, alt: "Car Two" },
  { url: three, alt: "Car Three" },
  { url: four, alt: "Car Four" },
  { url: five, alt: "Car Five" },
  { url: one, alt: "Car One" },
  { url: two, alt: "Car Two" },
  { url: three, alt: "Car Three" },
  { url: four, alt: "Car Four" },
  { url: five, alt: "Car Five" },
]



const OurProp = () => {
    return (
        <div className="px-2 sm:px-4 md:px-10 lg:px-16 py-10">
            <p className="text-black text-[28px] md:text-[30px] lg:text-[32px]">Our Property Listings</p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-black mb-10">Below are some of the properties currently available through Eldana Spring Homes.</p>
            <div className="bg-primary flex py-5 justify-center items-center gap-10 flex-wrap md:flex-nowrap">
            <div className='px-2 sm:px-3 lg:w-1/2'>
                <p className="text-footer text-start font-semibold text-[24px] mb-5">Discover Your Dream Home at ABC Apartments</p>
                <p className='font-normal text-[16px] text-black'>Our family-oriented apartments offer spacious 3-bedroom layouts, fully finished, underground parking facilities, a reliable standby generator, and a dedicated transformer for uninterrupted power supply. Experience the perfect blend of comfort, convenience, and peace of mind for you and your families at ELDANA Spring Homes.</p>
            </div>
            <div className="lg:w-1/2">
                {/* <OurRight /> */}
                <ImageSlider images={IMAGES} />
            </div>
            </div>
        </div>
    )
}


export default OurProp;