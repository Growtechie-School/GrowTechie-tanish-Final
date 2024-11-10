"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const companyLogos = [
  { name: "WALMART", src: "/walmart.svg" },
  { name: "AMAZON", src: "/amazon.svg" },
  { name: "FLIPKART", src: "/flipkart.svg" },
  { name: "GOOGLE", src: "/Google_icon.svg" },
  { name: "SALESFORCE", src: "/Salesforce.svg" },
  { name: "AIRBNB", src: "/airbnb.svg" },
  { name: "OLA", src: "/ola.svg" },
  { name: "MICROSOFT", src: "/microsoft.svg" },
  { name: "IBM", src: "/ibm.svg" },
];

export default function BusinessSolution() {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-gray-300 font-space-grotesk">
              The ideal place for everyone's ideas
            </h2>
            <p className="text-gray-400 mb-8 text-sm">
            Set your team up for success with reimagined learning to empower their personal and professional growth.
            With inspiring classes on soft skills, business essentials, well‑being and more, your whole team will have deep knowledge and expertise at their fingertips.
            </p>
            <div className="space-y-4">
              <Link href="/e-building">
                <Button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                  Discover Growtechie Business
                </Button>
              </Link>
              <div>
                <Link
                  href="/teachers"
                  className="text-green-400 hover:text-white-300 transition-colors duration-300 flex items-center"
                >
                  Hire a mentor for help? Check out Growtechie mentors
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {companyLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center bg-white rounded-lg p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
