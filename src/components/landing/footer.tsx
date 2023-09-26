import React from "react";
import Link from "next/link";

interface FooterLinkSectionProps {
  title: string;
  children: React.ReactNode;
}

function FooterLinkSection({ title, children }: FooterLinkSectionProps) {
  return (<div className="flex flex-col gap-2">
    <h3 className="mr-4 text-xl font-bold md:mr-6">{title}</h3>
    <ul className="flex flex-col gap-1 font-thin text-gray-100">
      {children}
    </ul>
  </div>);
}

export default function Footer() {
  return (
    <footer className="mt-20 shadow bg-black text-white">
      <div className="m-auto w-[80%] pt-10 max-md:py-8 max-md:w-[85%]">
        <div className="mb-10">
          <h2 className="text-5xl font-bold py-5">Where we are going next.</h2>
          <p className="mb-2">If you are not based in Kigali but would love to invite CodeXtreme to your community next, please fill this form.</p>
          <Link className="underline" href={"/"}>
            Bring CodeXtreme to your community {">>"}
          </Link>
        </div>
        <div className="mb-20 max-sm:mb-0 flex max-sm:items-start flex-wrap items-start gap-24 max-md:gap-10 font-medium text-white">
          <FooterLinkSection title="CodeXtreme">
            <li>
              <a href="#" className="underline">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Judging Criteria
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Official Schedule
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Become a Speaker
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Volunteer at CodeXtreme
              </a>
            </li>
          </FooterLinkSection>
          <FooterLinkSection title="For Sponsors">
            <li>
              <a href="#" className="underline">
                The Event
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Perks & Packages
              </a>
            </li>
          </FooterLinkSection>
          <FooterLinkSection title="Support">
            <li className="flex gap-2 flex-wrap">
              Email:{" "}
              <a href="mailto:ping@codextreme.infinitloop.io" className="underline">
                codextreme@infinitloop.io
              </a>
            </li>
            <p className="flex gap-2">
              Phone:{" "}
              <a href="#">
                +250787104022
              </a>
            </p>
            <p className="flex gap-2">
              Whatsapp:{" "}
              <a href="#">
                +250737026499
              </a>
            </p>
          </FooterLinkSection>
          <FooterLinkSection title="Follow our Socials">
            <li>
              Twitter | <a href="#" className="underline">
                @CodeXtreme
              </a>
            </li>
            <li>
              LinkedIn | <a href="#" className="underline">
                CodeXtreme
              </a>
            </li>
            <li>
              Instagram | <a href="#" className="underline">
                @CodeXtreme
              </a>
            </li>
          </FooterLinkSection>
        </div>
        <p className="py-10 text-xs text-gray-600 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CodeXtreme
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer >
  );
}
