import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
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
        <nav className="sticky top-0 z-50 bg-white/80  border-b border-gray-100">

            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="flex-1">
                        <Link to="/">
                            <img src={logoImg} alt=''></img>
                        </Link>
                    </div>
                    <div className="flex-none">
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
                </div>



            </div>
        </nav>

    );
};

export default Navbar;