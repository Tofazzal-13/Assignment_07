import { useState } from "react";
import { CheckInContext } from "./checkInContext";

const CheckInProvider = ({children}) => {
   const [checkIn, setCheckIn] = useState([])

    const data= {
       checkIn, 
       setCheckIn
    }

    return <CheckInContext.Provider value={data}>
        {children}
    </CheckInContext.Provider>;
};

export default CheckInProvider;