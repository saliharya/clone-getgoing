"use client";
import React from 'react';
import Icon from '../atoms/FooterIcon';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from '../atoms/FooterLink';

const ContactInformation: React.FC = () => (
    <div>
        <h3 className="text-lg font-bold mb-4">Informasi Kontak</h3>
        <div className="flex flex-col gap-2">
            <div className="flex items-center">
                <Icon icon={faMapMarkerAlt} className="mr-2" />
                BSD Green Office Park 1, 6th Floor,<br />
                BSD City, Tangerang, Banten 1534524/7
            </div>
            <div className="flex items-center">
                <Icon icon={faEnvelope} className="mr-2" />
                <Link href="mailto:lets@getgoing.co.id" className="text-white underline">lets@getgoing.co.id</Link>
            </div>
            <div className="flex items-center">
                <Icon icon={faEnvelope} className="mr-2" />
                <Link href="mailto:getgoing.co.id" className="text-white underline">getgoing.co.id</Link>
            </div>
            <div className="flex items-center">
                <Icon icon={faEnvelope} className="mr-2" />
                <Link href="mailto:getgoing.co.id" className="text-white underline">getgoing.co.id</Link>
            </div>
        </div>
    </div>
);

export default ContactInformation;
