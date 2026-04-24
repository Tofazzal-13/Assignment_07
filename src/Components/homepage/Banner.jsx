import React from 'react';
import { FiPlus } from "react-icons/fi";

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center m-10 space-y-5'>
                <h1 className='text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h1>
                <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='border bg-[#244D3F] p-2 rounded-xs font-semibold text-white'>
                    <div className='flex items-center gap-1'>
                        <FiPlus />
                        <span>Add a Friend</span>
                    </div>
                </button>
            </div>

        </div>
    );
};

export default Banner;