import React from "react";
import Head from "@/components/head";
// import Faq from "@/components/landing/faq";
// import Team from "@/components/landing/team";
// import HeroSlider from "@/components/landing/heroSlider";
// import EventDetails from "@/components/landing/eventDetails";
// import Tracks from "@/components/landing/tracks";
// import Sponsors from "@/components/landing/sponsors";
// import OfficialSchedule from "@/components/landing/officialSchedule";
// import Panel from "@/components/landing/panel";
// import Prizes from "@/components/landing/prizes";
import Link from "next/link";
import PageLayout from "@/components/shared/pageLayout";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head />
      <PageLayout>
        <div className="m-auto h-[50vh] flex flex-col justify-center items-center gap-5 w-[80%] text-center">
          <h1 className="w-fit text-2xl">Gearing up for major updates!</h1>
          <p className="w-fit text-xl italic">Stay tuned!</p>
          <div className="flex flex-row flex-wrap gap-2">
            <Link href={"https://linkedin.com/company/codextreme"} target="_blank" className="flex items-center gap-2 w-fit bg-gray-100 py-2 px-4 rounded-lg border border-gray-200"><span><FaLinkedin /></span>Check us on LinkedIn</Link>
            <Link href={"https://youtu.be/_XXBKf8Ch3k"} target="_blank" className="flex items-center gap-2 w-fit bg-gray-100 py-2 px-4 rounded-lg border border-gray-200"><span><FaYoutube /></span>Last event recap</Link>
          </div>
        </div>
        {/* <main
          className={`m-auto min-h-screen w-full px-4 font-space-mono md:w-[80%] max-xl:w-[90%] md:p-0 text-gray-700 bg-gradient-to-b`}
        >
          <section className="mx-auto text-gray-700 mt-16 max-xl:mt-5">
            <div className="pb-5 pt-10 max-xl:pb-0">
              <h1 className="text-5xl font-bold my-5">Biggest Student Hackathon</h1>
              <h1 className="text-5xl font-medium">Happening in Kigali, on 24th Jan 2024</h1>
              <h2 className="text-3xl text-gray-400 my-5">At The African Leadership University</h2>
            </div>
            <div className="pb-20 max-sm:pb-10 md:gap-2">
              <p className="text-xl text-[#da1d36] font-bold py-2">
                Come dazzle the world with your creative mind. We&apos;ll give you the platform for it!
              </p>
              <p className="text-xl">
                We are bringing together student developers, junior developers, mentors, speakers, sponsors, and tech experts to provide students with a platform to <strong>Learn</strong> about tech, <strong>Build</strong> unique products, and <strong>Share</strong> their experiences with the rest of the world. It&apos;s gonna be EXQUISITE!
              </p>
            </div>
          </section>
          <HeroSlider />
          <EventDetails />
          <Tracks />
          <OfficialSchedule />
          <Panel />
          <Prizes />
          <Sponsors />
          <Team />
          <Faq />
        </main> */}
      </PageLayout>
    </>
  );
}
