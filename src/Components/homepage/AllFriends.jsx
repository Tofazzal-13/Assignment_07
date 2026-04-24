import React from 'react';
import { useLoaderData } from 'react-router';

const AllFriends = () => {
    const friends = useLoaderData();

    
    const getStatusColor = (status) => {
        switch (status) {
            case 'overdue': return 'bg-red-500 text-white';
            case 'almost due': return 'bg-orange-400 text-white';
            case 'on-track': return 'bg-emerald-700 text-white';
            default: return 'bg-gray-500 text-white';
        }
    };

    return (
        <div className='container mx-auto px-14 pb-16'>
            <h2 className='text-xl font-semibold mb-6'>Your Friends</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    friends.map((friend) => (
                        <div key={friend.id} className='bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center'>
                            {/* Profile Image */}
                            <div className="w-20 h-20 mb-4">
                                <img
                                    className='w-full h-full rounded-full border-2 border-gray-50'
                                    src={friend.picture}
                                    alt={friend.name}
                                />
                            </div>

                            {/* Name */}
                            <h1 className='text-lg font-bold text-gray-800 mb-1'>{friend.name}</h1>

                            {/* Days Ago */}
                            <p className='text-xs text-gray-400 mb-3'>
                                {friend.days_since_contact}d ago
                            </p>

                            {/* Tags */}
                            <div className='flex flex-wrap justify-center gap-2 mb-4'>
                                {friend.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className='bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Status Badge */}
                            <div className={`text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${getStatusColor(friend.status)}`}>
                                {friend.status}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllFriends;