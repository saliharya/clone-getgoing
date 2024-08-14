"use client";
import React, { useState } from 'react';
import ArrowButton from '../atoms/ArrowButton';
import ImageCard from '../atoms/ImageCard';
import DetailCarousel1 from '../atoms/DetailCarousel1';
import DetailCarousel2 from '../atoms/DetailCarousel2';

const slides = [
    { src: '/image1.JPG', alt: 'Image 1', carouselDetail: <DetailCarousel1 /> },
    { src: '/image2.JPG', alt: 'Image 2', carouselDetail: <DetailCarousel2 /> },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const { src, alt, carouselDetail } = slides[currentIndex];

    return (
        <div className="relative flex flex-col items-center p-6 rounded-lg py-12">
            <div className="flex flex-col xl:flex-row w-full max-w-6xl mx-auto items-stretch">
                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex items-center justify-center">
                    <ImageCard src={src} alt={alt} />
                </div>
                <div className="w-full xl:w-1/2 lg:w-1/2 xl:pl-6 lg:pl-6 md:pl-0 mt-4 xl:mt-0 flex items-center">
                    {carouselDetail}
                </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
                <ArrowButton direction="left" onClick={handlePrev} />
                <ArrowButton direction="right" onClick={handleNext} />
            </div>
        </div>
    );
};

export default Carousel;
