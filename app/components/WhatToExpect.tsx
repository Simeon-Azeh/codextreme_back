"use client"

import React, { useState } from 'react';
import { TbBulb } from "react-icons/tb";

const WhatToExpect = () => {

    return (
        <div className="w-full px-6 md:px-0 lg:w-[90%] mx-auto my-12">
            <div className="">
                <h2 className="text-3xl font-semibold space-mono text-gray-900 mb-2">What to expect from us</h2>
                <p className="text-lg text-gray-700 mb-6">
                    We’ll solve your problem once and for all. The CodeXtreme way.
                </p>
                <ul className='space-y-4'>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        Transparent Pricing
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        Up-to-date, reliable software product
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        Predictable support and regular upgrades
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        Full control of your asset (Your Software)
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        Clear, concise and consistent communication from our team
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        Clarity and alignment on requirements, the roadmap, time-frame, and value
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        End users satisfaction with your software
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        On-demand development team to augment any in-house staff with minimal disruption
                    </li>
                    <li className='flex items-center flex-row  border border-solid border-gray-400 gap-2 px-6 py-2 rounded-md text-black font-medium'>
                        <TbBulb size={24}/>
                        Confidence that we are handling implementation, support & maintenance so you don’t have to
                    </li>

                </ul>
                <button className="px-4 py-2 text-white bg-gradient-to-r from-[#000000] to-[#666666] rounded font-medium hover:translate-y-[-5px] duration-150 mt-5">Check our consultancy prospectus</button>

            </div>
        </div>
    );
};

export default WhatToExpect;
