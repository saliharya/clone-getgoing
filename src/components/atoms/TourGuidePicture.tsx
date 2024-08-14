import React from 'react';

interface TourGuidePictureProps {
    src: string;
    alt: string;
}

const TourGuidePicture: React.FC<TourGuidePictureProps> = ({ src, alt }) => (
    <div className="relative w-56 h-56 rounded-2xl overflow-hidden">
        <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
    </div>
);

export default TourGuidePicture;
