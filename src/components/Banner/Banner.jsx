import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../image/P3OLGJ1 copy 1.png';

const Banner = () => {
    return (
        <div className=' bg-[#babfff29]'>
            <div className=' lg:max-w-7xl lg:mx-auto mx-8  flex flex-col lg:flex-row justify-center items-center '>
            <div className='lg:w-1/2 w-full'>
                <h1 className='lg:text-6xl text-4xl  font-semibold py-8 leading-none'>Let's make your next great hire. Fast.</h1>
                <p className='lg:text-lg text-md  lg:py-5 py-2'>Finding the best fit for the job shouldn't be a full-time job. Indeed's simple and powerful tools let you source, screen, and hire faster. Sponsored Jobs are over 4.5X more likely to result in a hire.</p>
                <Link to="/appliedjobs">
                <button className="bg-purple-500 lg:mt-0 mt-3 text-white px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                Apply Now
              </button>
                </Link>
            </div>
            <div className='pt-8'>
                <img src={BannerImage} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;