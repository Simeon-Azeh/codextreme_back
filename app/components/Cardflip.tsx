'use client';

import React, { useState, useEffect } from 'react';
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
        id: 1,
        issue: 'Issue 1',
        title: '6 million businesses and just 16% are innovative.',
        description: '',
        linkText: 'How we innovate',
        backgroundImage: '/imageOne.jpeg',
    },
    {
        id: 2,
        issue: 'Issue 2',
        title: 'Technology-focused training losing more than half the talent to the rest of the world.',
        description: '',
        linkText: 'Learn how we train talent',
        backgroundImage: '/imageTwo.jpeg',
    },
    {
        id: 3,
        issue: 'Issue 3',
        title: 'Innovation challenges in infrastructure, logistics, information and data management.',
        description: '',
        linkText: 'We are seizing the opportunity',
        backgroundImage: '/imageThree.jpeg',
    },
    {
        id: 4,
        issue: 'Approach',
        title: 'Training and retaining talent to reinvent existing sectors, systems, operations, and processes.',
        description: '',
        linkText: 'Read more in our Manifesto',
        backgroundImage: '/imageFour.jpeg',
    },
    // Replacement cards (5-8)
    {
        id: 5,
        issue: '',
        title: 'About 6 million businesses and thousands of companies on the continent but only 16% are innovative.',
        description: 'We engage efforts to take the continent by storm; innovating sectors, companies and organizations using talent on the continent to reposition Africa’s role in the 4th industrial revolution',
        linkText: 'How we innovate',
        backgroundColor: 'linear-gradient(135deg, #ff0000, #ff7f7f)', // Red gradient background
    },
    {
        id: 6,
        issue: '',
        title: 'Africa is training talent every year and loosing more than half to the rest of the world.',
        description: 'We train and retain talent as technical consultants to tackle critical innovation challenges across Africa. Talent training on case studies from companies reducing the skills gap and mismatch, providing companies with solutions great potential hires ',
        linkText: 'Learn how we train talent',
        backgroundColor: 'linear-gradient(135deg, #000000, #434343)', // Black gradient background
    },
    {
        id: 7,
        issue: '',
        title: 'Africa is facing innovation challenges in critical sectors such as infrastructure, logistics, information and data management',
        description: 'This presents a huge impact potential for people, organizations, communities and places.',
        linkText: 'We are seizing the opportunity',
        backgroundColor: 'linear-gradient(135deg, #000000, #434343)', // Black gradient background
    },
    {
        id: 8,
        issue: '',
        title: 'Our contrarian approach and perspective creates a huge impact on the continent',
        description: 'By focusing on reinventing sectors, systems, operations and processes, we drive innovation from within, boosting economies and creating lasting value and impact for people, organizations and communities.',
        linkText: 'Read more in our Manifesto',
        backgroundColor: 'linear-gradient(135deg, #ffffff, #e5e5e5)', // White gradient background
    },
];

// Card component
const Card: React.FC<Card> = ({ issue, title, description, linkText, backgroundImage, backgroundColor }) => {
    return (
        <div
            className="relative p-4 border-gray-300 border-solid bg-white rounded-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-end"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : backgroundColor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px', // Set fixed height
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-md"></div>

            {/* Content aligned at the bottom */}
            <div className="relative z-10 flex flex-col justify-end h-full">
                <div className="  text-white text-sm px-2 py-1 rounded-md font-semibold">
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

// Main CardFlipSection component
const CardFlipSection = () => {
    const initialVisibleCards = cardData.slice(0, 4); // First 4 cards visible initially
    const replacementCards = cardData.slice(4, 8); // The cards that replace the first 4

    const [visibleCards, setVisibleCards] = useState<Card[]>(initialVisibleCards);
    const [flipIndex, setFlipIndex] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * visibleCards.length); // Randomly select a card to flip
            setFlipIndex(randomIndex);

            setTimeout(() => {
                setVisibleCards((prevCards) => {
                    // Map the first four cards to their replacements
                    const updatedCards = [...prevCards];
                    updatedCards[randomIndex] = prevCards[randomIndex].id <= 4
                        ? replacementCards[randomIndex] // Replace card 1 with 5, 2 with 6, etc.
                        : initialVisibleCards[randomIndex]; // Reset back to original card after replacement
                    return updatedCards;
                });
                setFlipIndex(null); // Reset flip after card change
            }, 1000); // Animation duration
        }, 4000); // Flip every 4 seconds

        return () => clearInterval(interval); // Clean up the interval
    }, [visibleCards]);

    return (
        <div className="w-full p-4 lg:w-[90%] mx-auto my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {visibleCards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`transform transition-transform duration-700 ease-in-out ${index === flipIndex ? 'rotate-y-180' : ''
                            }`}
                    >
                        <Card
                            id={card.id}
                            issue={card.issue}
                            title={card.title}
                            description={card.description}
                            linkText={card.linkText}
                            backgroundImage={card.backgroundImage}
                            backgroundColor={card.backgroundColor}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardFlipSection;
