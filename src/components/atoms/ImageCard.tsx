import React from 'react';

interface ImageCardProps {
    src: string;
    alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => (
    <div className="relative overflow-hidden rounded-3xl">
        <img src={src} alt={alt} className='w-full h-96 object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
);

export default ImageCard;
