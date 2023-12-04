import PageLayout from "@/components/shared/pageLayout";
import React from "react";
import Head from "@/components/head";

export default function AboutUs() {
    return (
        <>
            <Head title="CodeXtreme | About Us" description="Promote technological innovation, contribution, and adoption by empowering underserved groups in tech" />
            <PageLayout>
                <main
                    className={`m-auto min-h-screen w-full px-4 font-space-mono md:w-[80%] max-xl:w-[90%] md:p-0 text-gray-700 bg-gradient-to-b`}
                >
                    <h1 className="my-10 text-left text-5xl font-semibold text-gray-700">About Us</h1>
                    <div>
                        Talent is everywhere, but opportunity isn&apos;t. An issue that has been apparent over the years is that young people early in their engineering journey and aspiring engineers experience a shortage of platforms and support to fully unleash their potential and solve pressing problems in their communities with tech. This issue is even more apparent in underrepresented groups and low-communities. There is a lack of a strong community of like-minded individuals who would push talents beyond their limits and put in check their reality of what is possible with the power of modern technology.
                        <br /><br />
                        Due to these issues and many more, a significant amount of tech talent goes untapped and dies young, never getting the chance to emerge.
                        <br /><br />
                        We are bringing to the community of developers and tech enthusiasts something of value, a trailblazing event that they would look forward to every year and get together with like-minded people to solve problems, network with peers and companies, win prizes, change lives, and impact communities with their tech solutions. <strong>CodeXtreme Hackathon</strong> is a <strong>4-day event</strong> that brings together <strong>200+ student developers</strong>, junior developers, mentors, speakers, sponsors, and tech experts from across Africa to learn about tech, build unique products, and share their experiences with the rest of the world, nicely wrapping up the event with a full-day <strong>Networking and Career Fair events</strong> to help bridge the gap between talent and opportunities.
                        <br /><br />
                        CodeXtreme is a product of InfinitLoop, a non-profit organization with a mission to bring people from underrepresented groups and low-income communities into tech.
                        CodeXtreme seeks to <strong>promote technological innovation, contribution, and adoption by empowering people from underserved groups and low-income communities to pursue careers in tech and solve pressing problems in their communities.</strong>
                        It is never too late to bring new voices into tech, fresh values to drive the next industrial revolution and build tech that works better for all.
                        <br /><br />
                        Incredible talent can be found everywhere, even in the least expected places, as evidenced by our organizers&apos; journeys, it just needs a platform and community to thrive. In that same spirit, we are dedicating our time and launching our activities with CodeXtreme to give the people the opportunities we wish we had.
                    </div>
                    <h1 className="my-10 text-left text-5xl font-semibold text-gray-700" id="why-sponsor">Why Sponsor?</h1>
                    <h2 className="text-left text-2xl font-semibold text-gray-700 my-4">General Attendance</h2>
                    <p>We target over 200 hackers from across Africa for an in-person epic event in Kigali, Rwanda, for 4 days straight [3 Days Hacking and Learning, 1 Day Networking + Career Fair ]</p>
                    <h2 className="text-left text-2xl font-semibold text-gray-700 my-4">Talent Pool</h2>
                    <p>Our hackers are student developers from top universities and boot camps across the region. We are talking about the African Leadership University, Carnegie Mellon University, ALX, Andela, AUCA, UK, UR, UNILAK, Akhila Institute, AIMS, Mount Kenya, and more.
                        The majority of our audience is majoring in Computer Science or related fields and are either early in their journey, about to graduate, or pursuing a master&apos;s degree, the target for both internships and entry-level jobs.
                    </p>
                    <h2 className="text-left text-2xl font-semibold text-gray-700 my-4">Promotion | Brand Awareness</h2>
                    <p>Sponsoring CodeXtreme has many benefits outlined in this document and our sponsorship package perks. Attending CodeXtreme, giving sponsored prizes, mentoring students, giving out your company&apos;s swag, and more will help create a new perception of your company and brand in the minds of students and hackers. It is an easy, effective, and convenient way to promote your products and company.
                    </p>
                    <h2 className="text-left text-2xl font-semibold text-gray-700 my-4">Recruiting</h2>
                    <p>We give you direct access to our database of resumes before and after the event for you to shortlist candidates. During the event, you get to interact with hackers 1:1 from your stand or online in your channel on our discord server.
                        We target and attract the brightest minds across Africa and give you a helping hand in transforming them into your potential future employees.
                    </p>
                    <h2 className="text-left text-2xl font-semibold text-gray-700 my-4">New Technology</h2>
                    <p>Is there a new technology, API, product, or service your company has just released? Look no further. A Hackathon, even more so CodeXtreme, is the right place to demo and present your best work to the right audience.
                        You could also incentivize students to pursue and use technologies driving future industries by creating a challenge and giving out sponsored prizes. More power to your brand and company!
                    </p>
                    <h2 className="text-left text-2xl font-semibold text-gray-700 my-4">Early Startup Ideas</h2>
                    <p>It is usually at hackathon events that the next innovations are made, and the next great products are engineered. Startup incubators and accelerators will find this a valuable investment of their time and resources. Bring your team to our Career Fair and our Science Fair Solution Demo and Networking session, where hackers will demonstrate their technological wizardry to the rest of the participants, judges, and honorable guests.</p>
                </main>
            </PageLayout >
        </>
    );
}