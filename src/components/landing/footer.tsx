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
          <button data-tf-popup="tLydFLwx" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Bring CodeXtreme to Your Community Next" data-tf-transitive-search-params data-tf-medium="snippet" className="underline">
            Bring CodeXtreme to your community {">>"}
          </button>
        </div>
        <div className="mb-20 max-sm:mb-0 flex max-sm:items-start flex-wrap items-start gap-24 max-md:gap-10 font-medium text-white">
          <FooterLinkSection title="CodeXtreme">
            <li>
              <a href="https://docs.google.com/document/d/1BZpkVIujCwb86WPuMrXEJqIFjWvmcNMzJ-L_5wOVorw/edit?usp=sharing" className="underline">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1f_Szd9YnticiiOzirACW3kINDCm-T28UCpeJsFx0J6M/edit?usp=sharing" target="_blank" className="underline">
                Judging Criteria
              </a>
            </li>
            <li>
              <Link href="/#schedule" className="underline">
                Official Schedule
              </Link>
            </li>
            <li>
              <button data-tf-popup="vx9aw0GA" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Speaker Interest Form" data-tf-transitive-search-params data-tf-medium="snippet" className="underline">Become a Speaker</button>
            </li>
            <li>
              <button data-tf-popup="hoSalhBm" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Volunteer Interest Form" data-tf-transitive-search-params data-tf-medium="snippet" className="underline">Volunteer at CodeXtreme</button>
            </li>
          </FooterLinkSection>
          <FooterLinkSection title="For Sponsors">
            <li>
              <Link href="/about-us#why-sponsor" className="underline">
                Why Sponsor?
              </Link>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1_Mge4BRXT9C-5ySNK3N1qMDxPHFgFm0xZ00DUv-SqRg/edit?usp=sharing" target="_blank" className="underline">
                Perks & Packages
              </a>
            </li>
          </FooterLinkSection>
          <FooterLinkSection title="Support">
            <li className="flex gap-2 flex-wrap">
              Email:{" "}
              <a href="mailto:c.murairi@alustudent.com" className="underline">
                c.murairi@alustudent.com
              </a>
            </li>
            <p className="flex gap-2">
              Phone:{" "}
              <span>
                +250787104022
              </span>
            </p>
            <p className="flex gap-2">
              Whatsapp:{" "}
              <span>
                +250737026499
              </span>
            </p>
          </FooterLinkSection>
          <FooterLinkSection title="Follow our Socials">
            <li>
              LinkedIn | <Link href="https://linkedin.com/company/codextreme" target="_blank" className="underline">
                CodeXtreme
              </Link>
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
