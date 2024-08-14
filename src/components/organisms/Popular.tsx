"use client";

import React from 'react';
import Slider from 'react-slick';
import TourGuideCard from '../organisms/TourGuideCard';
import { TourGuide } from '../../models/TourGuide';

// Sample data for the tour guides
const popularTourGuides = [
    new TourGuide('Naurah', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FNaurah%20Annisa%20Wahyudi?alt=media&token=c9f4af46-9521-445f-946f-2d1aaaedfec3', ['Amsterdam, Belanda']),
    new TourGuide('Agus', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Roma, Italia']),
    new TourGuide('Nadhira', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FA8A3A748-BC84-4500-A0F1-15D222EC3219.jpeg?alt=media&token=b9e8a444-ddb1-4f33-9940-33aa425967dc', ['Paris, Prancis']),
    new TourGuide('Nuel', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FE220E138-0044-4D6E-963A-50A4B82D1AF2.jpeg?alt=media&token=217d42b8-661c-408f-8f4c-18ecddd24025', ['Paris, Prancis']),
    new TourGuide('Oben', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FPilar%20Kobenhavn?alt=media&token=342dd39b-04eb-4c7c-a86a-552178187fe3', ['Manchester, Inggris']),
    new TourGuide('Hanifa', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FE5E046B0-9750-458D-BDCF-C9FE6EF2A763.JPG?alt=media&token=2fb6aae5-b8e2-4437-b592-57b19e022499', ['London, Inggris']),
    new TourGuide('Nili', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FDitri%20Adnili%20Adnursa?alt=media&token=ef5dcd70-d854-4f01-a93c-8245de3acd41', ['Istanbul, Turki']),
    new TourGuide('Kadhan', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FMuhammad%20Kadhan%20Ruskanda?alt=media&token=e1b17fe1-8d88-4335-a85c-3cf7cc0af9e4', ['Milan, Italia']),
    new TourGuide('Nabilla', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FWhatsApp%20Image%202023-05-08%20at%2010.54.49.jpg?alt=media&token=0c5cbbac-b60d-4175-8c51-89a8370308dd', ['Paris, Prancis']),
    new TourGuide('Edo', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2Fedo.jpg?alt=media&token=86061efd-9088-4ad6-9128-103e204c8049', ['Paris, Prancis']),
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
        <div className="container mx-auto mt-14 p-4">
            <h2 className="text-3xl font-extrabold mb-8">
                Sedang <span className="text-red-500">Populer</span>
            </h2>
            <div className="relative">
                <Slider {...sliderSettings}>
                    {popularTourGuides.map((guide, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                                <TourGuideCard guide={guide} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
