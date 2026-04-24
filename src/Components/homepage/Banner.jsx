import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
                <div className='text-center m-10 space-y-5'>
                    <h1 className='text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h1>
                    <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.</p>
                    <button className='border bg-[#244D3F] p-2 rounded-xs font-semibold text-white'>+ Add a Friend</button>
                </div>
            
        </div>
    );
};

export default Banner;