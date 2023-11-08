import React from "react";

export default function EventDetails() {
    return (
        <>
            <div className="mt-16 flex gap-10 flex-row max-xl:flex-col w-full justify-between text-xl">
                <div>
                    <h2 className="py-2 text-3xl font-bold">What is CodeXtreme?</h2>
                    <p>
                        CodeXtreme is a seasonal <strong>4 days Hackathon</strong> that brings together like-minded individuals from all walks of tech to <strong>solve problems</strong>, <strong>network</strong> with local and international <strong>tech experts</strong> and <strong>companies</strong>, <strong>win prizes</strong>, and create impact with their tech solutions.
                    </p>
                </div>
                <div>
                    <h2 className="py-2 text-3xl font-bold">Why should I join?</h2>
                    <p>We give you the platform to learn from the best in the industry. CodeXtreme is where “The Rubber Meets The Road”. Come learn from other hackers, build solutions with support fom our mentors, win amazing prizes, network with companies at out <strong>Career Fair</strong> and share your experience with the rest of the world.</p>
                </div>
            </div>
            <div className="w-[90%] m-auto">
                <div className="flex flex-row justify-between gap-10 pt-20">
                    <div>
                        <h2 className="text-9xl max-xl:text-6xl max-sm:text-5xl font-bold">200+</h2>
                        <p className="text-5xl max-xl:text-2xl max-sm:text-xl">Target Attendance</p>
                    </div>
                    <div>
                        <h2 className="text-9xl max-xl:text-6xl max-sm:text-5xl font-bold text-[#e88080]">3 days</h2>
                        <p className="text-5xl max-xl:text-2xl max-sm:text-xl">Intense learning and building.</p>
                    </div>
                </div>
                <div className="pt-20">
                    <h2 className="text-9xl max-xl:text-6xl max-sm:text-5xl font-bold text-[#6f6f6f]">1 full day</h2>
                    <p className="text-5xl max-xl:text-2xl max-sm:text-xl">Career Fair with our sponsors.</p>
                </div>
            </div>
        </>
    );
}