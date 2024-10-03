import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FaDotCircle } from "react-icons/fa";

interface EventProps {
  title: string;
  status: string;
  location: 'ALU Campus' | 'Online' | 'Hybrid';
  date: string;
  time: string;
  backgroundImage: string;
  isUpcoming: boolean; // To differentiate between upcoming and past events
}

const EventCard: React.FC<EventProps> = ({ title, status,  location, date, time, backgroundImage, isUpcoming }) => {
  return (
    <div
      className="relative h-[400px] rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white z-10">
      <p className='flex my-2 items-center gap-2'><FaDotCircle className='text-red-400' />{status}</p>
        <h3 className="text-2xl font-semibold mb-2 ">{title}</h3>
       
        <div className="flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-lg" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <FaCalendarAlt className="text-lg" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <FaClock className="text-lg" />
          <span>{time}</span>
        </div>

        {/* Buttons for upcoming events */}
        {isUpcoming ? (
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 text-white bg-gradient-to-r from-[#000000] to-[#666666] rounded font-semibold hover:translate-y-[-5px] duration-150">
              Register
            </button>
            <button className="px-4 py-2 text-white bg-gradient-to-r from-[#D10000] to-[#6B0000] rounded font-semibold hover:translate-y-[-5px] duration-150">
              View Details
            </button>
          </div>
        ) : (
          <button className="mt-4 px-4 py-2 text-white bg-gradient-to-r from-[#D10000] to-[#6B0000] rounded font-semibold hover:translate-y-[-5px] duration-150">
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

const EventSection = () => {
  return (
    <div className="w-full p-4 lg:w-[90%] mx-auto my-12">
      <h2 className="text-3xl font-semibold space-mono  text-black">Last events & activities</h2>
      <p className='mb-8 text-black '>Compiled highlights from all our past events and activities.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Event */}
        <EventCard
          title="Innovate Africa 2024"
          location="ALU Campus"
          date="We 11th - Sat 14th "
          time="8:00 AM - 7:00 PM"
          backgroundImage="/eventimg1.jpeg"
          isUpcoming={true}
          status='Upcoming'
        />

        {/* Past Event 1 */}
        <EventCard
          title="CodeX Hackhaton"
          location="Online"
          date="Thu 1st - Sat 3rd"
          time="8:00 AM - 7:00 PM"
          backgroundImage="/eventimg2.jpeg"
          isUpcoming={false}
          status='Past event'
        />

        {/* Past Event 2 */}
        <EventCard
          title="Online Innovation Workshop"
          location="Hybrid"
          date="Mon 5th - Thu 8th"
          time="8:00 AM - 7:00 PM"
          backgroundImage="/eventimg3.jpeg"
          isUpcoming={false}
          status='Past event'
        />
      </div>
    </div>
  );
};

export default EventSection;
