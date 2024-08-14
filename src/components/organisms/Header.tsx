"use client";

import React, { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';
import SearchInput from '../atoms/SearchInput';
import NavLink from '../atoms/NavLink';
import HamburgerIcon from '../atoms/Hamburger';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-25 backdrop-blur-md shadow-lg' : 'bg-transparent shadow-none'}`}
        >
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="flex items-center space-x-4">
                    <Logo />
                    <SearchInput />
                </div>
                <nav className="hidden xl:flex items-center space-x-8">
                    <NavLink href="/" className="text-red-600 hover:text-red-800 text-lg font-semibold transition duration-300">
                        Beranda
                    </NavLink>
                    <NavLink href="/services" className="text-red-600 hover:text-red-800 text-lg font-semibold transition duration-300">
                        Service Kami
                    </NavLink>
                    <NavLink href="/blog" className="text-red-600 hover:text-red-800 text-lg font-semibold transition duration-300">
                        Blog
                    </NavLink>
                    <NavLink href="/login" className="text-gray-800 hover:text-red-600 text-lg font-semibold transition duration-300 px-6">
                        Login
                    </NavLink>
                </nav>
                <div className="xl:hidden">
                    <HamburgerIcon />
                </div>
            </div>
        </header>
    );
};

export default Header;
