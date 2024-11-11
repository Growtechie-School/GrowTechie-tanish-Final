'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award } from "lucide-react"

export default function CourseCertification() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-6 mb-12 lg:mb-0"
          >
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-[#4a4a4a]" />
              <h2 className="text-2xl font-bold">Growtechie Certificate</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              Earn Your Certificate of Completion
            </h3>
            <p className="text-gray-400">
              While we prioritize knowledge over certification, you'll receive a participant certificate upon successful completion of the course. This certificate, though not accredited, serves as a testament to your dedication and newly acquired skills.
            </p>
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-white text-[#0c0c0c] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                Learn More About Certification
              </button>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent rounded-lg transform -rotate-3"></div>
              <Image
                src="/Certificate.jpg"
                alt="Certification Illustration"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}