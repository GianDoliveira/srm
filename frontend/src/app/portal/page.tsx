"use client"

import React from 'react';
import Link from 'next/link';

const newsItems = [
    {
        title: "Consagração de pastores",
        image: "/consagracao/IMG_1924.JPG",
        description: "No último domingo de junho, dia 30 de junho, a IMW Central de Mantiquira celebrou e consagrou...",
        link: "/portal/news/consg"
    },
    {
        title: "Feira Missionária",
        image: "/feira/IMG_2488.jpg",
        description: "No sábado, dia 06/07, foi realizada uma feira missionária com o objetivo de arrecadar...",
        link: "/portal/news/feira"
    },
    {
        title: "Chegada em Piauí!",
        image: "/chegada/DSC_0157.JPG",
        description: "A chegada do pastor missionário Elison e sua família em Amarante foi um momento marcante...",
        link: "/portal/news/piaui"
    },
    {
        title: "Pastor Tiago Sarres na Imw Teresina",
        image: "/PosseTiago/IMG_1509.jpeg",
        description: "O pastor deixou saudades em sua terra mais trouxe muitas alegrias para a igreja em Teresina.",
        link: "/portal/news/posse"
    }
]

function Portal() {
    return (
        <main className='mb-16 pt-56'>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Notícias</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    {newsItems.map((news, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src={news.image} alt={news.title} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                                <p className="text-gray-700 mb-4">{news.description}</p>
                                <Link href={news.link} className="text-blue-500 hover:underline">Ver mais</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Portal;
