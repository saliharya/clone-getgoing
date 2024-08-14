import React from 'react';
import PictureAtom from '../atoms/TourGuidePicture';
import NameAtom from '../atoms/TourGuideName';
import CityAtom from '../atoms/TourGuideCity';
import { TourGuide } from '../../models/TourGuide';

interface TourGuideCardProps {
    guide: TourGuide;
}

const TourGuideCard: React.FC<TourGuideCardProps> = ({ guide }) => (
    <div className="flex flex-col items-center space-y-2">
        <PictureAtom src={guide.pictureUrl} alt={guide.getAltText()} />
        <NameAtom name={guide.name} />
        {guide.cities.map((city, index) => (
            <CityAtom key={index} city={city} />
        ))}
    </div>
);

export default TourGuideCard;
