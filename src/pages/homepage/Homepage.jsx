import React from 'react';

const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center h-screen'>
                <div className='text-center m-10'>
                    <h1 className='text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h1>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.</p>
                    <button className='border p-2 rounded-2xl font-semibold'>+ Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;