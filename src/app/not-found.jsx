import Link from 'next/link';
import React from 'react';
import { RiHome3Line } from 'react-icons/ri';

const NotFoundPage = () => {
    return (
        <div className="container mx-auto my-14 bg-white flex flex-col items-center justify-center p-6 text-center">

            {/* Centered Content */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-9xl font-extrabold text-slate-500 mb-2">404</h1>
                <h2 className="text-3xl font-bold text-slate-800">Page Not Found</h2>
                <p className="text-slate-500 mt-4 max-w-sm">
                    The page you are looking for doesn't exist or has been moved.
                </p>
            </div>

            {/* Fixed Bottom Home Button */}
            <div className="w-full max-w-md py-10">
                <a href="/" className='flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg shadow'>
                    <RiHome3Line size={22} />
                    Go back home
                </a>
            </div>

        </div>
    );
};

export default NotFoundPage;