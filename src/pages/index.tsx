import React from "react";
import Head from "@/components/head";
import Link from "next/link";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import { useState } from "react";
import Image from "next/image";
import LogoBlack from "@/assets/logo-black.svg";

export default function Home() {
  const [showInfoModa, setShowInfoModal] = useState(false);
  return (
    <>
      <Head />
      <header className="m-auto flex items-center justify-between py-10 max-md:flex-col max-md:justify-center max-md:pb-0 w-[80%]">
        <Link className="text-4xl tracking-widest" href="/">
          <Image src={LogoBlack} width={250} alt="logo" />
        </Link>
        <div className="flex justify-end gap-2 text-lg underline max-sm:justify-center max-sm:flex-col max-md:pt-5 md:gap-5">
          <button className="">Become a Sponsor</button>
          <button>Become a Mentor</button>
        </div>
      </header>
      <main
        className={`m-auto min-h-screen w-full px-4 font-montserrat md:w-[80%] md:p-0`}
      >
        <section className="mx-auto flex flex-col items-center text-center text-gray-700">
          <div className="flex max-w-lg flex-col gap-2 pb-10  pt-10">
            <div className="flex justify-center">
              <h1
                data-tooltip-target="tooltip-top"
                data-tooltip-placement="top"
                className="text-4xl font-medium"
              >
                Happening in November 2023
              </h1>
              <div
                className="relative h-max"
                onMouseEnter={() => setShowInfoModal(true)}
                onMouseLeave={() => setShowInfoModal(false)}
                onClick={() => setShowInfoModal(!showInfoModa)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-2 h-6 w-6 text-gray-500 hover:cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {showInfoModa && (
                  <div
                    className={`} absolute right-0 top-10 w-[300px] overflow-scroll rounded-lg border-[1px] border-gray-100 bg-gray-50 p-4 text-left text-xs text-gray-600 transition-all duration-300
                ease-in`}
                  >
                    A specific date, along with other details, will be confirmed
                    and shared with you later before registrations officially
                    open. <br /> <br /> In the meantime refer yourself to the
                    FAQs or ping our support email, and we will answer all your
                    burning questions
                  </div>
                )}
              </div>
            </div>
            <p className="text-2xl font-medium italic">Kigali, Rwanda</p>
          </div>

          <div className="flex max-w-3xl flex-col gap-5 pb-20 max-sm:pb-10 md:gap-2">
            <p className="text-xl font-medium">
              Dazzle the world with your creative mind. We&apos;ll give you
              the platform!
            </p>
            <p className="text-sm">
              We are bringing together student developers, junior developers,
              mentors, speakers, sponsors, and tech experts and provide them
              with a platform to learn about tech, build unique products, and
              share their experiences with the rest of the world. It’s gonna be
              EXQUISITE!
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-10 max-md:gap-5">
            <OneBlock
              title="Learn"
              description={[
                "Attend and learn from targeted workshops series and speaker sessions."
              ]}
              bgColor="bg-[#6F6F6F]"
            />
            <OneBlock
              title="Build"
              description={[
                "Collaborate with your team to build unique products using state-of-the-art technologies with full support from our mentors and coaches."
              ]}
              bgColor="bg-[#f6cccc]"
              textColor="text-gray-700"
            />
            <OneBlock
              title="Share"
              description={[
                "Demo your solutions and win special prizes from our sponsors and partners.",
                "Explore possibilities for future opportunities with our sponsors at the Career Fair."
              ]}
              bgColor="bg-[#ffffff]"
              textColor="text-gray-700"
            />
          </div>
          <button className="ptext-lg my-20 rounded-xl bg-black px-5 py-3 font-bold text-white outline-none max-sm:my-5 max-sm:mt-10">
            Register your interest NOW!
          </button>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  );
}

function OneBlock({
  title,
  description,
  bgColor,
  textColor,
}: {
  title: string;
  description: string[];
  bgColor: string;
  textColor?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg text-center md:rounded-[25px] ${bgColor} h-auto w-[90%] py-6 md:h-[250px] 2xl:w-[325px] md:w-[300px] md:py-0 md:max-sm:w-[300px] ${textColor ?? "text-white"
        } ${title === "Share" ? "border-[0.5px] border-gray-300" : ""}`}
    >
      <h2
        className={`pb-3 text-3xl font-bold ${title === "Share" ? "text-[#D10000]" : ""
          }`}
      >
        {title}
      </h2>
      {description.map((desc, index) => (
        <p
          className="w-[90%] text-base font-medium leading-[120%] md:w-[75%]"
          key={index}
        >
          {desc}
        </p>
      ))}
    </div>
  );
}
