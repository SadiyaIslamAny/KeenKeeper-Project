import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className='text-center mt-[320px]'>
            <h1 className='text-red-500 font-bold text-8xl'>404</h1>
             <h2 className='text-gray-400 text-2xl'>Page Not Found</h2>
            <p className='text-gray-600'>The page you are looking for does not exist.</p>
            <Link to="/" className='btn bg-[#244D3F] text-white text-xl mt-4'>Go Home</Link>
        </div>
    );
};

export default NotFoundPage;