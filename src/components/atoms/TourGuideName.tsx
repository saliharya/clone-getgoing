import React from 'react';

interface TourGuideNameProps {
    name: string;
}

const TourGuideName: React.FC<TourGuideNameProps> = ({ name }) => (
    <p className="font-bold text-xl">{name}</p>
);

export default TourGuideName;
