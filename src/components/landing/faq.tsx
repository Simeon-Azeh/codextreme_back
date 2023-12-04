import React from "react";
import SectionStructure from "@/components/shared/sectionStructure";

export default function Faq() {
  const data = [
    {
      question: "What is a hackathon?",
      answer: (
        <Answer isFirst={true}>
          <p className="mb-2 text-gray-500">
            A hackathon is an invention marathon. Students come together to
            build cool software & hardware hacks over 24-48 hours [We are extending to 72 hours]. It&apos;s{" "}
            <a
              href="https://medium.com/tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              very beginner friendly
            </a>
          </p>
        </Answer>
      ),
    },
    {
      question: "Why CodeXtreme?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Please read our story on our <a href="/about" className="text-blue-600 hover:underline">About Page</a>
          </p>
        </Answer>
      ),
    },
    {
      question: "What CodeXtreme Hackathon is [and isn't].",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            CodeXtreme is not a just a competition. It is a learning experience. It is a place where you can meet new people, learn new things, and build cool stuff.
            It is a place for you to experiment and try new technologies. It is a place for you to challenge yourself and push yourself to become a better developer.
            It is a place for you to have fun. It is a place for you to be you.<br /><br /> This is not a startup pitch. It is not a place for you to be judged. It is not a place for you to be afraid of failure.
          </p>
        </Answer>
      ),
    },
    {
      question: "How much does it cost?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Nothing. Attending the hackathon is free.
          </p>
        </Answer>
      ),
    },
    {
      question: "Do I need to be a student to attend?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Yes. For this year&apos;s event only students who are currently
            enrolled in school/university/grad school/boot camp or have graduated within
            the past 12 months from a university or a boot camp are eligible to
            attend. Professionals can join us as mentors, coaches and speakers.
          </p>
        </Answer>
      ),
    },
    {
      question: "I don't have an idea and/or team. Can I still attend?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Yes. You will have time to find a team and idea to work on during the first day of the hackathon. Adequate support will be provided.
          </p>
        </Answer>
      ),
    },
    {
      question: "I don't know how to code. Can I still attend?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Yes. We design our experience and setup environments for people you to thrive. Joing us to LEARN, BUILD and SHARE regardless of your skill level and formal background.
          </p>
        </Answer>
      ),
    },
    {
      question: "Where and when is the event?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            The hackathon is happening in-person in Kigali, Rwanda at the African Leadership University.
            The event will run in-person from Wednesday January 24th through Saturday January 27th 2024.
          </p>
        </Answer>
      ),
    },
    {
      question: "Is there a code of conduct?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Yes there is. We enforce it very strongly. You can{" "}
            <a
              href="https://docs.google.com/document/d/1BZpkVIujCwb86WPuMrXEJqIFjWvmcNMzJ-L_5wOVorw/edit?usp=sharing"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              find it here
            </a>{" "}
          </p>
        </Answer>
      ),
    },
    {
      question: "What is the theme for the Hackathon?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            There are no boxes at CodeXtreme. People can work on any type of solution in line with but not limited to the following <strong>{"'"}Challenges{"'"}</strong> and <strong>{"'"}Emerging Technologies{"'"}</strong><br /><br />
          </p>
          <ul className="list-disc ml-10 indent-3 text-gray-500">
            <li>Climate Change</li>
            <li>Education</li>
            <li>Health Care</li>
            <li>Crisis & Disasters</li>
            <li>Responsible Production & Consumption</li>
            <li>Logistics</li>
            <li>Disposal & Recycling</li>
            <li>Machine Learning and AI</li>
            <li>AR/VR</li>
            <li>Block Chain</li>
            <li>Future of Finance</li>
            <li>Industry & Commerce</li>
            <li>Internet of Things</li>
          </ul>
        </Answer>
      ),
    },
    {
      question: "Can hackers stay overnight?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Yes. There is an option to stay up/sleep over at the venue for those who want. Please note that we are not providing any ssleeping bags or linens.
          </p>
        </Answer>
      ),
    },
    {
      question: "What should I carry with me to the event?",
      answer: (
        <Answer>
          <p className="mb-2 text-gray-500">
            Carry your laptop, chargers. Sleeping bag and a change [Only if you plan on sleeping over]. We will provide you with food, drinks, and snacks.
          </p>
        </Answer>
      ),
    },
    {
      question: "When should I check back for more?",
      answer: (
        <Answer isLast={true}>
          <p className="mb-2 text-gray-500">
            We will send you an email when teams registrations are opened. Updates will also be posted on our discord channel and social media as they come in.
          </p>
        </Answer>
      ),
    },
  ];
  return (
    <SectionStructure title="FAQs" >
      <div className="mt-10">
        {data.map((fqObj, i) => (
          <QuestionAnswer
            key={i}
            {...fqObj}
            isFirst={i === 0}
            isLast={i === data.length - 1}
          />
        ))}
      </div>
    </ SectionStructure >
  );
}

function QuestionAnswer({
  isFirst = false,
  isLast = false,
  question,
  answer,
  height = "h-auto",
}: {
  isFirst?: boolean;
  isLast?: boolean;
  question: string;
  answer: React.ReactNode;
  height?: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col">
      <h2 onClick={() => setOpen(!open)}>
        <button
          type="button"
          className={`flex w-full items-center justify-between border border-gray-200 p-5 text-left font-medium text-gray-500 transition-all duration-300 ease-in hover:bg-gray-100 ${isFirst && "rounded-t-xl border-b-0"
            } ${isLast && !open && "rounded-b-xl border-b-[1px]"}`}
        >
          <span className="flex items-center">
            <svg
              className="mr-2 h-5 w-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            {question}
          </span>
          <svg
            data-accordion-icon
            className="h-3 w-3 shrink-0 rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`${open ? height : "h-0"
          } overflow-hidden transition-all duration-300 ease-in`}
      >
        {answer}
      </div>
    </div>
  );
}

function Answer({
  children,
  isFirst = false,
  isLast = false,
}: {
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className={`h-full border border-gray-200 p-5 overflow-scroll ${isFirst && "border-b-0"
        } ${isLast && "border-b-[1px] rounded-b-xl"}`}
    >
      {children}
    </div>
  );
}
