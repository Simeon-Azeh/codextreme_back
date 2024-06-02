'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Footer from "@/components/landing/footer";

// import { usePathname } from 'next/navigation's

export default function PageLayout({ children }: { children: React.ReactNode }) {
    // const pathname = usePathname()
    return (
        <div className="relative">
            <header className="text-gray-700 m-auto flex items-center justify-between py-10 pt-14 max-xl:flex-col max-xl:justify-center max-xl:items-start max-xl:pb-0 w-[80%] max-xl:w-[85%]">
                <Link className="text-4xl tracking-widest" href="/">
                    <Image src={Logo} width={400} alt="logo" />
                </Link>
                {/* <Link className="border border-gray-200 rounded-3xl px-10 py-3 max-xl:mt-10" href="/about-us">About Us</Link>
                <div className="flex justify-end gap-2 text-base max-sm:justify-center max-sm:flex-col max-xl:pt-5 md:gap-5">
                    <button data-tf-popup="SoW8aCjT" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Sponsorship Interest Form" data-tf-transitive-search-params data-tf-medium="snippet" className="border border-gray-200 rounded-3xl px-10 py-3">Become a Sponsor</button>
                    <button data-tf-popup="mqo9BHQ6" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Mentor Interest Form" data-tf-transitive-search-params data-tf-medium="snippet" className="border border-gray-200 rounded-3xl px-10 py-3">Become a Mentor</button>
                </div> */}
            </header>
            {children}
            {/* {pathname !== "/merch" && <Link href={"/merch"} className="fixed top-0 py-1 text-center bg-black bg-opacity-30 text-white w-full underline">Check Out Our Merch</Link>} */}
            <Footer />
        </div>
    );
}