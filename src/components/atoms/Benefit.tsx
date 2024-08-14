'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMapMarkerAlt, faBus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface BenefitItemProps {
    title: string;
    description: string;
    icon: any;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description, icon }) => (
    <div className="flex flex-col items-center text-center p-4 bg-white bg-opacity-50 rounded-lg shadow-md">
        <FontAwesomeIcon icon={icon} className="h-8 w-8 text-white mb-2" />
        <h4 className="text-white text-xl font-bold mb-2">{title}</h4>
        <p className="text-white">{description}</p>
    </div>
);


const BenefitsSection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="bg-gradient-to-r from-red-600 to-orange-400 py-16 px-8 rounded-s-3xl h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-4xl">
                <BenefitItem
                    title="Konsultasi GRATIS"
                    description="Curhatin aja semuanya!"
                    icon={faSmile}
                />
                <BenefitItem
                    title="Local Guide"
                    description="Biar ada temen!"
                    icon={faMapMarkerAlt}
                />
                <BenefitItem
                    title="Transportasi"
                    description="Bebas pilih transportasi apa"
                    icon={faBus}
                />
                <BenefitItem
                    title="Lengkap Pokoknya"
                    description="Hotel, Asuransi, Visa, Wifi dll"
                    icon={faCheckCircle}
                />
            </div>
        </section>
    );
};

export default BenefitsSection;
