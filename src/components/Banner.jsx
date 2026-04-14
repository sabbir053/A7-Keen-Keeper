import React from 'react';

const BannerPage = () => {
    return (
        <div className='py-10 container mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Friends to keep close in your life</h1>
            <p className='text-center font-light text-gray-500 pt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
            <div className='text-center pt-4'>
                <button className='btn btn-primary text-white font-bold'>+ Add Friend</button>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5'>
                <div className="border border-gray-100 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-2xl text-green-500'>10</h3>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className="border border-gray-100 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-2xl text-green-500'>10</h3>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className="border border-gray-100 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-2xl text-green-500'>10</h3>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className="border border-gray-100 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-2xl text-green-500'>10</h3>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
            </div>
            <hr className='text-gray-200 mt-10'/>
        </div>
    );
};

export default BannerPage;