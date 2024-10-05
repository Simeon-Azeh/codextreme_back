'use client';

import React from 'react';
import 'animate.css';
import { MdArrowOutward } from "react-icons/md";

// Define the card type
interface Card {
    id: number;
    issue: string;
    title: string;
    description: string;
    linkText: string;
    backgroundImage?: string; // Background image is optional
    backgroundColor?: string; // Background color is also optional
}

// Define the card data
const cardData: Card[] = [
    {
        id: 5,
        issue: '',
        title: 'How we are building a Billion Dollar Firm with Innovation Consulting',
        description: 'Cédric Murairi | 24th September 2024',
        linkText: 'Read more',
        backgroundColor: 'linear-gradient(135deg, #ff0000, #ff7f7f)', // Red gradient background
    },
    {
        id: 6,
        issue: '',
        title: 'What Africa needs to become innovative. Talk and though of the future. A CodeXtreme benchmark.',
        description: 'Cédric Murairi | 30th September 2024',
        linkText: 'Read more',
        backgroundColor: 'linear-gradient(135deg, #000000, #434343)', // Black gradient background
    },
];

// Card component
const Card: React.FC<Card> = ({ issue, title, description, linkText, backgroundImage, backgroundColor }) => {
    return (
        <div
            className="relative p-4 border-gray-300 border-solid bg-white rounded-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-end min-h-[300px] md:min-h-[400px]"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : backgroundColor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-md"></div>

            {/* Content aligned at the bottom */}
            <div className="relative z-10 flex flex-col justify-end h-full">
                <div className="text-white text-sm px-2 py-1 rounded-md font-semibold">
                    {issue}
                </div>
                <div className="px-2 py-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 mb-4">{description}</p>
                    <a href="#" className="text-white underline flex items-center">
                        {linkText} <MdArrowOutward />
                    </a>
                </div>
            </div>
        </div>
    );
};

// Main LatestSection component
const LatestSection = () => {
    return (
        <div className="w-full  lg:w-[90%] mx-auto my-12 pt-24 md:pt-0 px-6 md:px-0">
            <h1 className='text-black my-4 font-semibold space-mono text-2xl'>Latest at CodeXtreme</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cardData.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        issue={card.issue}
                        title={card.title}
                        description={card.description}
                        linkText={card.linkText}
                        backgroundImage={card.backgroundImage}
                        backgroundColor={card.backgroundColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestSection;
