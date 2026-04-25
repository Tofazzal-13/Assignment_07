import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hook/useFriends';
import { FaPhoneAlt, FaCommentAlt, FaVideo, FaClock, FaArchive, FaTrashAlt } from 'react-icons/fa';
import { PacmanLoader } from 'react-spinners';
import { CheckInContext } from '../../context/checkInContext';

const FriendsDetails = () => {
    const { id } = useParams();
    const { allFriends, loading } = useFriends();


    const friend = allFriends.find(f => f.id == id);

    const {checkIn, setCheckIn} = useContext( CheckInContext )

    if (loading) return <div className="flex justify-center p-20 text-2xl font-bold">
        <PacmanLoader
            color="#244D3F"
            size={30}
        />
    </div>;
    if (!friend) return <div className="text-center p-20 text-2xl text-red-500">Friend not found!</div>;

    const handleCheckIn = () =>{
        setCheckIn([...checkIn, friend])
    }

  
    

    const getStatusColor = (status) => {
        switch (status) {
            case 'overdue': return 'bg-red-500 text-white';
            case 'almost due': return 'bg-orange-400 text-white';
            case 'on-track': return 'bg-emerald-700 text-white';
            default: return 'bg-gray-500 text-white';
        }
    };


    return (
        <div className="bg-[#f8fafc] min-h-screen p-6 md:p-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 space-y-2">

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-2">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-24 h-24 rounded-full border-4 border-gray-50 shadow-sm"
                        />

                        <h2 className="text-2xl font-bold mt-4 text-gray-800">{friend.name}</h2>

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

                        <p className="text-gray-500 italic mt-4 text-sm">{friend.bio}</p>
                        <p className="text-xs text-gray-400 mt-2">Preferred: {friend.email}</p>
                    </div>


                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-700 hover:bg-gray-50 transition-all text-sm font-medium">
                        <FaClock className="text-gray-400 text-xs" /> Snooze 2 Weeks
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-700 hover:bg-gray-50 transition-all text-sm font-medium">
                        <FaArchive className="text-gray-400 text-xs" /> Archive
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-red-500 hover:bg-red-50 transition-all text-sm font-medium">
                        <FaTrashAlt className="text-xs" /> Delete
                    </button>
                </div>


                <div className="md:col-span-8 space-y-10">


                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-emerald-800">{friend.days_since_contact}</h3>
                            <p className="text-gray-500 text-sm mt-1 font-medium">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-emerald-800">30</h3>
                            <p className="text-gray-500 text-sm mt-1 font-medium">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-emerald-800">Feb 27, 2026</h3>
                            <p className="text-gray-500 text-sm mt-1 font-medium">Next Due</p>
                        </div>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                        <div>
                            <h4 className="text-emerald-800 font-semibold text-lg">Relationship Goal</h4>
                            <p className="text-gray-500 text-sm mt-1">Connect every <span className="font-bold text-gray-800">30 days</span></p>
                        </div>
                        <button className="bg-gray-50 px-4 py-2 rounded border border-gray-200 text-sm font-medium hover:bg-gray-100">Edit</button>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-emerald-800 font-semibold mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <button
                             onClick={() => handleCheckIn()}
                             className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                                <FaPhoneAlt className="text-2xl text-gray-600 group-hover:text-emerald-600" />
                                <span className="text-sm font-medium text-gray-700">Call</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                                <FaCommentAlt className="text-2xl text-gray-600 group-hover:text-emerald-600" />
                                <span className="text-sm font-medium text-gray-700">Text</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                                <FaVideo className="text-2xl text-gray-600 group-hover:text-emerald-600" />
                                <span className="text-sm font-medium text-gray-700">Video</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendsDetails;