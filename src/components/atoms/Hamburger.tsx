"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HamburgerIcon = () => {
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
        <div className="md:block sm:block xl:hidden">
            <button
                className="hamburger-menu flex items-center justify-center w-10 h-10 bg-transparent outline-none focus:outline-none"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="relative w-6 py-1">
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-slate-500 rounded transition-all duration-300 ${isActive ? 'hidden' : ''}`}></div>
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-orange-500 rounded transition-all duration-300 ${isActive ? 'transform rotate-45 -translate-y-1.5 top-0' : 'translate-y-1.5'}`}></div>
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded transition-all duration-300 ${isActive ? 'transform -rotate-45 translate-y-1.5 top-0' : 'translate-y-1.5'}`}></div>
                </div>

            </button>
            {isActive && (
                <div className="absolute right-4 mt-2 w-48 py-2 bg-white border border-gray-200 shadow-lg rounded">
                    <div className="flex flex-col px-4">
                        <Link href="/" className=' py-2'>
                            Beranda
                        </Link>
                        <Link href="/services" className=' py-2'>
                            Service Kami
                        </Link>
                        <Link href="/blog" className=' py-2'>
                            Blog
                        </Link>
                        <Link href="/login" className="text-red-500 py-2">
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerIcon;
