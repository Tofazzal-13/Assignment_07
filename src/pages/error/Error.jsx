import React from 'react';
import { Link } from 'react-router';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* Icon Section */}
                <div className="flex justify-center mb-6">
                    <div className="p-6 bg-red-50 rounded-full">
                        <FaExclamationTriangle className="text-6xl text-[#EF4444]" />
                    </div>
                </div>

                {/* Text Section */}
                <h1 className="text-9xl font-black text-[#1E3F35] opacity-10">404</h1>
                <h2 className="text-3xl font-bold text-[#1E3F35] -mt-12 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-10 leading-relaxed">
                    Oops! The page you're looking for doesn't exist or has been moved. 
                    Let's get you back to your relationship garden.
                </p>

                {/* Action Button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 bg-[#1E3F35] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-900/20 hover:bg-[#2a5548] transition-all active:scale-95"
                >
                    <FaHome /> Back to Home
                </Link>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-400">
                        Need help? <span className="text-[#1E3F35] font-semibold cursor-pointer">Contact Support</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;