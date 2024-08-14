"use client";

import { useState } from 'react';

interface Article {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

const articles: Article[] = [
  {
    title: 'Gaya Hidup dan Rahasia Sehat Masyarakat Eropa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non justo sit amet enim aliquam efficitur. Sed ut orci et libero rhoncus consectetur.',
    image: 'https://picsum.photos/300/200',
    date: '12 Jun 2023',
    link: '/articles/1',
  },
  {
    title: 'Alsace Membuka Petualangan Baru di Destinasi yang Seru',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non justo sit amet enim aliquam efficitur. Sed ut orci et libero rhoncus consectetur.',
    image: 'https://picsum.photos/300/200',
    date: '20 Mar 2024',
    link: '/articles/2',
  },
  {
    title: 'Budaya Minum Kopi Masyarakat Eropa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non justo sit amet enim aliquam efficitur. Sed ut orci et libero rhoncus consectetur.',
    image: 'https://picsum.photos/300/200',
    date: '20 Jun 2023',
    link: '/articles/3',
  },
];

export default function ArticleSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Baca Juga</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.slice(0, showMore ? articles.length : 3).map((article) => (
          <div key={article.title} className="bg-white rounded-md shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{article.date}</span>
                <a href={article.link} className="text-blue-500 hover:underline">
                  Lanjutkan Membaca
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {articles.length > 3 && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Tampilkan Kurang' : 'Tampilkan Semua'}
        </button>
      )}
    </div>
  );
}