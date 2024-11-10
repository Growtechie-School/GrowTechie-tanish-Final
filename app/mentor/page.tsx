"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingPlanProps {
  title: string;
  price: string;
  annualPrice?: string;
  originalPrice?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  discount?: string;
  badge?: string;
  highlighted?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  annualPrice,
  originalPrice,
  features,
  ctaText,
  ctaLink,
  discount,
  badge,
  highlighted = false,
}) => (
  <Card
    className={`relative h-full flex flex-col justify-between rounded-xl border border-gray-800 overflow-hidden transition-transform transform hover:scale-105 ${
      highlighted ? 'bg-[#111111]' : 'bg-[#0F0F0F]'
    }`}
  >
    {badge && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1F2937] text-white text-xs font-medium px-4 py-1 rounded-b-lg">
        {badge}
      </div>
    )}
    {discount && (
      <div className="absolute top-4 right-4 bg-emerald-400/10 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
        {discount} OFF
      </div>
    )}
    <CardHeader className="pt-8 pb-4">
      <h3 className="text-xl font-medium text-white mb-2 font-space-grotesk">{title}</h3>
      <div className="space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white font-space-grotesk">₹{price}</span>
          <span className="text-sm text-gray-400">/month</span>
        </div>
        {annualPrice && originalPrice && (
          <div className="text-sm text-gray-400">
            billed annually ₹{annualPrice}{" "}
            <span className="line-through text-gray-600">₹{originalPrice}</span>
          </div>
        )}
      </div>
    </CardHeader>
    <CardContent className="flex-grow pb-6">
      <div className="text-sm text-gray-400 mb-4">
        {highlighted ? 'Everything in Standard, plus' : 'Plan includes'}
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="pb-8">
      <Button
        asChild
        className={`w-full py-6 text-base font-medium rounded-lg ${
          highlighted
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
            : 'bg-white hover:bg-gray-100 text-gray-900'
        }`}
      >
        <a href={ctaLink}>{ctaText}</a>
      </Button>
      {/* <div className="mt-4 text-center">
        <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
          Gift a Subscription
        </a>
      </div> */}
    </CardFooter>
  </Card>
);

export default function PricingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  const pricingPlans: PricingPlanProps[] = [
    {
      title: "Standard",
      price: "2,000",
      annualPrice: "24,000",
      originalPrice: "48,000",
      discount: "50%",
      features: [
        "Idea Validations",
        "Technical helps",
        "Weekly Problem Solve",
        "24*7 mail services",
        "Product Launching"
      ],
      ctaText: "Get Started",
      ctaLink: "https://calendly.com/growtechie-ind",
    },
    {
      title: "Premium",
      price: "3,000",
      annualPrice: "36,000",
      originalPrice: "72,000",
      discount: "50%",
      badge: "MOST POPULAR",
      features: [
        "Idea Validations",
        "Technical helps",
        "Weekly Problem Solve",
        "Call Once in 3 Days",
        "24*7 mail services",
        "Product Launching",
        "Priority support",
      ],
      ctaText: "Get Started",
      ctaLink: "https://calendly.com/growtechie-ind",
      highlighted: true,
    },
    {
      title: "Pro",
      price: "4,000",
      annualPrice: "48,000",
      originalPrice: "96,000",
      discount: "50%",
      badge: "BEST FOR LEARNING",
      features: [
        "All Premium features",
        "Dedicated Mentor",
        "Call Once In 2 Days",
        "SLA Guarantees",
        "Partnerships",
        "Marketing Help"
      ],
      ctaText: "Get Started",
      ctaLink: "https://calendly.com/growtechie-ind",
    },
  ];

  return (
    <div className="bg-[#0C0C0C] font-space-grotesk py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-3xl text-center mx-auto space-y-5 mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Book a mentor of your choice. Book a FREE demo now!
          </h1>
          <p className="text-lg text-gray-400">
            The mentors and industry experts will receive these funds. They will assist you if you register to build a product under our guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100}>
              <PricingPlan {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}