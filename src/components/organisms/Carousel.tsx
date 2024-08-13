"use client";
import React, { useState } from 'react';
import ArrowButton from '../atoms/ArrowButton';
import ImageCard from '../atoms/ImageCard';
import CarouselDetail from '../atoms/CarouselDetail';

const slides = [
    { src: 'image1.JPG', alt: 'Image 1', caption: 'APA YANG GETGOING PUNYA' },
    { src: 'image2.JPG', alt: 'Image 2', caption: 'EKSPLOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN' },
    // Add more slides here
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const { src, alt, caption } = slides[currentIndex];

    return (
        <div className="flex flex-col max-h-72">
            <div className="flex flex-col xl:flex-row xl:px-28 lg:px-28 md:px-4">
                <div className="xl:w-1/2 lg:w-1/2 md:w-full custom-image-height">
                    <ImageCard src={src} alt={alt} />
                </div>
                <div className="xl:w-1/2 lg:w-1/2 xl:pl-4 lg:pl-4 md:pl-0">
                    <CarouselDetail text={caption} />
                </div>
            </div>
            <div className="flex justify-center w-full mt-4">
                <ArrowButton direction="left" onClick={handlePrev} />
                <ArrowButton direction="right" onClick={handleNext} />
            </div>
        </div>
    );
};

export default Carousel;
