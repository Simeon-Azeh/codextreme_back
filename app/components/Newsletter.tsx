"use client"

import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can add the email submission logic
        alert(`Subscribed with email: ${email}`);
        setEmail(''); // Clear the input after submission
    };

    return (
        <div className="w-full  lg:w-[90%] mx-auto my-12 px-6 md:px-0">
            <div className="">
                <h2 className="text-3xl font-semibold space-mono text-gray-900 mb-4 ">Join Our Newsletter</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Subscribe to get the latest updates, exclusive content, and insights directly to your inbox, We write one of these every month.
                </p>
                
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="px-4 py-2 w-full md:w-96 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-black"
                        required
                    />
                    <button
                        type="submit"
                        className="flex items-center justify-center bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-500 transition-all duration-300"
                    >
                        Subscribe <MdSend className="ml-2" />
                    </button>
                </form>

                {/* Success Message */}
                {/* You can conditionally show a success message after submission here */}
            </div>
        </div>
    );
};

export default Newsletter;
