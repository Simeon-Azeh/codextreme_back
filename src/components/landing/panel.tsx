import React, { useState } from "react";
import Image from "next/image";
import SectionStructure from "../shared/sectionStructure";

const speakers = [
    {
        name: "Rob Rickard",
        description: "Founder of the RW Build",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1701682567/rob_fcw12o.jpg"
    },
    {
        name: "Jeremiah Chienda",
        description: "Mobile & AI Lead at Irembo",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1701682566/jeremiah_s70lsm.jpg"
    },
    {
        name: "Vicky Akaniwabo",
        description: "Managing Director at Hence",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705673953/vicky_ckpsev.jpg"
    },
    {
        name: "Benson Murimi Wachira",
        description: "Sr DevOps Eng at Irembo",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699606580/codextreme-panel/benson_ytuf9t.jpg",
    },
    {
        name: "Kabiswa Davis",
        description: "Software Engineer at Hence",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1701684559/davis_bsrkyb.jpg"
    },
    {
        name: "Bello Moussa",
        description: "Engineering Manager at Hello Tractor",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699460695/bello_sbtozp.jpg",
    },
    {
        name: "Arun Shanmuganathan",
        description: "Co-Founder at Hence",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705673952/arun_p6g1uf.jpg"
    },
];

const judges = [
    {
        name: "Robert Wekesa",
        description: "ALU Computer Science Faculty",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705745319/robert_yjyjey.jpg",
    },
    {
        name: "Jeremiah Chienda",
        description: "Mobile & AI Lead at Irembo",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1701682566/jeremiah_s70lsm.jpg"
    },
    {
        name: "Mohamed Karsan",
        description: "Student Venture Program at ALU",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705742742/mo-karsan-2_snuk5h.jpg"
    },
    {
        name: "Michelle Uba",
        description: "Program Manager at CcHUB",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705674400/michelle_dfc5ac.jpg"
    },
    {
        name: "Bwiza Charlotte",
        description: "Product Manager at Irembo",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705674400/bwiza_rxhgoj.jpg"
    },
    {
        name: "Chance Iradukunda",
        description: "SE at Africa Blockchain Institute",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705674400/chance_oxi03e.jpg",
    },
    {
        name: "Dr. Geoffrey Andrew",
        description: "Project Manager at CMU Africa",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705674400/geoffrey_i6vqh5.jpg"
    },
    {
        name: "Pacifique Linda",
        description: "Software Engineer at Hence",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705744158/pacifique-linda_oh5ryc.jpg"
    },
];

const mentors = [
    {
        name: "Bello Moussa",
        description: "Engineering Manager at Hello Tractor",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699460695/bello_sbtozp.jpg",
    },
    {
        name: "Fiona Mukuhi",
        description: "Associate SE at FINN",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1699467204/codextreme-panel/fiona_vgknyg.jpg"
    },
    {
        name: "Kabiswa Davis",
        description: "Software Engineer at Hence",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1701684559/davis_bsrkyb.jpg"
    },
    {
        name: "Amandine Karambizi",
        description: "Software Engineer at Hence",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1701684560/karambizi_jjxnoa.jpg"
    },
    {
        name: "Jeremiah Chienda",
        description: "Mobile & AI Lead at Irembo",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1701682566/jeremiah_s70lsm.jpg"
    },
    {
        name: "Chance Iradukunda",
        description: "SE at Africa Blockchain Institute",
        image: "https://res.cloudinary.com/blackhole-inc/image/upload/v1705674400/chance_oxi03e.jpg",
    },
];

export default function Panel() {
    const [showMore, setShowMore] = useState(false);
    const [initialSpeakers, setInitialSpeakers] = useState(speakers.slice(0, 3));
    const [initialJudges, setInitialJudges] = useState(judges.slice(0, 4));
    const [initialMentors, setInitialMentors] = useState(mentors.slice(0, 4));
    return (
        <SectionStructure title="Panel" >
            <p className="mt-5 text-xl">We currently sourcing for speakers, Mentors and Judges. We will display them as we confirm and finalize with them.</p>
            <div className="flex flex-col justify-center items-center">
                <p className="my-10 text-xl font-semibold">Speakers</p>
                <div className="flex flex-row flex-wrap gap-20 justify-center items-center">
                    {speakers.map((speaker, index) => {
                        return <PanelMemberCard key={index} name={speaker.name} image={speaker.image} description={speaker.description} />;
                    })}
                </div>
                <p className="my-10 text-xl font-semibold">Judges</p>
                <div className="flex flex-row flex-wrap gap-20 justify-center items-center">
                    {judges.map((judge, index) => {
                        return <PanelMemberCard key={index} name={judge.name} image={judge.image} description={judge.description} />;
                    })}
                </div>
                <p className="my-10 text-xl font-semibold">Mentors/Coaches</p>
                <div className="flex flex-row flex-wrap gap-20 justify-center items-center">
                    {mentors.map((mentor, index) => {
                        return <PanelMemberCard key={index} name={mentor.name} image={mentor.image} description={mentor.description} />;
                    })}
                </div>
            </div>
            <button className="font-bold underline text-xl text-gray-700" onClick={() => {
                if (showMore) {
                    setInitialSpeakers(speakers.slice(0, 3))
                    setInitialJudges(judges.slice(0, 4))
                    setInitialMentors(mentors.slice(0, 4))
                } else {
                    setInitialSpeakers(speakers);
                    setInitialJudges(judges);
                    setInitialMentors(mentors);
                }
                setShowMore(!showMore);
            }}>{!showMore ? "See more >>" : "See less <<"}
            </button>
        </SectionStructure>
    );
}

function PanelMemberCard({ name, description, image }: { name: string, description: string, image: string }) {
    return (
        <div onClick={() => {
            console.log("clicked");
        }} className="cursor-pointer h-fit align-middle w-fit">
            <div className="mb-3 flex justify-center items-center">
                <Image className="rounded-full" src={image} alt={name} width={150} height={150} />
            </div>
            <div className="flex justify-center items-center flex-col">
                <h3 className="pb-1 font-semibold">{name}</h3>
                <p className="text-center">{description}</p>
            </div>
        </div>
    );
}