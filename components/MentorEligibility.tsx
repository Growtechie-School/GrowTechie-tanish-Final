import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Presentation, BookOpen } from 'lucide-react'

const criteria = [
  {
    icon: <Laptop className="w-12 h-12 mb-4" />,
    description: "Ability to simplify complex concepts and explain them well."
  },
  {
    icon: <Presentation className="w-12 h-12 mb-4" />,
    description: "Passionate about creating impact via education."
  },
  {
    icon: <BookOpen className="w-12 h-12 mb-4" />,
    description: "Have great knowledge and expertise in your niche"
  }
]

export default function EligibilityCriteria() {
  return (
    <div className= "bg-black text-white font-space-grotesk p-8 mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Eligibility Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="flex flex-col items-center text-center p-6">
                {criterion.icon}
                <p className="text-lg">{criterion.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}