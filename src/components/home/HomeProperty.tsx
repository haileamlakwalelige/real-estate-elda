/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import jsonData from './Data.json';
import './style.css';

const HomeProperty: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<any>(jsonData[0]); // Set initial state to the first item

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    return (
        <div className="container flex justify-between items-center bg-secondary lg:max-h-[450px] overflow-y-visible mx-2 sm:mx-4 md:mx-12 lg:mx-20 mt-10">
            <div className="left-section">
                {jsonData.map((item: any) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={item.description}
                        onClick={() => handleItemClick(item)}
                        className={selectedItem && selectedItem.id === item.id ? 'selected h-[131px] w-[135px]' : 'h-[118] w-[120px]'}
                    />
                ))}
            </div>
            <div className="right-section">
                {selectedItem && (
                    <div className="flex w-full justify-end gap-10 items-center">
                        <div className='max-w-[250px] flex justify-center items-center lg:mr-[5%]'>
                            <p className='max-w-[250px] text-center text-[20px] md:text-[22px] lg:text-[24px]'>{selectedItem.description}</p>
                        </div>
                        <div className='mr-2 sm:mr-4 md:mr-12 lg:mr-20'>
                        <img src={selectedItem.image} alt={selectedItem.description} className='h-[532px] max-w-[403px] rounded-box mr-2 sm:mr-4 md:mr-12 lg:mr-20' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeProperty;
