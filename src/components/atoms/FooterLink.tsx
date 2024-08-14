"use client";
import React from 'react';

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

export default FooterLink;
