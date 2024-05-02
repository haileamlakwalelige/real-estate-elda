/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import jsonData from './Data.json';
import './style.css';

const HomeProperty: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<any>(jsonData[1]); // Set initial state to the first item

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    return (
      <div>
          <h1 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-center py-3 px-2 sm:px-6 md:px-12 lg:px-20">Properties</h1>
        <p className="text-black text-[20px] px-2 sm:px-6 md:px-12 lg:px-20 text-center mb-5">Welcome to our exclusive collection of fully finished apartments. Discover the perfect home among our thoughtfully designed units, each offering a range of desirable features.</p>
          <div className="container flex flex-col lg:flex-row justify-between items-center bg-secondary lg:max-h-[450px] overflow-y-visible mx-2 sm:mx-4 md:mx-12 lg:mx-20 mt-10">
            <div className="flex lg:w-1/3 lg:flex-col gap-6 px-4 w-full ">
                {jsonData.map((item: any) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={item.description}
                        onClick={() => handleItemClick(item)}
                        className={selectedItem && selectedItem.id === item.id ? ' h-[131px] w-[135px] my-4 rounded-xl' : 'h-[118] lg:w-[120px] w-[110px] rounded-xl'}
                    />
                ))}
            </div>
            <div className="lg:w-2/3">
                {selectedItem && (
                    <div className="flex  lg:flex-row flex-col w-full justify-end gap-10 items-center">
                        <div className='w-full flex justify-center items-center lg:mr-[5%]'>
                            <p className='max-w-[300px] text-center text-[20px] md:text-[22px] lg:text-[24px]'>{selectedItem.description}</p>
                        </div>
                        <div className='mr-2 sm:mr-4 md:mr-12 lg:mr-20'>
                        <img src={selectedItem.image} alt={selectedItem.description} className='h-[532px] max-w-[403px] rounded-box mr-2 sm:mr-4 md:mr-12 lg:mr-20' />
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    );
};

export default HomeProperty;
