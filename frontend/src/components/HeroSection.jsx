








import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query)); // Dispatch the search query
        navigate("/jobs"); // Navigate to the jobs page
    }

    return (
        <div className='text-center'>
            {/* Scrolling Advertisement Bar */}
            <div className='bg-gradient-to-r from-green-400 via-blue-500 to-white py-2 overflow-hidden'>
                <div
                    className='text-black font-semibold whitespace-nowrap'
                    style={{
                        display: 'inline-block',
                        animation: 'scroll 15s linear infinite'
                    }}
                >
                    <span className='mx-4'>Highest Package of 2024 is 50 LPA!</span>
                    <span className='mx-4'>Join top companies and kickstart your career!</span>
                    <span className='mx-4'>Apply Now to Unlock Your Dream Job!</span>
                </div>
            </div>

            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium'>
                    No. 1 Job Hunt Website
                </span>
                <h1 className='text-5xl font-bold'>
                    Search, Apply & <br /> Get Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400'>Dream Jobs</span>
                </h1>
                <p className='text-gray-700'>
                    
                    Connecting KIIT Talent with Top Employers.Find, Apply, and Secure Your Future with Your Dream Job!
                </p>

                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-gradient-to-r from-white via-blue-50 to-green-50'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-transparent px-2 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:ring-0 focus:outline-none'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-blue-500 hover:to-green-500 transition-all duration-300">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>

            {/* Inline Style for Keyframes */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
}

export default HeroSection;

