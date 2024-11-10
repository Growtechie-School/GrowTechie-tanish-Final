import React from 'react'

interface Pillar {
    pillar: {
        heading: string;
        subHeading: string;
        context: string;
    }
}
export default function PillarCard({pillar} : Pillar) {
  return (
    <div className="w-5/6 flex justify-center items-center bg-[linear-gradient(103.4deg,#04071D_16.66%,#0C0E23_81.61%)] md:w-1/3 h-[50vh] md:h-[65vh] lg:h-[70vh] rounded-2xl border border-slate-400/10">
    <div className="group flex flex-col justify-center items-center text-center px-10 space-y-3">
      <p className="text-[#CBACF9] text-[12px] md:text[18px] lg:text-[30px] font-semibold rounded-xl bg-gradient-to-r from-slate-500/20 to-slate-900/20 px-4 py-2 border border-slate-400/10 ">
      {pillar.heading}
      </p>
      <div className="hidden group-hover:block">
        <h1 className="text-[20px] md:text-[27x] lg:text-[30px] font-bold">
            {pillar.subHeading}
        </h1>
        <p className="text-[14px] lg:text-[16px]">
          {pillar.context}
        </p>
      </div>
    </div>
  </div>
  )
}
