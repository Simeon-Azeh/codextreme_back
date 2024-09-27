"use client";

import { useState } from "react";
import { Drawer } from "antd"; // Import Ant Design components
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowOutward, MdKeyboardArrowUp } from "react-icons/md";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const showDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <header className="bg-white px-4 py-6 flex justify-between items-center w-full lg:w-[90%] mx-auto">
            <div className="text-2xl font-bold ">
                {/* Logo with Link to homepage */}
                <Link href="/">
                    <div className="cursor-pointer">
                        <img
                            src="/code_logo.png" // Path relative to the public folder
                            alt="Logo"
                            width={250} // Width can be set inline
                            height={100}
                        />
                    </div>
                </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-[#000] space-mono font-medium">
                <div className="relative">
                    <button
                        className="hover:text-red-700 flex flex-row items-center gap-1"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Activities
                        {isDropdownOpen ? <MdKeyboardArrowUp /> : <IoMdArrowDropdown />}
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute bg-white rounded shadow-sm mt-2 py-2 w-40 text-gray-700 border">
                            <li className="px-4 py-2 hover:bg-red-50 flex items-center gap-1">
                                <Link href="/hackathons">Hackathons</Link>
                                <MdArrowOutward />
                            </li>
                            <li className="px-4 py-2 hover:bg-red-50 flex items-center gap-1">
                                <Link href="/buildathons">Buildathons</Link>
                                <MdArrowOutward />
                            </li>
                        </ul>
                    )}
                </div>
                <Link href="/trove" className="hover:text-red-700 flex flex-row items-center gap-2">
                    Trove <MdArrowOutward />
                </Link>
                <Link href="/our-story" className="hover:text-red-700">
                    Our Story
                </Link>
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
                width={345}
            >
                <div className="flex flex-col gap-4 space-mono">
                    <div>
                        <button
                            className="w-full text-left py-2 flex items-center gap-1"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Activities
                            {isDropdownOpen ? <MdKeyboardArrowUp /> : <IoMdArrowDropdown />}
                        </button>
                        {isDropdownOpen && (
                            <ul className="bg-gray-100 rounded p-2">
                                <li className="py-2 hover:bg-red-50 flex items-center gap-1">
                                    <Link href="/hackathons">Hackathons</Link>
                                    <MdArrowOutward />
                                </li>
                                <li className="py-2 hover:bg-red-50 flex items-center gap-1">
                                    <Link href="/buildathons">Buildathons</Link>
                                    <MdArrowOutward />
                                </li>
                            </ul>
                        )}
                    </div>
                    <Link href="/trove" className="flex items-center gap-1 py-2 hover:bg-purple-200">
                        Trove <MdArrowOutward />
                    </Link>
                    <Link href="/our-story" className="block py-2 hover:bg-purple-200">
                        Our Story
                    </Link>
                </div>
            </Drawer>
        </header>
    );
}
