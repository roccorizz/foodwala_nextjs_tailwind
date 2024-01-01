import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='py-[12] md:py-[20px] lg:py-[24px] flex justify-between items-center text-sm md:text-md 2xl:text-lg'>
            <div className='flex  items-center'>
                <Image className='pb-1 ' src='/logo.png' alt='logo' width={58} height={20} />
                <span className='text-2xl uppercase  font-bold'>wala</span>
            </div>
            <div>
                <p className='flex items-center gap-3'><span className='font-semibold'>Deliver to: </span><Image src='/map-marker-alt.png' width={18} height={18} alt='pin' /><span>Current Location <span className='font-semibold'>Mohammadpur Bus Stand, Dhaka</span></span></p>
            </div>
            <div className='flex items-center gap-2 '>
                <Image src='/Search.png' width={18} height={18} alt='pin' /> <span className='font-semibold'>Search Food</span>
            </div>
        </div>
    );
};

export default Navbar;