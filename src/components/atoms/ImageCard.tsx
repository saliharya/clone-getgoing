import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
    src: string;
    alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
    return (
        <div className="relative w-full h-96">
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
    );
};

export default ImageCard;
