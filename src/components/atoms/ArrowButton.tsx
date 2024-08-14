import React from 'react';
import Image from 'next/image';

interface ArrowButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`px-14 absolute top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full focus:outline-none ${direction === 'left' ? 'left-0' : 'right-0'}`}
    >
        <Image
            src={direction === 'left' ? '/left-arrow.png' : '/right-arrow.png'}
            alt={`${direction} arrow`}
            width={48}
            height={48}
            className='filter-red'
        />
    </button>
);

export default ArrowButton;
