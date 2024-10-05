import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const ParallaxSection: React.FC = () => {
  return (
    <div className="relative bg-fixed bg-cover bg-center" 
         style={{ backgroundImage: 'url(/eventimg1.jpeg)', height: '70vh' }}>
      
      {/* Overlay to Darken the Background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Information Content */}
      <div className="relative flex flex-col justify-center h-full text-center w-full px-6 md:px-0 md:w-4/5 mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-white z-10 mb-4 font-montserrat-alt">
          {'Innovating Africa\'s Future Through Tech Solutions'}
        </h2>
        <p className="text-sm md:text-xl text-gray-200 z-10 mb-8 text-center font-inter">
          {'At CodeXtreme, we harness technology to solve Africa\'s most critical challenges. Join us in driving impact with innovative solutions that transform industries.'}
        </p>
        <a href="/initiatives" 
           className="z-10 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 w-3/5 md:w-2/5 justify-center flex items-center mx-auto font-inter font-semibold gap-2 shadow-lg">
          {'Explore Our Initiatives'} <MdArrowOutward />
        </a>
      </div>
    </div>
  );
}

export default ParallaxSection;
