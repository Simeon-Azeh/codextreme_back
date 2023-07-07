import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoColWhite from "@/assets/logo-col-white.svg";

export default function Footer() {
  return (
    <footer className="mt-20 shadow bg-black">
      <div className="m-auto w-[80%] p-4 md:py-8">
        <div className="gap-32 sm:gap-20 sm:flex sm:items-start sm:justify-start">
          <Link
            href="https://flowbite.com/"
            className="mb-4 flex items-end whitespace-nowrap text-2xl font-bold tracking-tighter text-white sm:mb-0"
          >
            <Image src={LogoColWhite} width={100} alt="logo" />
          </Link>
          <div className="mb-6 flex max-sm:flex-col max-sm:items-start flex-wrap items-center gap-20 sm:gap-10 font-medium text-white sm:mb-0">
            <div className="flex flex-col gap-2">
              <h3 className="mr-4 text-lg font-bold md:mr-6">For Sponsors</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-gray-100">
                <li>
                  <a href="#" className="underline">
                    The Event
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Sponsorship Perks & Packages
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="mr-4 text-lg font-bold md:mr-6">Support</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-gray-100">
                <p className="flex gap-2">
                  Phone:{" "}
                  <a href="#">
                    +243787104022
                  </a>
                </p>

                <li className="flex gap-2">
                  Email:{" "}
                  <a href="#" className="underline">
                    example@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-600 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CodeExtreme
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
