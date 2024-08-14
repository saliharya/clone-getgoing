"use client";
import React from 'react';
import Link from '../atoms/FooterLink';

const AdditionalLinks: React.FC = () => (
    <div>
        <h3 className="text-lg font-bold mb-4">Lainnya</h3>
        <ul className="space-y-2">
            <li><Link href="#" className="text-white underline">Syarat dan Ketentuan</Link></li>
            <li><Link href="#" className="text-white underline">Kebijakan Privasi</Link></li>
            <li><Link href="#" className="text-white underline">Dokumentasi</Link></li>
            <li><Link href="#" className="text-white underline">Penghargaan</Link></li>
            <li><Link href="#" className="text-white underline">Login</Link></li>
            <li><Link href="#" className="text-white underline">Press</Link></li>
            <li><Link href="#" className="text-white underline">F.A.Q</Link></li>
        </ul>
    </div>
);

export default AdditionalLinks;
