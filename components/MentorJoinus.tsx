import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    title: "Fill out the form",
    description: "Begin your journey by simply applying with an online form.",
    // button: "Apply here"
  },
  {
    number: 2,
    title: "Shortlisting",
    description: "We will go through your profile to shortlist the deserving candidates."
  },
  {
    number: 3,
    title: "Interview Round",
    description: "After shortlisting, the interview will be conducted for the evaluation."
  },
  {
    number: 4,
    title: "Start Mentoring",
    description: "As soon as you clear the interview, you can join us and begin mentorship with the learners."
  }
]

export default function JoinUsSteps() {
  return (
<div className="bg-black text-white font-space-grotesk p-8 mt-24 justify-center">
      <h1 className="text-4xl font-bold text-center mb-12">How you can join us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-4xl font-bold text-red-700">{step.number}</span>
                <span className="text-xl">{step.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400">{step.description}</p>
            </CardContent>
            {/* {step.button && (
              <CardFooter>
                <Button className="w-full bg-white hover:bg-gray-400 text-black">
                  {step.button}
                </Button>
              </CardFooter>
            )} */}
          </Card>
        ))}
      </div>
    </div>
  )
}