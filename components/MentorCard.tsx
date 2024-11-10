'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Rocket, Brain } from "lucide-react"

const colors = ['#9C27B0', '#E91E63', '#FF5722']

const mentorshipData = [
  { icon: <Users className="w-5 h-5" />, label: "50+ Project/Products", description: "Successfully launched and mentored" },
  { icon: <CheckCircle className="w-5 h-5" />, label: "100% Success Rate", description: "In project completion and deployment" },
  { icon: <Rocket className="w-5 h-5" />, label: "20+ SaaS", description: "Incubated and supported" },
  { icon: <Brain className="w-5 h-5" />, label: "500+ Hours", description: "Of one-on-one mentorship provided" }
]

export default function MentorCard() {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
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
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Badge variant="outline" className="text-sm font-semibold">
              Mentorship Program
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Accelerate Your Tech Career with Expert Guidance
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Our mentorship program offers personalized support, technical expertise, and invaluable industry insights to help you launch your projects and accelerate your career in tech.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {mentorshipData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black bg-opacity-50 border-gray-800">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                      <div className="bg-white bg-opacity-10 p-2 rounded-full">
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold">{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/mentor">
                <Button className="bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                  Book a Mentor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/mentor" className="text-white hover:text-gray-300 transition-colors duration-300">
                Learn more about pricing of the program
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}