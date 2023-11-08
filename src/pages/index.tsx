import React from "react";
import Head from "@/components/head";
import Link from "next/link";
// import { useRouter } from "next/router";
import Faq from "@/components/landing/faq";
import Team from "@/components/landing/team";
import Footer from "@/components/landing/footer";
import HeroSlider from "@/components/landing/heroSlider";
import EventDetails from "@/components/landing/eventDetails";
import Tracks from "@/components/landing/tracks";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Sponsors from "@/components/landing/sponsors";
import OfficialSchedule from "@/components/landing/officialSchedule";
import Panel from "@/components/landing/panel";
import Prizes from "@/components/landing/prizes";

export default function Home() {
  // const router = useRouter();
  return (
    <>
      <Head />
      <header className="m-auto flex items-center justify-between py-10 max-xl:flex-col max-xl:justify-center max-xl:items-start max-xl:pb-0 w-[80%] max-xl:w-[85%]">
        <Link className="text-4xl tracking-widest" href="/">
          <Image src={Logo} width={400} alt="logo" />
        </Link>
        <div className="flex justify-end gap-2 text-base max-sm:justify-center max-sm:flex-col max-xl:pt-10 md:gap-5">
          <button data-tf-popup="SoW8aCjT" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Sponsorship Interest Form" data-tf-transitive-search-params data-tf-medium="snippet" className="border border-gray-200 rounded-3xl px-10 py-3">Become a Sponsor</button>
          <button data-tf-popup="mqo9BHQ6" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Mentor Interest Form" data-tf-transitive-search-params data-tf-medium="snippet" className="border border-gray-200 rounded-3xl px-10 py-3">Become a Mentor/Coach</button>
        </div>
      </header>
      <main
        className={`m-auto min-h-screen w-full px-4 font-space-mono md:w-[80%] max-xl:w-[90%] md:p-0 text-gray-700`}
      >
        <section className="mx-auto text-gray-700 mt-16 max-xl:mt-5">
          <div className="pb-5 pt-10 max-xl:pb-0">
            <h1 className="text-5xl font-bold my-5">Biggest Student Hackathon</h1>
            <h1 className="text-5xl font-medium">Happening in Kigali, on 24th Jan 2024</h1>
            <h2 className="text-3xl text-gray-400 my-5">At The African Leadership University</h2>
          </div>
          <div className="pb-20 max-sm:pb-10 md:gap-2">
            <p className="text-xl font-bold py-2">
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
      </main>
      <Footer />
    </>
  );
}
