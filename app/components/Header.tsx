"use client";

import { useState } from "react";
import { Drawer, Button } from "antd"; // Import Ant Design components
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";




export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const showDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <header className="bg-white px-4 py-8 flex justify-between items-center w-full lg:w-[90%] mx-auto">
            <div className="text-2xl font-bold text-purple-600">
                {/* Logo with Link to homepage */}
                <Link href="/">
                    <div className="text-2xl font-bold text-purple-600 cursor-pointer">
                        <img
                            src="/code_logo.png" // Path relative to the public folder
                            alt="Logo"
                            width={250}      // Width and height can be set inline
                            height={100}
                        />
                    </div>
                </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-[#000] space-mono font-medium">
                <div className="relative">
                    <button
                        className="hover:text-red-700 flex flex-row  items-center gap-1"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Activities
                        <IoMdArrowDropdown />
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute bg-white rounded shadow-sm mt-2 py-2 w-40 text-gray-700 border">
                            <li className="px-4 py-2 hover:bg-red-50 flex items-center gap-1">
                                <a href="#">Hackathons</a>
                                <MdArrowOutward />
                            </li>
                            <li className="px-4 py-2 hover:bg-red-50 flex items-center gap-1">
                                <a href="#">Buildathons </a>
                                <MdArrowOutward />
                            </li>
                        </ul>
                    )}
                </div>
                <a href="#" className="hover:text-red-700 flex flex-row  items-center gap-2">
                    Trove <MdArrowOutward />
                </a>
                <a href="#" className="hover:text-red-700">
                    Our Story
                </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    type="button"
                    title="button"
                    onClick={showDrawer}
                    className="text-red-700 bg-transparent border border-red-700 rounded-md px-4 py-2 hover:bg-red-700 hover:text-white transition font-semibold space-mono"
                >
                    <MdOutlineMenuOpen size={24} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={isDrawerOpen}
                width={250}
            >
                <div className="flex flex-col gap-4 space-mono">
                    <div>
                        <button
                            className="w-full text-left py-2 flex items-center gap-1"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Activities
                            <IoMdArrowDropdown />
                        </button>
                        {isDropdownOpen && (
                            <ul className="bg-gray-100 rounded p-2">
                                <li className="py-2 hover:bg-red-50 flex items-center gap-1">
                                    <a href="#">Hackathons</a>
                                    <MdArrowOutward />
                                </li>
                                <li className="py-2 hover:bg-red-50 flex items-center gap-1">
                                    <a href="#">Buildathons</a>
                                    <MdArrowOutward />
                                </li>
                            </ul>
                        )}
                    </div>
                    <a href="#" className="flex items-center gap-1 py-2 hover:bg-purple-200 ">
                        Trove  <MdArrowOutward />
                    </a>
                    <a href="#" className="block py-2 hover:bg-purple-200">
                        Our Story
                    </a>
                </div>
            </Drawer>
        </header>
    );
}
