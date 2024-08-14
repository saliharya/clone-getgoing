import React from 'react'
import PrivateTrip from '../atoms/PrivateTrip';
import BenefitSection from '../atoms/Benefit';

export default function Feature() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-4 xl:space-x-8">
            <div className="flex-1 lg:w-1/2 xl:w-1/2">
                <PrivateTrip />
            </div>
            <div className="flex-1 lg:w-1/2 xl:w-1/2">
                <BenefitSection />
            </div>
        </div>
    );
}