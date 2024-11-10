'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

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
    // projects: { title: string; image: string }[]
  }[]
}

export default function CourseSyllabus({ course }: Course) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {course.map((courseItem) => (
          <div key={courseItem.title} className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Course Syllabus</h2>
              <p className="text-xl text-gray-400">Master these topics and build amazing projects</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">What you'll learn</h3>
                <ul className="space-y-4">
                  {courseItem.syllabus.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <Progress value={60} className="w-16" />
                      <div>
                        <p className="font-semibold">{item.lesson}</p>
                        <p className="text-sm text-gray-400">{item.topic}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Path You Will Follow</h3>
                {/* <div className="grid grid-cols-2 gap-4">
                  {courseItem.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-[#1a1a1a] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                      <p className="p-2 text-center text-sm font-semibold">{project.title}</p>
                    </motion.div>
                  ))}
                </div> */}

                {/* add a new array in nav_menus that what are the projects they will build. */}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <Link href="https://calendly.com/growtechie-ind">
                <button className="inline-block text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                  Book a Free Demo
                </button>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}