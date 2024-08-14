"use client";
import React from 'react';

interface FooterMockupProps {
    src: string;
    alt: string;
    className?: string;
}

const FooterMockup: React.FC<FooterMockupProps> = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} />
);

export default FooterMockup;
