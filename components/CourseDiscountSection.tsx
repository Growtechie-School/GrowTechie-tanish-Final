import React from "react";

export default function CourseDiscountSection() {
  return (
    <div data-aos="fade-left" className="mt-20 border border-slate-400/20 rounded-md p-6 my-[10%] md:w-[80%] md:mx-auto xl:w-[70%] 2xl:w-[60%]">
      <div className="space-y-5">
        <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row xl:justify-between">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            20% discount for early birds!
          </h1>
          <div className="flex space-x-4">
            <div className="text-center">
              <p className="font-bold text-[20px]">06</p>
              <span className="text-[12px]">Days</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-[20px]">18</p>
              <span className="text-[12px]">Hours</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-[20px]">25</p>
              <span className="text-[12px]">Mins</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-[20px]">12</p>
              <span className="text-[12px]">Sec</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row xl:space-x-10">
          <div className="flex flex-col space-y-2">
            <label>Full name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="outline-none rounded-[4px] px-2 py-2 placeholder:px-2 w-full text-slate-800"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none rounded-[4px] px-2 py-2 placeholder:px-2 w-full text-slate-800"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Phone</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="outline-none rounded-[4px] px-2 py-2 placeholder:px-2 w-full text-slate-800"
            />
          </div>

          <div className="text-center border rounded-xl border-slate-400/10 bg-slate-900 xl:bg-transparent xl:border-none">
            <button className="xl:border xl:border-slate-400/10 xl:hover:bg-slate-700/50 xl:rounded-xl xl:mt-7 inline-block text-transparent bg-clip-text text-[18px] font-semibold bg-[linear-gradient(90deg,#5C1CB2_0%,#999999_100%)] px-4 py-2">
              Join the course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
