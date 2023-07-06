import { Inter } from "next/font/google";
import Header from "@/components/head";
import Link from "next/link";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showInfoModa, setShowInfoModal] = useState(false);
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col gap-32 p-0 ${inter.className}`}
      >
        <header className="flex w-full justify-between px-8 pt-4">
          <Link className="text-2xl font-semibold tracking-widest" href="/">
            <span className="text-black">Code</span>
            <span className="text-[#D10000]">Xtreme</span>
          </Link>
          <div className="flex gap-8 text-lg">
            <button className="">Become a Sponsor</button>
            <button>Become a Mentor</button>
          </div>
        </header>
        <section className="mx-auto flex flex-col items-center gap-8 text-center text-gray-700">
          <div className="relative flex max-w-lg flex-col gap-2">
            <h1
              data-tooltip-target="tooltip-top"
              data-tooltip-placement="top"
              className="relative text-4xl font-medium"
            >
              Happening in November 2023
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#cccccc"
                className="absolute -right-2 -top-2 h-4 w-4"
                onMouseEnter={() => setShowInfoModal(true)}
                onMouseLeave={() => setShowInfoModal(false)}
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </h1>
            <p className="text-2xl font-medium italic">Kigali, Rwanda</p>

            <div
              className={`rounded-lg absolute left-[105%] w-[300px] top-0 border-[1px] border-gray-100 bg-gray-50 p-4 text-left text-xs text-gray-400 transition-all duration-300 ease-in ${
                showInfoModa ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              A specific date, along with other details will be confirmed and
              shared with you later before registrations officially open. <br />{" "}
              <br /> In the meantime refer yourself to the FAQs or ping our
              support email and will answer all your burning questions
            </div>
          </div>

          <div className="flex max-w-3xl flex-col gap-2">
            <p className="text-xl font-medium">
              Come dazzle the world with your creative mind. We&apos;ll give you
              the platform for it!
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
        <section className="flex justify-center gap-32">
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
        </section>
        <button className="text-lg underline">
          Register your interest NOW!
        </button>
        <Faq />
        <Footer />
      </main>
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
      className={`flex flex-col gap-4 rounded-[25px] p-4 pt-6 text-center ${bgColor} h-[250px] w-[250px] ${
        textColor ?? "text-white"
      } ${title === "Share" ? "border-[1px] border-black/50" : ""}`}
    >
      <h2
        className={`text-3xl font-bold ${
          title === "Share" ? "text-[#D10000]" : ""
        }`}
      >
        {title}
      </h2>
      {description.map((desc, index) => (
        <p className="text-base leading-[120%]" key={index}>
          {desc}
        </p>
      ))}
    </div>
  );
}
