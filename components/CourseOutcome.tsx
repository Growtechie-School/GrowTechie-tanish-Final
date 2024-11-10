"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CourseraOutcomes() {
  return (
    <div className="bg-black text-white py-8 sm:py-16 overflow-hidden">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
          {/* Images Section */}
          <div className="relative w-full">
            {/* Main Image */}
            <div className="relative z-20 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/Working_collegues.jpg"
                alt="People collaborating at a computer"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative background circles */}
            <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 opacity-20 rounded-full filter blur-xl z-10 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500 opacity-20 rounded-full filter blur-xl z-10 translate-x-1/4 translate-y-1/4"></div>
            
            {/* Left Smaller Image */}
            <div className="absolute top-1/4 -left-2 sm:left-2 w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-28 rounded-lg overflow-hidden shadow-lg z-10 hidden sm:block">
              <Image
                src="/StudentStudying.jpg"
                alt="Student studying"
                width={160}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-gray-300 font-space-grotesk">
              Learner outcomes on Growtechie
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              <span className="font-semibold text-xl sm:text-2xl text-white font-space-grotesk">
                77% of learners report career benefits
              </span>
              , such as new skills, increased pay, SaaS founders, and new job
              opportunities.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              2024 Growtechie Learner Outcomes Report Coming Soon
            </p>
            <div>
              <Link href="/courses">
                <Button className="w-full sm:w-auto bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                  Join for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}