"use client";

import { useState } from "react";

type AccordionProps = {
  question: string;
  answer: React.ReactNode;
};

const Accordion = ({ question, answer }: AccordionProps) => {
  const [arrow, setArrow] = useState(false);
  
  return (
    <div className="max-w-[800px] mx-auto my-[10%] lg:my-[3%] " onClick={() => setArrow(!arrow)}>
      <div className="flex justify-between border-b pb-4 transform transition-all duration-300 delay-150 text-white">
        <h2>{question}</h2>
        {!arrow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        )}
      </div>
      <div className={`${!arrow ? "hidden" : ""} mt-5 text-white`}>
        <p>{answer}</p> 
      </div>
    </div>
  );
};

export default Accordion;
