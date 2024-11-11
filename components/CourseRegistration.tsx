'use client'

import React, { useState } from "react"
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
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

type Course = {
  course: {
    title: string
    about: string
    learn: string[]
    date: string
    duration: string
    price: string
    benefits: string[]
    syllabus: { lesson: string; topic: string; }[]
  }[]
}

export default function CourseRegistration({
  course
}: Course) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    courseTitle: course[0]?.title || '',
    courseDate: course[0]?.date || '',
    courseDuration: course[0]?.duration || '',
    coursePrice: course[0]?.price || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.phoneNumber) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/[- ]/g, ''))) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/registerMail/register-form-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit registration');
      }

      toast({
        title: "You're Registered!",
        description: `Thank you for registering for ${formData.courseTitle}! We've sent you an email with further details.`
      });

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        courseTitle: course[0]?.title || '',
        courseDate: course[0]?.date || '',
        courseDuration: course[0]?.duration || '',
        coursePrice: course[0]?.price || ''
      });
    } catch (error) {
      console.error('Error submitting registration:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
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
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">{course[0]?.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="bg-[#1a1a1a] border-gray-700 text-white"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#1a1a1a] border-gray-700 text-white"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber">Phone</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-[#1a1a1a] border-gray-700 text-white"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-white text-[#0c0c0c] hover:bg-gray-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : `Register for ${course[0]?.title}`}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Course Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Course Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About the Course</h3>
              <p className="text-gray-300">{course[0]?.about}</p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
              <ul className="list-disc pl-5 space-y-2">
                {course[0]?.learn.map((item, index) => (
                  <li key={index} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Course Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                {course[0]?.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-300">{benefit}</li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-[#1a1a1a] rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Course Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Start Date:</span> {course[0]?.date}</p>
                  <p><span className="font-medium">Duration:</span> {course[0]?.duration}</p>
                  <p><span className="font-medium">Price:</span> {course[0]?.price}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
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
      <Toaster />
    </div>
  );
}