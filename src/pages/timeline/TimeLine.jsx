import React, { useContext } from 'react';
import { CheckInContext } from '../../context/checkInContext';


const TimeLine = () => {
    const {checkIn, setCheckIn} = useContext( CheckInContext )
    console.log(checkIn, "contextData");
    
    return (
        <div>
            <h1>timeline page</h1>
        </div>
    );
};

export default TimeLine;