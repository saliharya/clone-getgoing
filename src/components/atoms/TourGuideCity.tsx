import React from 'react';

interface TourGuideCityProps {
    city: string;
}

const TourGuideCity: React.FC<TourGuideCityProps> = ({ city }) => (
    <p className="text-gray-500">{city}</p>
);

export default TourGuideCity;
