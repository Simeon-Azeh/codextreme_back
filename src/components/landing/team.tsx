import React from "react";
import Image from "next/image";
import SectionStructure from "@/components/shared/sectionStructure";

const teamMembers = [
    {
        name: "Cédric Murairi",
        description: `Lead Organizer`,
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699463836/codextreme-panel/cedric-murairi_meja70.jpg",
    },
    {
        name: "Marion Maina",
        description: "Operations",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699464140/codextreme-panel/marion_uqmygv.jpg",
    },
    {
        name: "Liplan Lekipising",
        description: "Hacker Experience",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699464166/codextreme-panel/liplan_tbb2d7.jpg",
    },
    {
        name: "Mo K. Lumoo",
        description: "Logistics & Finance",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699464191/codextreme-panel/mo_elu6nh.jpg",
    },
    {
        name: "Mike Kiplangat",
        description: "Logistics",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699464116/codextreme-panel/mike_lhyfax.jpg",
    },
    {
        name: "Harriet Mwanza",
        description: "Marketing & Comms",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699464180/codextreme-panel/harriet_bjtdte.jpg",
    },
];

export default function Team() {
    const [initialTeamMembers, setInitialTeamMembers] = React.useState(teamMembers.slice(0, 4));
    const [showMore, setShowMore] = React.useState(false);
    return (
        <SectionStructure title="The Team" isCentered={true} >
            <div className="flex flex-wrap gap-20 justify-center items-center mt-20">
                {initialTeamMembers.map((member, index) => {
                    return <TeamMemberCard key={index} name={member.name} description={member.description} image={member.image} />;
                })}
            </div>
            <button className="font-bold underline text-xl text-gray-700" onClick={() => {
                showMore ? setInitialTeamMembers(teamMembers.slice(0, 4)) :
                    setInitialTeamMembers(teamMembers);
                setShowMore(!showMore);
            }}>{!showMore ? "See more >>" : "See less <<"}</button>
        </SectionStructure>
    );
}

function TeamMemberCard({ name, description, image }: { name: string, description: string, image: string }) {
    return (
        <div onClick={() => {
            console.log("clicked");
        }} className="cursor-pointer h-fit align-middle w-fit flex flex-col justify-center items-center">
            <div className="mb-3">
                <Image className="rounded-full" src={image} alt={name + "'s photo"} width={150} height={100} />
            </div>
            <div className="flex justify-center items-center flex-col">
                <h3 className="pb-1 font-semibold">{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}