import React from 'react';

const SearchInput: React.FC = () => (
    <div className="relative">
        <input
            type="text"
            placeholder="Cari negara, kota, atau guide"
            className="border rounded-full px-4 py-2 focus:outline-none focus:border-blue-300 text-lg shadow-md custom-shadow w-96 h-12 pr-12"
        />
        <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-transparent pr-4 py-2">
            <img src="/search.png" alt="Search" className="w-full h-full" />
        </button>
    </div>
);

export default SearchInput;
