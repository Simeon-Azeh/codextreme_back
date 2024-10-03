import React from 'react';

// Define types for the card props
interface CardProps {
    title: string;
    description: string;
    iconSrc: string; // Path to the icon image
    iconBgColor?: string; // Optional background color for the icon section
    isGradient?: boolean; // Optional gradient for the icon section
}

// Card component
const Card: React.FC<CardProps> = ({ title, description, iconSrc, iconBgColor, isGradient }) => {
    const backgroundStyle = isGradient
        ? 'bg-gradient-to-r from-[#6B0000] to-[#D10000]'
        : `${iconBgColor || 'bg-gray-200'}`;

    return (
        <div className="p-4 border border-gray-300 rounded-md bg-white hover:translate-y-[-5px] duration-150 cursor-pointer min-h-[100px] md:min-h-[200px]">
            <h3 className="text-lg font-semibold mb-2 space-mono text-[#000]">{title}</h3>
            <p className="mb-4 mont text-[#000]">{description}</p>
            <div className={`flex px-4 items-center h-20 w-full border rounded-md ${backgroundStyle}`}>
                <img src={iconSrc} alt={`${title} icon`} className="h-14 w-14" />
            </div>
        </div>
    );
};

// Main HeroSection component
const HeroSection = () => {
    return (
        <div className="  pt-6 md:pt-16 ">
            <h2 className="space-mono text-[18px] lg:text-[50px] text-[#000000]">
                Innovating in Africa since 2024
            </h2>
            <h1 className="text-[28px] lg:text-[70px] text-[#000000] mont font-semibold">
                Global Innovation Consulting
            </h1>
            <p className="text-[18px] mont lg:text-[25px] text-[#333]">
                Solving for companies, organizations, people, and communities
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <Card
                    title="Ideation"
                    description="We work together to craft problem statements that respond to your needs."
                    iconSrc="/image1.png"
                    iconBgColor="bg-gradient-to-r from-[#D10000] to-[#6B0000]"
                />
                <Card
                    title="Engagement"
                    description="Collaborate to align the solution with your current processes and operations."
                    iconSrc="/image2.png"
                    iconBgColor="bg-gradient-to-r from-[#000000] to-[#666666]"
                />
                <Card
                    title="Innovation"
                    description="Our teams work to deliver an A-grade-level solution to your technical problem."
                    iconSrc="/image3.png"
                    iconBgColor="bg-gradient-to-r from-[#FFFFFF] to-[#999999]"
                />
                <Card
                    title="Impact"
                    description="You save time & money and serve your team and customers better."
                    iconSrc="/image4.png"
                    iconBgColor="bg-[#fff]"
                />
            </div>

            {/* Buttons Section */}
            <div className="mt-6 flex space-x-4">
                <button className="px-4 py-2 text-white bg-gradient-to-r from-[#000000] to-[#666666] rounded font-semibold hover:translate-y-[-5px] duration-150">
                    Get a Quote
                </button>
                <button className="px-4 py-2 text-white bg-gradient-to-r from-[#D10000] to-[#6B0000] rounded font-semibold hover:translate-y-[-5px] duration-150">
                    Become a Partner
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
