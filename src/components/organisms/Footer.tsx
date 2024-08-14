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
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex flex-col items-start gap-4 md:gap-6">
                            <ContactInformation />
                        </div>
                        <div className="flex-shrink-0">
                            <Image
                                src="/MockupApp.png"
                                alt="Mockup App"
                                className="w-64 h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                        <DownloadLinks />
                        <AdditionalLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
