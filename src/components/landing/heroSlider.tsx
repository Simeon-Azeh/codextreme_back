import React, { useEffect, useState } from "react";

import { motion } from 'framer-motion';

export default function HeroSlider() {
    const [activeBlock, setActiveBlock] = useState(0);

    // Define the content for the three blocks
    const blocks = [
        {
            title: "LEARN",
            description: "Attend and learn from workshops series and speaker sessions",
            tagColor: "bg-[#6f6f6f]",
            bgColor: "bg-[#f1f1f1]",
        },
        {
            title: "BUILD",
            description: "Collaborate with your team to build unique products using state of the art technologies with full support from our mentors and coaches",
            tagColor: "bg-[#da1d36]",
            bgColor: "bg-[#fae5e5]",
        },
        {
            title: "SHARE",
            description: "Demo your solutions and win special prizes from our sponsors and partners. Explore possibilities for future opportunities with our sponsors at the Career Fair",
            tagColor: "bg-[#000000]",
            bgColor: "bg-[#e5e5e5]",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBlock((prevBlock) => (prevBlock + 1) % blocks.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <motion.div
                    key={activeBlock}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <OneBlock
                        title={blocks[activeBlock].title}
                        description={blocks[activeBlock].description}
                        tagColor={blocks[activeBlock].tagColor}
                        bgColor={blocks[activeBlock].bgColor}
                    />
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="my-5 flex justify-center"
            >
                {blocks.map((block, index) => (
                    <motion.div
                        key={index}
                        className={`w-4 h-2 mx-1 rounded-full cursor-pointer ${activeBlock === index ? 'bg-black' : 'bg-gray-400'
                            }`}
                        onClick={() => setActiveBlock(index)}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                    ></motion.div>
                ))}
            </motion.div>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="ptext-lg rounded-3xl bg-black px-10 py-4 my-5 font-bold text-white outline-none max-sm:my-5 max-sm:mt-10"
            >
                Register your interest NOW!
            </motion.button>
        </section>
    );
}

function OneBlock({
    title,
    description,
    tagColor,
    bgColor,
}: {
    title: string;
    description: string;
    tagColor: string;
    bgColor: string;
}) {
    return (
        <div
            className={`flex flex-row items-center justify-center rounded-lg md:rounded-[25px] md:py-0 w-full"
                }`}
        >
            <h2
                className={`flex items-center justify-center text-2xl font-bold ${tagColor} text-white h-[100px] w-[138px] mr-2 rounded-2xl`}
            >
                {title}
            </h2>
            <p
                className={`overflow-hidden flex flex-row flex-wrap items-center justify-center text-base max-xl:w-full w-[50%] px-5 font-medium leading-[120%] ${bgColor} h-[100px] rounded-2xl`}
            >
                {description}
            </p>
        </div>
    );
}