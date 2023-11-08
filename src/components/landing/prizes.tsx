import React from "react";
import Image from "next/image";
import SectionStructure from "@/components/shared/sectionStructure";
import MedalIcon from "@/assets/svgs/prize-medal.svg";

export default function Prizes() {
    return (
        <SectionStructure title="Prizes & Perks" >
            <p className="mt-5 text-xl">We will reveal more details on prizes and other perks as we confirm and finalize them. There are lots of Swaggs and Goodies.</p>
            <div className="flex flex-col justify-center items-center my-10">
                <Image className="rounded-md" src={MedalIcon} alt="Medal Icon" width={400} height={100} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-9xl max-xl:text-6xl font-bold text-[#6f6f6f]">5000+ USD</h2>
                <p className="text-5xl max-xl:text-3xl my-3">Worth of Prizes</p>
            </div>
        </SectionStructure>
    );
}