import React from 'react';
import Logo from '../atoms/Logo';
import SearchInput from '../atoms/SearchInput';
import NavLink from '../atoms/NavLink';
import HamburgerIcon from '../atoms/Hamburger';

const Header: React.FC = () => {
    return (
        <header className="bg-white h-36 absolute top-0 left-0 w-full">
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="flex items-center">
                    <Logo />
                    <SearchInput />
                </div>
                <nav className="xl:flex hidden space-x-6">
                    <NavLink href="/" className="text-red-500 text-2xl">
                        Beranda
                    </NavLink>
                    <NavLink href="/services" className="text-red-500 text-2xl">
                        Service Kami
                    </NavLink>
                    <NavLink href="/blog" className="text-red-500 text-2xl">
                        Blog
                    </NavLink>
                    <NavLink href="/login" className="text-black hover:text-red-500 text-2xl px-6">
                        Login
                    </NavLink>
                </nav>
                <HamburgerIcon />
            </div>
        </header>
    );
};

export default Header;
