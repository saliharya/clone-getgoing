import React from 'react';

interface QuoteProps {
    text: React.ReactNode;
    author: string;
    className?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author, className }) => (
    <div className={`p-8 rounded-lg items-center justify-center text-center ${className}`}>
        <blockquote className="lg:text-3xl font-serif italic">
            <p className="font-bold">
                {text}
            </p>
        </blockquote>
        <footer className="mt-4 text-sm text-gray-600">{author}</footer>
    </div>
);

export default Quote;
