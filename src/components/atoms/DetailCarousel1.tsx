import React, { FC } from 'react';

interface CarouselItemProps {
    icon: string;
    title: string;
    description: string;
}

const items: CarouselItemProps[] = [
    { icon: '🗺️', title: 'Trip Planner', description: 'Susun Rute Perjalananmu Sendiri.' },
    { icon: '🏖️', title: 'Guide', description: 'Tour Guide Berbahasa Indonesia.' },
    { icon: '🎢', title: 'Info', description: 'Informasi Penting Di Luar Negeri.' },
];

const CarouselItem: FC<CarouselItemProps> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <span className="text-2xl">{icon}</span>
        <div className="flex flex-col">
            <span className="font-bold text-lg text-center">{title}</span>
            <p className="font-bold">{description}</p>
        </div>
    </div>
);

const DetailCarousel1: FC = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-gray-500 text-xl mb-4">APA YANG GETGOING PUNYA?</p>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <CarouselItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default DetailCarousel1;
