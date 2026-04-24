import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // npm install react-icons

const Footer = () => {
    return (
        <footer className="bg-[#1a3a32] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                {/* Logo & Headline */}
                <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
                <p className="text-gray-300 text-center max-w-lg text-sm mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links Section */}
                <div className="flex flex-col items-center gap-2 mb-12">
                    <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Social Links
                    </span>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white text-[#1a3a32] p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" className="bg-white text-[#1a3a32] p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="bg-white text-[#1a3a32] p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaTwitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;