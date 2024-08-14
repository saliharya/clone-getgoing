import React from 'react';

const Quote: React.FC = () => (
    <div className="p-8 rounded-lg items-center justify-center text-center">
        <blockquote className="lg:text-3xl font-serif italic">
            <p className="font-bold">
                “Better to <span className="text-red-500">SEE</span> <span className='text-black'> something once than hear about it</span>
                <span className="text-blue-500"> A THOUSAND TIMES</span>”
            </p>
        </blockquote>
        <footer className="mt-4 text-sm text-gray-600">
            - Asian Proverb
        </footer>
    </div>
);

export default Quote;
