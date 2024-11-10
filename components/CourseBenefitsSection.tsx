'use client'

import React from "react"
import { motion } from "framer-motion"
import { Check, TrendingUp } from "lucide-react"

type Course = {
  course: {
    title: string
    about: string
    learn: string[]
    date: string
    duration: string
    price: string
    benefits: string[]
    syllabus: { lesson: string; topic: string }[]
  }[]
}

export default function CourseBenefitsSection({ course }: Course) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {course.map((courseItem) => (
          <div key={courseItem.title} className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Course Benefits</h2>
              <p className="text-xl text-gray-400">Unlock your potential with these powerful advantages</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courseItem.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white text-[#0c0c0c] flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Benefit {index + 1}</h3>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#1a1a1a] rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Your Progress After the Course</h3>
              <div className="space-y-6">
                {['Industry Knowledge', 'Problem Solving', 'Coding Skills', 'Career Opportunities'].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill}</span>
                      <span className="text-gray-400">+{(index + 1) * 25}%</span>
                    </div>
                    <div className="w-full bg-[#2a2a2a] rounded-full h-2.5">
                      <motion.div
                        className="bg-white h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(index + 1) * 25}%` }}
                        transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center"
            >
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Accelerate Your Career Growth</h3>
              <p className="text-gray-400">
                Join our course and experience a significant boost in your professional development.
                Our comprehensive curriculum and hands-on approach will help you stay ahead in the
                fast-paced tech industry.
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}