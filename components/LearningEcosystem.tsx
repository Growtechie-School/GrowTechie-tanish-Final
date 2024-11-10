"use client"

import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

ChartJS.register(ArcElement, Tooltip, Legend)

const CustomizedLearningExperience = () => {
  const [activeType, setActiveType] = useState<string | null>(null)
  const [hoveredType, setHoveredType] = useState<string | null>(null)

  const learningTypes = [
    { name: 'On-Demand Learning', color: '#C2BB00', percentage: 40, description: 'Offer anytime access to 15+ courses on tech, security, and more' },
    { name: 'Immersive Learning', color: '#ED8B16', percentage: 35, description: 'Provide a deeper learning experience for tech teams through a low-risk, online sandbox environment' },
    { name: 'Cohort Learning', color: '#E1523D', percentage: 25, description: 'Deliver online group-based learning programs for learners' },
  ]

  const chartData = {
    labels: learningTypes.map(type => type.name),
    datasets: [
      {
        data: learningTypes.map(type => 
          activeType === null || activeType === type.name ? type.percentage : 0
        ),
        backgroundColor: learningTypes.map(type => 
          activeType === null || activeType === type.name ? type.color : '#808080'
        ),
        borderColor: learningTypes.map(type => type.color),
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    onHover: (event: any, chartElement: any[]) => {
      if (chartElement.length) {
        const index = chartElement[0].index
        setHoveredType(learningTypes[index].name)
      } else {
        setHoveredType(null)
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  const getActiveDescription = () => {
    const type = learningTypes.find(t => t.name === activeType)
    return type ? type.description : 'Your learning ecosystem'
  }

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4 sm:py-12">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight bg-clip-text text-gray-300 font-space-grotesk mb-8 sm:mb-12">
  A customized learning experience
</h2>
<p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 mt-6 text-center max-w-3xl mx-auto">
  Deliver the right learning experience to the right people in the right format.
  With Growtechie, you've got options for everything.
</p>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <p className="text-center font-bold max-w-[70%] sm:max-w-[60%] lg:max-w-[50%] text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                {hoveredType ? (
                  <>
                    <span className="block">{hoveredType}</span>
                    <span className="block text-xl sm:text-2xl md:text-3xl mt-2">
                      {learningTypes.find(t => t.name === hoveredType)?.percentage}%
                    </span>
                  </>
                ) : (
                  <span className="text-sm sm:text-base lg:text-lg">
                    {getActiveDescription()}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {learningTypes.map((type) => (
              <div 
                key={type.name} 
                className={`flex items-center justify-between cursor-pointer hover:bg-gray-800 p-3 sm:p-4 rounded-lg transition-colors ${activeType === type.name ? 'bg-gray-800' : ''}`}
                onClick={() => setActiveType(activeType === type.name ? null : type.name)}
              >
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 sm:w-6 sm:h-6 mr-3 sm:mr-4 rounded-full"
                    style={{ backgroundColor: type.color }}
                  ></div>
                  <span className="text-sm sm:text-base md:text-lg font-semibold">{type.name}</span>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-bold">{type.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link href="/courses">
            <Button className="bg-transparent border border-white text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black text-xs sm:text-sm md:text-base">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomizedLearningExperience
