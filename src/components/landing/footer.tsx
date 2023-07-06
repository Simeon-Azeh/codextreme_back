import React from "react";

export default function Footer() {
  return (
    <footer className="mt-4 shadow bg-gray-900">
      <div className="mx-auto w-full p-4 md:py-8">
        <div className="gap-32 sm:flex sm:items-start sm:justify-start">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-end whitespace-nowrap text-2xl font-bold tracking-tighter text-white sm:mb-0"
          >
            <span className="text-5xl text-white">C</span>
            <span className="-ml-1 text-3xl text-[#D10000]">X</span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center gap-20 text-base font-medium text-white sm:mb-0">
            <li className="flex flex-col gap-2">
              <h3 className="mr-4 text-lg md:mr-6">For Sponsors</h3>
              <div className="flex flex-col gap-1 text-sm font-normal text-gray-300">
                <a href="#" className="underline">
                  The Event
                </a>
                <a href="#" className="underline">
                  Sponsorship Perks & Packages
                </a>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <h3 className="mr-4 text-lg md:mr-6">Support</h3>
              <div className="flex flex-col gap-1 text-sm font-normal text-gray-300">
                <p className="flex gap-2">
                  Phone:{" "}
                  <a href="#" className="underline">
                    +243787104022
                  </a>
                </p>

                <p className="flex gap-2">
                  Email:{" "}
                  <a href="#" className="underline">
                    example@email.com
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CodeExtreme
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
