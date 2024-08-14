import React from 'react'

interface TourGuidePictureProps {
    src: string;
    alt: string;
}

const TourGuidePicture: React.FC<TourGuidePictureProps> = ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-2xl w-56 h-56 object-cover" />
);

export default TourGuidePicture;
