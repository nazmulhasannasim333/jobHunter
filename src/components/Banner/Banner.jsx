import React from 'react';
import BannerImage from '../../image/P3OLGJ1 copy 1.png';

const Banner = () => {
    return (
        <div className=' bg-[#f0f1fb75]'>
            <div className=' max-w-7xl mx-auto  flex flex-col md:flex-row justify-center items-center '>
            <div className='w-1/2'>
                <h1 className='text-6xl font-semibold py-6 leading-none'>Let's make your next great hire. Fast.</h1>
                <p className='text-lg py-5'>Finding the best fit for the job shouldn't be a full-time job. Indeed's simple and powerful tools let you source, screen, and hire faster. Sponsored Jobs are over 4.5X more likely to result in a hire.</p>
                <button className="bg-purple-500 text-white px-6 py-4 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                Get Started
              </button>
            </div>
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;