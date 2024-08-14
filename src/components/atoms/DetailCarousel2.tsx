import React from 'react';
import Image from 'next/image';

export default function DetailCarousel2() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <p className="text-gray-500 text-xl mb-4">
                Eksplor dan nikmati mudah liburan ke luar negeri dengan
            </p>
            <div className="flex flex-col items-center space-y-4">
                <span className="font-bold text-5xl">Aplikasi GetGoing</span>
                <p className="text-gray-500 text-xl mb-4">Dapat didownload di:</p>
                <div className="flex space-x-4">
                    <a href="https://apps.apple.com/us/app/getgoing/id1602015694" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/AppStore.svg"
                            alt="App Store"
                            width={192} // Corresponds to w-48
                            height={192} // Corresponds to h-48
                            priority={true}
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.getgoing.app" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/GooglePlay.svg"
                            alt="Google Play"
                            width={192}
                            height={192}
                            priority={true}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
