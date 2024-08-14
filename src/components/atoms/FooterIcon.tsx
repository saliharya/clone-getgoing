"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FooterIconProps {
    icon: any;
    className?: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ icon, className }) => (
    <FontAwesomeIcon icon={icon} className={className} />
);

export default FooterIcon;
