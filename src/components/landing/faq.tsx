import React from "react";

export default function Faq() {
  const data = [
    {
      question: "What is a hackathon?",
      answer: (
        <Answer isFirst isLast={false}>
          <p className="mb-2 text-gray-500">
            A hackathon is an invention marathon. Students come together to
            build cool software & hardware hacks over 24-48 hours. It&apos;s{" "}
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
      height: "h-24",
    },
    {
      question: "Why CodeXtreme?",
      answer: (
        <Answer isFirst={false} isLast={false}>
          <p className="mb-2 text-gray-500">
            Talent is everywhere, but opportunity isn&apos;t. An issue that has
            been apparent to our team over the years is that young people early
            in their engineering journey or aspiring engineers lack the platform
            and support to fully unleash their potential and solve pressing
            problems in their communities with tech. They lack the support of a
            community of like-minded individuals that would push them beyond
            their limits and put in check their reality of what is possible with
            the power of modern technology. Due to this, a significant amount of
            talent goes untapped and dies young, never getting the chance to
            emerge.
          </p>
          <p className="mb-2 text-gray-500">
            After much consideration, we decided to bring to the community of
            developers something of value, a trailblazing event that they would
            look forward to every year and get together with like-minded people
            to solve problems, network with peers and companies, win prizes, and
            change lives with their tech solutions. We call it CodeXtreme, a
            one-week hackathon that brings together student developers, junior
            developers, mentors, speakers, sponsors, and tech experts to learn
            about tech, build unique products, and share their experiences with
            the rest of the world.
          </p>
        </Answer>
      ),
      height: "h-48",
    },
    {
      question: "How much does it cost?",
      answer: (
        <Answer isFirst={false} isLast={false}>
          <p className="mb-2 text-gray-500">
            Nothing. Attending a hackathon is free.
          </p>
        </Answer>
      ),
      height: "h-24",
    },
    {
      question: "Do I need to be a student to attend?",
      answer: (
        <Answer isFirst={false} isLast={false}>
          <p className="mb-2 text-gray-500">
            Yes. For this year&apos;s event only students who are currently
            enrolled in school/university/grad school or have graduated within
            the past 12 months from university or boot camps are eligible to
            attend. Professionals can join us as mentors and coaches.
          </p>
        </Answer>
      ),
      height: "h-24",
    },
    {
      question: "Where and when is the event?",
      answer: (
        <Answer isFirst={false} isLast={false}>
          <p className="mb-2 text-gray-500">
            This will be communicated once the venue is confirmed. Register your
            interest for us to follow up with more information later. However
            one thing is certain, the hackathon is in-person.
          </p>
        </Answer>
      ),
      height: "h-24",
    },
    {
      question: "Is there a code of conduct?",
      answer: (
        <Answer isFirst={false} isLast={false}>
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
      height: "h-24",
    },
    {
      question: "When should I check back for more?",
      answer: (
        <Answer isFirst={false} isLast={true}>
          <p className="mb-2 text-gray-500">
            We will send you an email when registrations are opened and our main
            website is live.
          </p>
        </Answer>
      ),
      height: "h-24",
    },
  ];
  return (
    <section className="my-6 flex px-8 max-sm:px-0 flex-col gap-6">
      <h2 className="text-center text-5xl font-semibold text-gray-700">FAQs</h2>
      <div className="">
        {data.map((fqObj, i) => (
          <OneFaq
            key={i}
            {...fqObj}
            isFirst={i === 0}
            isLast={i === data.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function OneFaq({
  isFirst,
  isLast,
  question,
  answer,
  height,
}: {
  isFirst: boolean;
  isLast: boolean;
  question: string;
  answer: React.ReactNode;
  height: string;
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
  isFirst,
  isLast,
}: {
  children: React.ReactNode;
  isFirst: boolean;
  isLast: boolean;
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
