"use client";
import React from 'react';
import Icon from '../atoms/FooterIcon';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Link from '../atoms/FooterLink';

const ContactInformation: React.FC = () => (
    <div>
        <h3 className="text-lg font-bold mb-4">Informasi Kontak</h3>
        <div className="flex flex-col gap-2">
            <div className="flex items-center">
                <Icon icon={faMapMarkerAlt} className="mr-2" />
                BSD Green Office Park 1, 6th Floor,<br />
                BSD City, Tangerang, Banten 15345
            </div>
            <div className="flex items-center">
                <Icon icon={faInstagram} className="mr-2" />
                <Link href="https://www.instagram.com/getgoing.co.id" className="text-white">@getgoing.co.id</Link>
            </div>
            <div className="flex items-center">
                <Icon icon={faFacebookF} className="mr-2" />
                <Link href="https://www.facebook.com/getgoing.co.id" className="text-white">@getgoing.co.id</Link>
            </div>
            <div className="flex items-center mt-2">
                <Icon icon={faClock} className="mr-2" />
                24/7
            </div>
        </div>
    </div>
);

export default ContactInformation;
