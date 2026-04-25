import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTimeline } from '../../context/TimelineContext';


const Stats = () => {
    const { timelineData } = useTimeline();

    const stats = {
        Call: timelineData.filter(item => item.type === 'Call').length,
        Text: timelineData.filter(item => item.type === 'Text').length,
        Video: timelineData.filter(item => item.type === 'Video').length,
    };

    
    const data = [
        { name: 'Text', value: stats.Text || 0 },
        { name: 'Call', value: stats.Call || 0 },
        { name: 'Video', value: stats.Video || 0 },
    ];

    
    const COLORS = ['#8B5CF6', '#1E3F35', '#34D399']; 

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-[#1E3F35] mb-10 tracking-tight">
                    Friendship Analytics
                </h1>

                {/* Chart Container Card */}
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                    <h2 className="text-gray-600 font-semibold mb-8">By Interaction Type</h2>

                   
                    <div className="h-100 w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    iconType="circle"
                                    formatter={(value) => <span className="text-gray-500 font-medium ml-2">{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;