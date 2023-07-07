import Head from "@/components/head";
import Link from "next/link";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import { useState } from "react";

export default function Home() {
  const [showInfoModa, setShowInfoModal] = useState(false);
  return (
    <>
      <Head />
      <header className="flex max-sm:flex-col max-sm:justify-center justify-between items-center max-sm:pb-0 py-10 w-[80%] m-auto">
        <Link className="text-4xl font-semibold tracking-widest" href="/">
          <span className="text-black">Code</span>
          <span className="text-[#D10000]">Xtreme</span>
        </Link>
        <div className="flex max-sm:justify-center justify-end gap-5 max-sm:pt-5 text-lg">
          <button className="">Become a Sponsor</button>
          <button>Become a Mentor</button>
        </div>
      </header>
      <main
        className={`min-h-screen w-[80%] m-auto p-0 font-montserrat`}
      >
        <section className="mx-auto flex flex-col items-center text-center text-gray-700">
          <div className="flex max-w-lg flex-col gap-2 pt-10  pb-10">
            <div className="flex justify-center">
              <h1
                data-tooltip-target="tooltip-top"
                data-tooltip-placement="top"
                className="text-4xl font-medium"
              >
                Happening in November 2023
              </h1>
              <div
                className="relative"
                onMouseEnter={() => setShowInfoModal(true)}
                onMouseLeave={() => setShowInfoModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hover:cursor-pointer w-6 h-6 ml-2 text-gray-500"

                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {showInfoModa && <div
                  className={`rounded-lg absolute right-0 overflow-scroll w-[300px] top-10 border-[1px] border-gray-100 bg-gray-50 p-4 text-left text-xs text-gray-600 transition-all duration-300 ease-in
                }`}
                >
                  A specific date, along with other details will be confirmed and
                  shared with you later before registrations officially open. <br />{" "}
                  <br /> In the meantime refer yourself to the FAQs or ping our
                  support email and will answer all your burning questions
                </div>
                }
              </div>
            </div>
            <p className="text-2xl font-medium italic">Kigali, Rwanda</p>
          </div>

          <div className="flex max-w-3xl flex-col gap-2 pb-20 max-sm:pb-10">
            <p className="text-xl font-medium">
              Come dazzle the world with your creative mind. We&apos;ll give you
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
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center gap-10 max-sm:gap-5 flex-wrap">
            <OneBlock
              title="Learn"
              description={[
                "Attend and learn from workshops  series and speaker sessions",
              ]}
              bgColor="bg-[#6F6F6F]"
            />
            <OneBlock
              title="Build"
              description={[
                "Collaborate with your team to build unique products using state of the art technologies with ful support from our mentors and coaches",
              ]}
              bgColor="bg-[#f6cccc]"
              textColor="text-gray-700"
            />
            <OneBlock
              title="Share"
              description={[
                "Demo your solutions and win special prizes from our sponsors and partners.",
                "Explore possibilities for future opportunities with our sponsors at the Career Fair",
              ]}
              bgColor="bg-[#ffffff]"
              textColor="text-gray-700"
            />
          </div>
          <button className="bg-black outline-none rounded-xl text-white ptext-lg font-bold my-20 max-sm:my-5 max-sm:mt-10 py-3 px-5">
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
      className={`flex flex-col justify-center items-center rounded-[25px] text-center ${bgColor} h-[250px] w-[250px] max-sm:w-[300px] ${textColor ?? "text-white"
        } ${title === "Share" ? "border-[0.5px] border-gray-300" : ""}`}
    >
      <h2
        className={`text-3xl pb-3 font-bold ${title === "Share" ? "text-[#D10000]" : ""
          }`}
      >
        {title}
      </h2>
      {description.map((desc, index) => (
        <p className="text-base w-[75%] leading-[120%] font-medium" key={index}>
          {desc}
        </p>
      ))}
    </div>
  );
}
