"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'lucide-react'

const colors = ['#C2BB00', '#ED8B16', '#E1523D']

export default function E_Hero() {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden font-space-grotesk bg-black">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ 
          backgroundColor: colors[colorIndex],
          y: [0, -20, 0],
        }}
        transition={{ 
          backgroundColor: { duration: 1 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
      >
        <svg 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-auto"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 96L60 106.7C120 117 240 139 360 133.3C480 128 600 96 720 96C840 96 960 128 1080 138.7C1200 149 1320 139 1380 133.3L1440 128V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V96Z"
            fill="currentColor"
            animate={{
              d: [
                "M0 96L60 106.7C120 117 240 139 360 133.3C480 128 600 96 720 96C840 96 960 128 1080 138.7C1200 149 1320 139 1380 133.3L1440 128V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V96Z",
                "M0 160L60 170.7C120 181 240 203 360 197.3C480 192 600 160 720 160C840 160 960 192 1080 202.7C1200 213 1320 203 1380 197.3L1440 192V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V160Z",
                "M0 96L60 106.7C120 117 240 139 360 133.3C480 128 600 96 720 96C840 96 960 128 1080 138.7C1200 149 1320 139 1380 133.3L1440 128V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V96Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 max-w-4xl">
          We Specialize in Turning New Ideas and Innovations into Viable Products.
        </h1>
        <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl">
          Do you have an idea for a product but you're unsure how to get it verified, start and ready for market? Growtechie is best place for you.
          We helps people with great ideas turn them into commercially viable products through great mentorships & solid technologies. An ideal path to market.
          Build & work for your own product.
          </p>
          <a href="https://calendly.com/growtechie-ind" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-gray-800 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
             Book Free Demo Session
            </button>
          </a>
      </div>
    </div>
  )
}