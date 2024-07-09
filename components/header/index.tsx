import React from 'react';
import Link from 'next/link';
import HamburgerIcon from '../hamburger_icon';

const Header = () => {
    return (
        <header className="bg-white h-48 absolute top-0 left-0 w-full">
            <div className="container mx-auto flex items-center justify-between px-6 h-full">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="mr-4 h-24" />
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari negara, kota, atau guide"
                            className="border rounded-full px-4 py-2 focus:outline-none focus:border-blue-300 text-lg shadow-md custom-shadow w-96 h-12 pr-12"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-transparent pr-1 py-1">
                            <img src="/arrow-right.svg" alt="Search" className="w-full h-full" />
                        </button>
                    </div>
                </div>
                <nav className="xl:flex hidden space-x-6">
                    <Link href="/" className="text-red-500 text-2xl">
                        Beranda
                    </Link>
                    <Link href="/services" className="text-red-500 text-2xl">
                        Service Kami
                    </Link>
                    <Link href="/blog" className="text-red-500 text-2xl">
                        Blog
                    </Link>
                    <Link href="/login" className="text-black hover:text-red-500 text-2xl px-6">
                        Login
                    </Link>
                </nav>
                <HamburgerIcon />
            </div>
        </header>
    );
};

export default Header;
