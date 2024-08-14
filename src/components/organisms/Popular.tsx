import React from 'react';
import TourGuideCard from '../organisms/TourGuideCard'; // Adjust the import path based on your project structure
import { TourGuide } from '../../models/TourGuide';

export default function Popular() {
    const popularTourGuides = [
        new TourGuide('Naurah', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Amsterdam, Belanda']),
        new TourGuide('Agus', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Roma, Italia']),
        new TourGuide('Nadhira', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Paris, Prancis']),
        new TourGuide('Nuel', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Paris, Prancis']),
        new TourGuide('Oben', 'https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f', ['Manchester, Inggris']),
    ];

    return (
        <div className="container mx-auto mt-14">
            <h2 className="text-2xl font-bold mb-6">Popular Tour Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {popularTourGuides.map((guide, index) => (
                    <TourGuideCard key={index} guide={guide} />
                ))}
            </div>
        </div>
    );
}
