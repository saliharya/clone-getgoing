import React from 'react';
import PictureAtom from '../atoms/TourGuidePicture';
import NameAtom from '../atoms/TourGuideName';
import { City } from '../../models/City';

interface CityCardProps {
    city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => (
    <div className="flex flex-col items-center space-y-2">
        <PictureAtom src={city.picture} alt={city.getAltText()} />
        <NameAtom name={city.name} />
        <p className="text-gray-500">{city.country}</p>
    </div>
);

export default CityCard;
