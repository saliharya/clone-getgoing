import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => (
    <Link href={href} className={className}>
        {children}
    </Link>
);

export default NavLink;
