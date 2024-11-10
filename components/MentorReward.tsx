import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Heart, Users, Network, Lightbulb } from 'lucide-react'

const rewards = [
  { icon: <DollarSign className="w-6 h-6 text-red-700" />, text: "Additional Source of Income" },
  { icon: <Heart className="w-6 h-6 text-red-700" />, text: "Gratitude and Recognition" },
  { icon: <Users className="w-6 h-6 text-red-700" />, text: "Shape Future Leaders" },
  { icon: <Network className="w-6 h-6 text-red-700" />, text: "Expand your Network" },
  { icon: <Lightbulb className="w-6 h-6 text-red-700" />, text: "Amplify your knowledge & insights" },
]

export default function MentorRewards() {
  return (
    <div className="min-h-screen w-full bg-black-900 text-white font-space-grotesk p-8 flex items-center mt-12">
  <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start">
    
    {/* Left Section: Heading and Paragraph */}
    <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Discover the Boundless Rewards as a Mentor
      </h1>
      <p className="text-xl text-gray-400 mb-6">
        Mentoring not only fulfills by shaping lives but also hones your communication and leadership skills, offering fresh perspectives that enrich your own journey.
      </p>
    </div>

    {/* Right Section: Rewards Cards */}
    <div className="lg:w-1/2 w-full space-y-4">
      {rewards.map((reward, index) => (
        <Card key={index} className="bg-gray-800 border border-gray-700">
          <CardContent className="flex items-center p-4">
            {reward.icon}
            <span className="ml-4 text-lg">{reward.text}</span>
          </CardContent>
        </Card>
      ))}
    </div>

  </div>
</div>

  )
}