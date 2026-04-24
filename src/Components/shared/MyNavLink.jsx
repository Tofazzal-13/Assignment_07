import React, { Children } from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive}) => `font-semibold  px-2 py-1 rounded-xl ${isActive && "bg-[#244D3F] text-white "}`}
           
         >
            {children}
        </NavLink>
    );
};

export default MyNavLink;