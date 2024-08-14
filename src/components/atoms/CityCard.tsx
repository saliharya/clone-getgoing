import React from 'react';
import { City } from '../../models/City';

interface CityCardProps {
    item: City;
}

const CityCard: React.FC<CityCardProps> = ({ item }) => (
    <div className="flex flex-col items-center space-y-2">
        <img src={item.pictureUrl} alt={item.getAltText()} className="w-full h-40 object-cover" />
        <h3 className="text-xl font-semibold">{item.city}</h3>
    </div>
);

export default CityCard;
