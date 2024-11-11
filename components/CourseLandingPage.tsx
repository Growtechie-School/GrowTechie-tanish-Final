import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

type Course = {
  course: {
    title: string
    heading: string
    about: string
    learn: string[] 
    date: string
    duration: string
    price: string
    benefits: string[]
    syllabus: { lesson: string; topic: string }[]
  }[]
}

export default function CourseLandingPage({ course }: Course) {
  console.log(course);
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white ">
      
      {course.map((courseItem) => (
        <div key={courseItem.title} className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-wider text-[#ffffff] mb-2">COURSE</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{courseItem.heading}</h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-12 lg:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-3/5"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">About the Course</h2>
              <p className="text-gray-300 mb-12">{courseItem.about}</p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-6">You will learn:</h3>
              <ul className="space-y-4">
                {courseItem.learn.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="text-[#c6c6c6]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-2/5"
            >
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-2">DATES</p>
                    <p className="text-xl font-semibold text-[#ffffff]">{courseItem.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-2">DURATION</p>
                    <p className="text-xl font-semibold text-[#ffffff] mb-2">{courseItem.duration}</p>
                    <p className="text-sm text-gray-300">Each week 4 hours of live sessions will be held by respective instructor.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-2">PRICE</p>
                    <p className="text-xl font-semibold text-[#ffffff] mb-2">{courseItem.price}</p>
                    <p className="text-sm text-gray-300">Negotiable</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 bg-[#ffffff] text-[#0c0c0c] rounded-xl font-semibold transition-colors hover:bg-[#f4edff]"
                  >
                    Apply For Cohort
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  )
}