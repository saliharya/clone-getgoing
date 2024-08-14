"use client";
import React from 'react';
import ContactInformation from '../organisms/ContactInformation';
import DownloadLinks from '../organisms/DownloadLink';
import AdditionalLinks from '../organisms/AdditionalLink';
import Image from '../atoms/FooterAppMockup';

const Footer: React.FC = () => {
    return (
        <footer className="bg-red-600 text-white py-8 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="flex flex-col md:flex-row items-center flex-grow gap-8 md:gap-12">
                        <div className="flex flex-col items-center gap-4 md:gap-6 flex-grow">
                            <ContactInformation />
                        </div>
                        <div className="flex-shrink-0">
                            <Image
                                src="/MockupApp.png"
                                alt="Mockup App"
                                className="w-64 h-auto"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center flex-grow gap-8 md:gap-12">
                        <DownloadLinks />
                        <AdditionalLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
