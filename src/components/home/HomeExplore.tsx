import React, { useState } from 'react';
import sub1 from '../../assets/sub1.png';
import sub2 from '../../assets/sub2.png';
import sub3 from '../../assets/sub3.png';
import sub4 from '../../assets/sub4.png';
// Import other images if needed

const HomeExplore = () => {
    const [isHover1, setIsHovered1] = useState(false);
    const [isHover2, setIsHovered2] = useState(false);
    const [isHover3, setIsHovered3] = useState(false);
    const [isHover4, setIsHovered4] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };
    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };
    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };
    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };

    return (
        <div>
            <p className='text-black font-semibold text-[28px] text-center pb-5  md:text-[30px] lg:text-[32px]'>Explore what we have</p>
            <div className='flex flex-wrap justify-center lg:justify-between items-center px-2 gap-6 sm:px-6 md:px-12 lg:px-20 xl:px-24'>
                <div 
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    style={{ position: 'relative' }} // Add this style for proper positioning
                    className='max-h-[336px] max-w-[240px] overflow-hidden'

                >
                    <img
                        src={sub1}
                        alt=""
                        className={`overflow-hidden max-h-[336px] max-w-[240px] relative ${isHover1 ? "zoomed" : ""}`}
                        style={{
                            transition: 'transform 0.5s ease', // Add smooth transition
                            transformOrigin: 'center', // Scale from the center
                            transform: isHover1 ? 'scale(1.1)' : 'scale(1)' // Scale factor
                        }}
                    />
                    <p className={`font-bold text-[26px]  absolute text-white -mt-[50%] text-center ml-[20%] ${isHover1 ? "flex":"hidden"}`}>Fully finished<br/>Apartments</p>
                </div>
                
                {/* Item 2 */}
                <div 
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    style={{ position: 'relative' }} // Add this style for proper positioning
                    className='max-h-[336px] max-w-[240px] overflow-hidden'

                >
                    <img
                        src={sub2}
                        alt=""
                        className={`overflow-hidden max-h-[336px] max-w-[240px] relative ${isHover2 ? "zoomed" : ""}`}
                        style={{
                            transition: 'transform 0.5s ease', // Add smooth transition
                            transformOrigin: 'center', // Scale from the center
                            transform: isHover2 ? 'scale(1.1)' : 'scale(1)' // Scale factor
                        }}
                    />
                   <p className={`font-bold text-[26px]  absolute text-white -mt-[50%] text-center ml-[20%] ${isHover2 ? "flex":"hidden"}`}>Underground<br/>Parking</p>
                </div>

                {/* Item 3 */}
                <div 
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    style={{ position: 'relative' }} // Add this style for proper positioning
                    className='max-h-[336px] max-w-[240px] overflow-hidden'

                >
                    <img
                        src={sub3}
                        alt=""
                        className={`overflow-hidden max-h-[336px] max-w-[240px] relative ${isHover3 ? "zoomed" : ""}`}
                        style={{
                            transition: 'transform 0.5s ease', // Add smooth transition
                            transformOrigin: 'center', // Scale from the center
                            transform: isHover3 ? 'scale(1.1)' : 'scale(1)' // Scale factor
                        }}
                    />
                    <p className={`font-bold text-[26px]  absolute text-white -mt-[50%] text-center ml-[25%] ${isHover3 ? "flex":"hidden"}`}>3 Bedroom</p>
                </div>

                {/* Item 4 */}
                <div 
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                    style={{ position: 'relative' }} // Add this style for proper positioning
                    className='max-h-[336px] max-w-[240px] overflow-hidden'
                >
                    <img
                        src={sub4}
                        alt=""
                        className={`overflow-hidden max-h-[336px] max-w-[240px] relative ${isHover4 ? "zoomed" : ""}`}
                        style={{
                            transition: 'transform 0.5s ease', // Add smooth transition
                            transformOrigin: 'center', // Scale from the center
                            transform: isHover4 ? 'scale(1.1)' : 'scale(1)' // Scale factor
                        }}
                    />
                    <p className={` font-bold text-[26px] absolute text-white -mt-[50%] text-center ml-[4%] ${isHover4 ? "flex":"hidden"}`}>Stand By Generator</p>
                </div>
            </div>
        </div>
    );
};

export default HomeExplore;
