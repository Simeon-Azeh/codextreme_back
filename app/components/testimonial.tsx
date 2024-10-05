"use client"

import React, { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    testimonial: string;
}

const testimonialsData: Testimonial[] = [
    { id: 1, name: 'John Doe', position: 'CEO at Company A', testimonial: 'This is the best service ever!' },
    { id: 2, name: 'Jane Smith', position: 'CTO at Company B', testimonial: 'Amazing support and great team!' },
    { id: 3, name: 'Sam Wilson', position: 'Product Manager at Company C', testimonial: 'Highly recommend this platform.' },
    { id: 4, name: 'Emily Davis', position: 'Designer at Company D', testimonial: 'My go-to solution for every project.' },
    { id: 5, name: 'Michael Lee', position: 'Developer at Company E', testimonial: 'Professional and timely service.' },
    { id: 6, name: 'Sarah Brown', position: 'CEO at Company F', testimonial: 'Couldn’t ask for more!' },
    { id: 7, name: 'James White', position: 'COO at Company G', testimonial: 'This company exceeded expectations.' },
    { id: 8, name: 'Laura Green', position: 'HR at Company H', testimonial: 'Very happy with the results.' },
    { id: 9, name: 'Paul Black', position: 'CFO at Company I', testimonial: 'Fantastic experience from start to finish.' },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 10000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const displayedTestimonials = testimonialsData.slice(currentIndex, currentIndex + 9);

    return (
        <div className="overflow-hidden w-full lg:w-[90%] mx-auto my-12 px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
                {displayedTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-4 border border-gray-300 rounded-md bg-white shadow-lg">
                        <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
                        <p className="text-gray-700">{testimonial.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
