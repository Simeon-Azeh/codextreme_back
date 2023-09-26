import React from "react";
import Image from "next/image";
import SectionStructure from "@/components/shared/sectionStructure";

const teamMembers = [
    {
        name: "Cedric Murairi",
        description: "Lead Organizer",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Marion Maina",
        description: "Operations",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Cedric Murairi",
        description: "Lead Organizer",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Marion Maina",
        description: "Operations",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Cedric Murairi",
        description: "Lead Organizer",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Marion Maina",
        description: "Operations",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Cedric Murairi",
        description: "Lead Organizer",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Marion Maina",
        description: "Operations",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Cedric Murairi",
        description: "Lead Organizer",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
    {
        name: "Marion Maina",
        description: "Operations",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
    },
];

export default function Team() {
    const [initialTeamMembers, setInitialTeamMembers] = React.useState(teamMembers.slice(0, 4));
    const [showMore, setShowMore] = React.useState(false);
    return (
        <SectionStructure title="The Team" isCentered={true} >
            <div className="flex flex-wrap gap-20 justify-center items-center">
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
        }} className="cursor-pointer h-fit align-middle w-fit">
            <div className="mb-3">
                <Image className="rounded-full" src={image} alt={name + "'s photo"} width={150} height={150} />
            </div>
            <div className="flex justify-center items-center flex-col">
                <h3 className="pb-1">{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}