"use client";
import React from 'react';
import Image from '../atoms/Image';

const DownloadLinks: React.FC = () => (
    <div>
        <h3 className="text-lg font-bold mb-4">DOWNLOAD DI</h3>
        <div className="flex flex-col gap-4">
            <a
                href="https://apps.apple.com/us/app/getgoing/id1602015694"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
            >
                <Image
                    src="/AppStore.svg"
                    alt="App Store"
                    width={192}
                    height={192}
                    className="w-48 h-auto"
                />
            </a>
            <a
                href="https://play.google.com/store/apps/details?id=com.getgoing.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
            >
                <Image
                    src="/GooglePlay.svg"
                    alt="Google Play"
                    width={192}
                    height={192}
                    className="w-48 h-auto"
                />
            </a>
        </div>
    </div>
);

export default DownloadLinks;
