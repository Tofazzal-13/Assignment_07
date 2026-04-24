import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { NavLink } from 'react-router';
import logoImg from "../../assets/images/logo.png"
import MyNavLink from './MyNavLink';




const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <IoHomeOutline />
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <CiClock2 />
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <FaChartLine />
        },

    ]
    return (
        <nav>
            <div className='container mx-auto flex justify-between items-center py-4 '>
                <img src={logoImg} alt=''></img>
                <ul className='flex gap-2'>
                        {
                            navItems.map((item, index) => <MyNavLink to={item.path} key={index}>
                                <div className='flex items-center gap-1'>
                                    {item.icon} {item.text}
                                </div>
                            </MyNavLink>)
                        }
                </ul>
               

            </div>
        </nav>

    );
};

export default Navbar;