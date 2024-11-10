'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Code, UserCheck, Award } from 'lucide-react'

export default function CourseLearningSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const steps = document.querySelectorAll('.learning-step')
      
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect()
        if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
          setActiveStep(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const learningSteps = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Online Live Sessions', description: 'Industries Experts will take all these live sessions every week. Instructor will be same for the whole course.' },
    { icon: <Code className="w-6 h-6" />, title: 'Projects Building', description: 'Live project building as well as the course is designed in such a way, You will learn theory in building projects. '},
    { icon: <UserCheck className="w-6 h-6" />, title: 'Interview & Coding Preps', description: 'There will be 1 or 2 sessions dedicated to your coding prep and Interviews preparations.' },
    { icon: <Award className="w-6 h-6" />, title: 'Passing Test', description: 'Final test for 2 hours. Each student needs to complete the exam and pass the test. We will give you a passing certification.' },
  ]

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-gray-400 mb-2">MAIN STEPS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Online Learning Process</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="sticky top-8 space-y-4">
              {learningSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center p-4 rounded-lg transition-colors ${
                    activeStep === index ? 'bg-[#1a1a1a]' : ''
                  }`}
                >
                  <div className={`mr-4 p-2 rounded-full ${activeStep === index ? 'bg-white text-[#0c0c0c]' : 'bg-[#2a2a2a]'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <p className={`text-sm ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>
                      Step {index + 1}
                    </p>
                    <p className="font-medium">{step.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12 space-y-24">
            {learningSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="learning-step"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold text-white mr-4">0{index + 1}</div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}