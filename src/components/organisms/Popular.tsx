"use client";
import React from 'react';
import Slider from 'react-slick';
import TourGuideCard from '../organisms/TourGuideCard';
import { TourGuide } from '../../models/TourGuide';

// Sample TourGuide data
const popularTourGuides = [
    new TourGuide('Naurah', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Amsterdam, Belanda']),
    new TourGuide('Agus', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Roma, Italia']),
    new TourGuide('Nadhira', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Paris, Prancis']),
    new TourGuide('Nuel', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Paris, Prancis']),
    new TourGuide('Oben', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Manchester, Inggris']),
    new TourGuide('Hanifa', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['London, Inggris']),
    new TourGuide('Nili', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Istanbul, Turki']),
    new TourGuide('Kadhan', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Milan, Italia']),
    new TourGuide('Nabilla', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Paris, Prancis']),
    new TourGuide('Edo', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Paris, Prancis']),
];

// Slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function Popular() {
    return (
        <div className="container mx-auto mt-14 px-4">
            <h2 className="text-3xl font-extrabold mb-8">
                Sedang <span className="text-red-500">Populer</span>
            </h2>
            <div className="relative">
                <Slider {...sliderSettings}>
                    {popularTourGuides.map((guide, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg overflow-hidden">
                                <TourGuideCard guide={guide} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
