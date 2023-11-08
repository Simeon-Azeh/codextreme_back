import React, { useState } from "react";
import SectionStructure from "../shared/sectionStructure";

const days = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
];

const schedules = [
    [
        "Buses Arrive [9:00 AM]",
        "Welcome and check-in attendees [9:00 AM]",
        "Serve Breakfast [10:00 AM]",
        "Opening Ceremony [11:00 AM]",
        "Keynote Speaker [11:30 AM]",
        "Hack Begins | Team Formation and Ideation/Brainstorming Session with Mentors/Coaches [12:00 PM]",
        "Lunch [1:30 PM]",
        "Hack Resumes [2:30 PM]",
        "It's a Wrap [7:00 PM]",
        "Buses leave for people leaving. [7:30 PM]",
        "Coffee and Snacks [8:30 PM]",
        "Hack resumes [9:00 PM]"
    ],
    [
        "Check-In [9:00 AM]",
        "Breakfast [9:30 AM]",
        "Hack Begins [10:00 AM]",
        "Lunch [1:00 PM] - [2:20 PM]",
        "Cup Stacking Game [2:20 PM] - [3:00 PM]",
        "1st Workshop Session [3:00 PM][45 minutes][15 minutes Q&A]",
        "Hack Resumes [4:00 PM]",
        "Closing Address [7:00 PM]",
        "Buses leave for people leaving. [7:30 PM]",
        "Coffee and Snacks [8:30 PM]",
        "Hack Resumes [9:00 PM]",
    ],
    [
        "Check-In [9:00 AM]",
        "Breakfast [9:30 AM]",
        "Hack Begins [10:00 AM]",
        "Lunch [1:00 PM]",
        "!Light Game [2:20 PM] - [3:00 PM]",
        "2nd Workshop Session [3:00 PM][45 minutes][15 minutes Q&A]",
        "Hack Resumes [4:00 PM]",
        "Closing Address [7:00 PM]",
        "Buses leave for people leaving. [7:30 PM]",
        "Coffee and Snacks [8:30 PM]",
        "Hack Resumes [9:00 PM]",
    ],
    [
        "Check-In [9:00 AM]",
        "Breakfast [9:30 AM]",
        "Submission Opens [10:00 AM]",
        "Career Fair Time [10:30 AM][2:30 hours]",
        "Project Submission Closes [12:00 PM]",
        "Lunch [1:00 PM]",
        "Speaker Session [2:30 PM]",
        "Judging Begins [3:30 PM]",
        "Presentation of Top 6 Projects [5:30 PM][30 minutes]",
        "Judging Ends [6:00 PM]",
        "Prizes Announcement + Photobooth [6:30 PM]",
        "Closing Ceremony [7:00 PM][30 minutes]",
        "Buses Leave [7:30 PM]",
    ],
];

export default function OfficialSchedule() {
    const [currentDay, setCurrentDay] = useState(0);

    return (
        <SectionStructure title="Official Event Schedule" id="schedule" >
            <div className="flex flex-row flex-wrap items-center ml-10 mt-10">
                {days.map((day, index) => {
                    return <button key={index} className={`text-xl py-4 mr-5 mt-5 font-bold px-10 border border-gray-300 rounded-2xl ${currentDay === index ? "bg-[#f1f1f1]" : "bg-white"}`} onClick={() => setCurrentDay(index)}>{day}</button>;
                })}
            </div>
            <ul className="list-disc ml-10">
                {schedules[currentDay].map((schedule, index) => {
                    return <li key={index} className="text-xl py-3">{schedule}</li>
                })}
            </ul>
        </SectionStructure>
    );
}