'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CourseRegistration() {
  const faqItems = [
    {
      question: "Can I learn the front end in 2 months?",
      answer: "While it's possible to gain a basic understanding in 2 months, mastering front-end development typically takes longer. Focus on core technologies like HTML, CSS, and JavaScript to build a strong foundation."
    },
    {
      question: "What course should I do for a front-end developer?",
      answer: "Our comprehensive front-end development course covers HTML, CSS, JavaScript, React, and responsive design principles. It's ideal for beginners and those looking to upgrade their skills."
    },
    {
      question: "What's the best way to learn front end web development?",
      answer: "The best approach combines structured learning with hands-on practice. Our course offers both theoretical knowledge and practical projects to ensure you gain real-world experience."
    },
    {
      question: "Can I learn front end web development in 3 months?",
      answer: "Three months is a reasonable timeframe to gain a solid foundation in front-end development. With dedication and consistent practice, you can become proficient in core technologies and start building basic websites."
    },
    {
      question: "What is the salary of a front-end developer in India?",
      answer: "Salaries for front-end developers in India vary based on experience and location. Entry-level developers can expect around ₹3-5 lakhs per annum, while experienced professionals can earn ₹10-20 lakhs or more."
    }
  ]

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <Image
              src="/illustration.png"
              alt="Course Illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-2">LIMITED TIME OFFER</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Register now and get 20% off!</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" className="bg-[#1a1a1a] border-gray-700 text-white" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="bg-[#1a1a1a] border-gray-700 text-white" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" className="bg-[#1a1a1a] border-gray-700 text-white" />
              </div>
              <Button className="w-full bg-white text-[#0c0c0c] hover:bg-gray-200">
                Register Now
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}