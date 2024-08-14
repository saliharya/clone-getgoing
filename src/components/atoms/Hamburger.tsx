"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HamburgerIcon: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!event.target) return;
            const target = event.target as HTMLElement;
            if (!target.closest('.hamburger-menu') && isActive) {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isActive]);

    return (
        <div className="relative lg:hidden">
            <button
                className="hamburger-menu flex items-center justify-center w-12 h-12 bg-transparent border-none outline-none focus:outline-none"
                onClick={() => setIsActive(!isActive)}
                aria-label="Toggle menu"
            >
                <div className="relative w-6 h-6">
                    <div
                        className={`absolute top-0 left-0 w-full h-0.5 bg-gray-600 rounded transition-transform duration-300 ease-in-out ${isActive ? 'opacity-0' : ''}`}
                    />
                    <div
                        className={`absolute top-1/2 left-0 w-full h-0.5 bg-orange-500 rounded transition-transform duration-300 ease-in-out ${isActive ? 'rotate-45 translate-y-1' : ''}`}
                    />
                    <div
                        className={`absolute top-1/2 left-0 w-full h-0.5 bg-red-600 rounded transition-transform duration-300 ease-in-out ${isActive ? '-rotate-45 -translate-y-1' : ''}`}
                    />
                </div>
            </button>
            {isActive && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white border border-gray-200 shadow-lg rounded-lg">
                    <div className="flex flex-col px-4">
                        <Link href="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-200">
                            Beranda
                        </Link>
                        <Link href="/services" className="block py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-200">
                            Service Kami
                        </Link>
                        <Link href="/blog" className="block py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-200">
                            Blog
                        </Link>
                        <Link href="/login" className="block py-2 text-red-600 hover:bg-red-50 rounded transition duration-200">
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerIcon;
