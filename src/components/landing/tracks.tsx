import React from "react";
import Image from "next/image";
import SectionStructure from "../shared/sectionStructure";
import ClimateChangeIcon from "@/assets/svgs/climate-change.svg";
import EducationIcon from "@/assets/svgs/education-learning-5-svgrepo-com 1.svg";
import HealthcareIcon from "@/assets/svgs/health-care-accident-svgrepo-com 1.svg";
import CrisisAndDisasterIcon from "@/assets/svgs/flint-spark-svgrepo-com 1.svg";
import ProductionIcon from "@/assets/svgs/production-industrial-automation-svgrepo-com 1.svg";
import LogisticIcon from "@/assets/svgs/logistics 1.svg";
import RecyclingIcon from "@/assets/svgs/recycling-svgrepo-com 1.svg";
import MachineLearningIcon from "@/assets/svgs/ai-file-type-svgrepo-com 1.svg";
import ARVRIcon from "@/assets/svgs/augmented-reality-virtual-reality-svgrepo-com 1.svg";
import BlockchainIcon from "@/assets/svgs/blockchain-digital-future-system-security-svgrepo-com 1.svg";
import FinanceIcon from "@/assets/svgs/free-bull-svgrepo-com 1.svg";
import IndustryIcon from "@/assets/svgs/trade-svgrepo-com 1.svg";
import IoTIcon from "@/assets/svgs/smart-home-svgrepo-com 1.svg";

const tracks = [
    {
        name: "Climate Change",
        image: ClimateChangeIcon,
    }
    ,
    {
        name: "Education",
        image: EducationIcon,
    }
    ,
    {
        name: "Healthcare",
        image: HealthcareIcon,
    }
    ,
    {
        name: "Crisis and Disaster",
        image: CrisisAndDisasterIcon,
    }
    ,
    {
        name: "Production & Consumption",
        image: ProductionIcon,
    },
    {
        name: "Logistics",
        image: LogisticIcon,
    },
    {
        name: "Recycling",
        image: RecyclingIcon,
    },
    {
        name: "ML and AI",
        image: MachineLearningIcon,
    },
    {
        name: "AR/VR",
        image: ARVRIcon,
    },
    {
        name: "Block Chain",
        image: BlockchainIcon,
    },
    {
        name: "Future of Finance",
        image: FinanceIcon,
    },
    {
        name: "Industry & Commerce",
        image: IndustryIcon,
    },
    {
        name: "Internet of Things",
        image: IoTIcon,
    },
];

export default function Tracks() {
    const [initialTracks, setInitialSponsors] = React.useState(tracks.slice(0, 10));
    const [showMore, setShowMore] = React.useState(false);

    return (
        <SectionStructure title="Tracks" isCentered={true} >
            <p className="mt-5 text-xl">
                Our event lets you loose and allows you to work on what you find meaningful and interesting--there are no boxes here. You can work on any type of solution in line with but not limited to the current <strong>&ldquo;Global Challenges&rdquo;</strong> and <strong>&ldquo;Emerging Technologies&rdquo;</strong>.
            </p>
            <div className="flex flex-row flex-wrap gap-20 max-xl:gap-10 justify-center items-center mt-10">
                {initialTracks.map((track, index) => {
                    return <TrackCard key={index} name={track.name} image={track.image} />;
                })}
            </div>
            <button className="font-bold underline text-xl text-gray-700" onClick={() => {
                showMore ? setInitialSponsors(tracks.slice(0, 10)) :
                    setInitialSponsors(tracks);
                setShowMore(!showMore);
            }}>{!showMore ? "See more >>" : "See less <<"}</button>
        </SectionStructure>
    );
}


export function TrackCard({ image, name }: { image: string, name: string }) {
    return (
        <div className=" flex flex-col justify-center items-center">
            <div onClick={() => {
                window.open("https://www.google.com", "_blank");
            }} className="cursor-pointer h-fit align-middle w-fit border border-gray-300 rounded-3xl p-3">
                <Image className="rounded-md" src={image} alt={name + "'s photo"} width={100} height={50} />
            </div>
            <p className="py-3 text-center">{name}</p>
        </div>
    );
}
