import React from "react";
import Image from "next/image";
import SectionStructure from "@/components/shared/sectionStructure";
import ALULogo from "@/assets/svgs/alueducation-logo.svg";
import AlxLogo from "@/assets/svgs/alx-logo.svg";
import BKFoundationLogo from "@/assets/svgs/bk-foundation 1.svg";
import BKLogo from "@/assets/svgs/bk-logo 1.svg";
import RDBLogo from "@/assets/svgs/RDB_logo 1.svg";
import MCFLogo from "@/assets/svgs/mcf-logo 1.svg";
import IremboLogo from "@/assets/svgs/irembo 1.svg";
import GIZLogo from "@/assets/svgs/giz 1.svg";
import MinICTLogo from "@/assets/svgs/min-ict 1.svg";

const sponsors = [
    {
        name: "African Leadership University",
        image: ALULogo,
    },
    {
        name: "ALX",
        image: AlxLogo,
    },
];

const prospectiveSponsors = [
    {
        name: "MasterCard Foundation",
        image: MCFLogo,
    },
    {
        name: "BK Foundation",
        image: BKFoundationLogo,
    },
    {
        name: "BK",
        image: BKLogo,
    },
    {
        name: "Rwanda Development Board",
        image: RDBLogo,
    },
    {
        name: "Irembo",
        image: IremboLogo,
    },
    {
        name: "GIZ",
        image: GIZLogo,
    },
    {
        name: "Ministry of ICT and Innovation",
        image: MinICTLogo,
    },
];

export default function Sponsors() {
    const [initialSponsors, setInitialSponsors] = React.useState(sponsors.slice(0, 4));
    const [showMore, setShowMore] = React.useState(false);

    return (
        <>
            <SectionStructure title="Our Sponsors" isCentered={true} >
                <div className="flex flex-wrap gap-20 max-xl:gap-10 justify-center items-center mt-10">
                    {initialSponsors.map((sponsor, index) => {
                        return <SponsorCard key={index} name={sponsor.name} image={sponsor.image} />;
                    })}
                </div>
                <button className="font-bold underline text-xl text-gray-700" onClick={() => {
                    showMore ? setInitialSponsors(sponsors.slice(0, 4)) :
                        setInitialSponsors(sponsors);
                    setShowMore(!showMore);
                }}>{!showMore ? "See more >>" : "See less <<"}</button>
            </SectionStructure>
            <SectionStructure title="Prospective Partners/Sponsors" >
                <p className="mt-5 text-xl">We&apos;ll officially announce these sponsors/partners and more along with other companies joining our career fair as we finalize with them.</p>
                <div className="flex flex-wrap gap-x-20 max-xl:gap-10 justify-center items-center">
                    {prospectiveSponsors.map((sponsor, index) => {
                        return <SponsorCard key={index} name={sponsor.name} image={sponsor.image} />;
                    })}
                </div>
                {/* <button className="font-bold underline text-xl text-gray-700" onClick={() => {
                    showMore ? setInitialSponsors(sponsors.slice(0, 4)) :
                        setInitialSponsors(sponsors);
                    setShowMore(!showMore);
                }}>{!showMore ? "See more >>" : "See less <<"}</button> */}
            </SectionStructure>
        </>
    );
}

function SponsorCard({ name, image }: { name: string, image: string }) {
    return (
        <div onClick={() => {
            window.open("https://www.google.com", "_blank");
        }} className="cursor-pointer h-fit align-middle w-fit">
            <Image className="rounded-md" src={image} alt={name + "'s photo"} width={200} height={50} />
        </div>
    );
}