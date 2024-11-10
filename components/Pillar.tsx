'use client'

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Lightbulb, Users, BookOpen } from "lucide-react"

const pillar_data = [
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Strategy",
    description: "Identify the best opportunity for success, plan your path and validate the profitability of your idea",
    percentage: 85,
    keyPoints: [
      "Access to latest tech trends",
      "Mentorship from industry innovators",
      "Innovation challenges and hackathons"
    ]
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Product Design",
    description: "Create the tangible product that provides the best and most appealing user experience for the most economical cost",
    percentage: 90,
    keyPoints: [
      "Cross-functional team projects",
      "Industry networking events",
      "Collaborative coding sessions"
    ]
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Brand Design",
    description: "Create a brand that helps you stand out from competitors by connecting with the values and emotions of your target customer",
    percentage: 95,
    keyPoints: [
      "Real-world project assignments",
      "Industry-partnered internships",
      "Continuous feedback and improvement"
    ]
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Launching & Marketing",
    description: "Launch your product and take our expert help in marketing and other product growing related stuff. Hurry up!",
    percentage: 95,
    keyPoints: [
      "Real-world project assignments",
      "Industry-partnered internships",
      "Continuous feedback and improvement"
    ]
  }
]

export default function Pillar() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our Core Principles
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Empowering the next generation of tech innovators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillar_data.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#0c0c0c] border-2 border-gray-600 hover:border-white rounded-lg overflow-hidden transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white bg-opacity-10 p-3 rounded-full">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 mb-4">{pillar.description}</p>
                  <div className="h-40 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { value: pillar.percentage },
                            { value: 100 - pillar.percentage }
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          fill="#ffffff"
                          dataKey="value"
                        >
                          <Cell fill="#ffffff" />
                          <Cell fill="#0c0c0c" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-center text-2xl font-bold mb-4">{pillar.percentage}%</p>
                  <ul className="space-y-2">
                    {pillar.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
