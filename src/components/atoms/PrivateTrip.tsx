'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface FeatureItemProps {
    text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
    <div className="flex items-center mt-2">
        <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-red-600 mr-2" />
        <p className="text-gray-500">{text}</p>
    </div>
);

const PrivateTrip = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="py-16 rounded-lg">
            <h2 className="text-red-600 text-3xl font-bold mb-4">PRIVATE TRIP</h2>
            <h3 className="text-black text-2xl font-bold mb-6">
                Berangkat <span className="text-red-600">Kapan Saja</span> Semaumu
            </h3>
            <div className="grid grid-cols-2 gap-8 px-12">
                <FeatureItem text="Tentukan tanggal keberangkatan sesukamu" />
                <FeatureItem text="Tidak ada kuota minimum, jadi pasti berangkat" />
                <FeatureItem text="Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan" />
                <FeatureItem text="Liburan jadi lebih exclusive untuk kamu dan keluarga" />
            </div>
        </section>
    );
};

export default PrivateTrip;
