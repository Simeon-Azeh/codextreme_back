import React from "react";
import PageLayout from "@/components/shared/pageLayout";
import Head from "@/components/head";
import Link from "next/link";
import Image from "next/image";

const Merchandise = [
    { "name": "!Light Unisex [White]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704714918/Screenshot_from_2024-01-08_13-54-57_ckafxp.png" },
    { "name": "!Light Unisex [Black]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704715268/Screenshot_from_2024-01-08_13-57-39_phkt11.png" },
    { "name": "Main Event Unisex [White]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704715268/Screenshot_from_2024-01-08_13-58-04_e6yuym.png" },
    { "name": "Main Event Unisex [Black]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704715269/Screenshot_from_2024-01-08_13-57-51_ldlqmj.png" },
    { "name": "You're Pure Magic Unisex [Black]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704715269/Screenshot_from_2024-01-08_13-58-44_dosguh.png" },
    { "name": "You're Pure Magic Unisex [White]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704715267/Screenshot_from_2024-01-08_13-58-56_sobmal.png" },
    { "name": "Do Epic Sh*t Unisex [White]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704715268/Screenshot_from_2024-01-08_13-58-14_aebq5j.png" },
    { "name": "Innovate Or Die Unisex [Black]", "image": "https://res.cloudinary.com/blackhole-inc/image/upload/v1704715268/Screenshot_from_2024-01-08_13-58-25_spigk0.png" },
];

export default function Merch() {
    return (
        <>
            <Head title="CodeXtreme | About Us" description="You buy and wear this T-shirt because you are pro-innovation, creativity, resilience, and change. You love Tech and all the NERDS in it." />
            <PageLayout>
                <main
                    className={`m-auto min-h-screen w-full px-4 font-space-mono md:w-[80%] max-xl:w-[90%] md:p-0 text-gray-700 bg-gradient-to-b`}
                >
                    <div className="my-5">
                        <p className="text-base my-1">Thee T-shirts wer designed and produced to support the CODEXTREME HACKATHON Launch Event in January 2024.</p>
                        <p className="text-base my-1">You buy and wear one because you are pro-innovation, creativity, resilience, and change. You love Tech and all the NERDS in it.</p>
                    </div>
                    <div className="flex justify-center flex-wrap">
                        {Merchandise.map((merch, index) => {
                            return (
                                <div key={index}>
                                    <Image className="m-1" width={300} height={300} src={merch['image']} alt={merch['name']} />
                                    <p className="text-center py-3 underline">{merch['name']}</p>
                                </div>);
                        })}
                    </div>
                    <h1 className="text-2xl mt-10 mb-5">How to place your order</h1>
                    <ol className="list-decimal ml-10">
                        <li>If you are outside of Kigali check: <Link className="underline" href="https://shop-codextreme.infinitloop.io">https://shop-codextreme.infinitloop.io</Link></li>
                        <li>If you are in Kigali fill this form: <Link className="underline" href="https://dr0krcbe81m.typeform.com/to/J60YyWM4">https://dr0krcbe81m.typeform.com/to/J60YyWM4</Link></li>
                    </ol>
                </main>
            </PageLayout>
        </>
    );
}