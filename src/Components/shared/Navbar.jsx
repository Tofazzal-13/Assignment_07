import React from 'react';
import { IoHomeOutline, IoMenu } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { Link } from 'react-router';
import logoImg from "../../assets/images/logo.png"
import MyNavLink from './MyNavLink';

const Navbar = () => {
    const navItems = [
        { path: "/", text: "Home", icon: <IoHomeOutline /> },
        { path: "/timeline", text: "Timeline", icon: <CiClock2 /> },
        { path: "/stats", text: "Stats", icon: <FaChartLine /> },
    ];

    const menuLinks = (
        <>
            {navItems.map((item, index) => (
                <li key={index}>
                    <MyNavLink to={item.path}>
                        <div className='flex items-center gap-1'>
                            {item.icon} {item.text}
                        </div>
                    </MyNavLink>
                </li>
            ))}
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-white/80 border-b border-gray-100 backdrop-blur-md">
            <div className="navbar container mx-auto">
                {/* Logo Section */}
                <div className="navbar-start">
                    <Link to="/">
                        <img src={logoImg} alt='Logo' className="h-10" />
                    </Link>
                </div>

                {/* Menu Section */}
                <div className="navbar-end">
                    {/* Desktop Menu */}
                    <ul className="menu menu-horizontal hidden lg:flex px-1 gap-2">
                        {menuLinks}
                    </ul>

                    {/* Mobile Hamburger Menu */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <IoMenu className="text-2xl" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;