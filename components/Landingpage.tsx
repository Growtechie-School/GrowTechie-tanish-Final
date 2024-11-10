"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const conferenceData = [
  {
    id: 1,
    title: "Be a founder: Build a product",
    description: "Connect with industry leaders and innovators",
    color: "#C2BB00",
    link: "/e-building"
  },
  {
    id: 2,
    title: "Be a Lerner: Learn & grow in tech",
    description: "Explore cutting-edge technologies to learn",
    color: "#ED8B16",
    link: "/courses"
  },
  {
    id: 3,
    title: "Hire a Mentor: Guide yourself by a mentor",
    description: "Discover best industry experts around the world",
    color: "#E1523D",
    link: "/teachers"
  }
]

export default function DigitalFrontiersLanding() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 font-space-grotesk">
      <div className="max-w-7xl mx-auto">
        <main className="flex flex-col lg:flex-row justify-between items-start">
          {/* Left side: Title, Description, Button */}
          <motion.div
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Let's Change Tech <br />For Good.
            </h1>
            <p className="text-xl sm:text-2xl mb-6 leading-relaxed">
              Explore the diverse learning & mentorships options <br className="hidden sm:inline" />we have
              for you to learn & build products<br className="hidden sm:inline" /> for yourself.
            </p>
            <p className="text-xl mb-10"
              style={{
                color: hoveredCard
                  ? conferenceData.find(c => c.id === hoveredCard)?.color
                  : '#fff',
              }}>
              Learning . Mentorships . Product Building
            </p>
            <Link href="/courses">
              <motion.button
                className="bg-[#333] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore us more
              </motion.button>
            </Link>
          </motion.div>

          {/* Desktop cards (lg screens) */}
          <div className="hidden lg:block lg:w-1/2 space-y-4 lg:mt-16">
            {conferenceData.map((conference, index) => (
              <Link href={conference.link} key={conference.id}>
                <motion.div
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                    hoveredCard !== null && hoveredCard !== conference.id
                      ? 'opacity-50'
                      : 'opacity-100'
                  }`}
                  style={{
                    backgroundColor: conference.color,
                    width: '550px',
                    height: '200px',
                    marginLeft: `${index * 2}rem`,
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredCard(conference.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h2 className="text-xl font-bold mb-2 text-white">{conference.title}</h2>
                  <p className="text-white mb-4">{conference.description}</p>
                  <p className="text-white font-semibold">
                    ENTER <strong className="text-2xl">→</strong>
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Tablet and Mobile cards */}
          <div className="w-full lg:hidden space-y-4 mt-8">
            {conferenceData.map((conference, index) => (
              <Link href={conference.link} key={conference.id}>
                <motion.div
                  className="p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out w-full mb-2 "
                  style={{
                    backgroundColor: conference.color,
                    minHeight: '160px',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h2 className="text-lg font-bold mb-2 text-white">{conference.title}</h2>
                  <p className="text-sm text-white mb-2">{conference.description}</p>
                  <p className="text-white font-semibold text-sm">
                    ENTER <strong className="text-xl">→</strong>
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}