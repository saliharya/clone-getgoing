import React from 'react';

interface CarouselDetailProps {
    text: string;
}

const CarouselDetail: React.FC<CarouselDetailProps> = ({ text }) => (
    <div className="text-gray-600 mt-4 xl:mt-0 xl:ml-12 lg:ml-12 text-xl text-center">
        {text}
    </div>
);

export default CarouselDetail;
