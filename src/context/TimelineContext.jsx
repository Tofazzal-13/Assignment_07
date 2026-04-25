import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';


const TimelineContext = createContext();


export const TimelineProvider = ({ children }) => {
    const [timelineData, setTimelineData] = useState([]);

    const addEntry = (type, friendName) => {
        const newEntry = {
            id: Date.now(),
            type,
            name: friendName,
            date: new Date().toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            })
        };
        setTimelineData(prev => [newEntry, ...prev]);
        toast.success(`${type} logged with ${friendName}`);
    };

    return (
        <TimelineContext.Provider value={{ timelineData, addEntry }}>
            {children}
        </TimelineContext.Provider>
    );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useTimeline = () => {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error("useTimeline must be used within a TimelineProvider");
    }
    return context;
};