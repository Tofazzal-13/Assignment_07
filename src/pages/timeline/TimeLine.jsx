import React, { useState } from 'react';
import { useTimeline } from '../../context/TimelineContext';
import { FaPhoneAlt, FaCommentAlt, FaVideo, FaHandshake } from 'react-icons/fa';

const Timeline = () => {
    const { timelineData } = useTimeline();
    
    
    const [filter, setFilter] = useState('All');

    
    const filteredData = timelineData.filter(item => {
        if (filter === 'All') return true;
        return item.type === filter;
    });

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <FaPhoneAlt className="text-gray-500" />;
            case 'Text': return <FaCommentAlt className="text-gray-500" />;
            case 'Video': return <FaVideo className="text-gray-500" />;
            default: return <FaHandshake className="text-yellow-600" />;
        }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                
                
                <h1 className="text-4xl font-bold text-[#1E3F35] mb-6">Timeline</h1>

               
                <div className="mb-8 w-64">
                    <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full p-2.5 bg-white border border-gray-200 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400 shadow-sm"
                    >
                        <option value="All">Filter timeline </option>
                        <option value="Call">Calls Only</option>
                        <option value="Text">Texts Only</option>
                        <option value="Video">Videos Only</option>
                        <option value="Meetup">Meetups Only</option>
                    </select>
                </div>
                
                
                <div className="space-y-3">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div 
                                key={item.id} 
                                className="flex items-center gap-6 bg-white p-5 border border-[#BFDBFE] rounded-sm shadow-sm"
                            >
                                <div className="text-xl w-8 flex justify-center">
                                    {getIcon(item.type)}
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-gray-700">
                                        <span className="font-bold">{item.type}</span> with {item.name}
                                    </h4>
                                    <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-400">
                            No entries found for "{filter}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;