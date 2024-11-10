import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Users, UserCheck, Link } from 'lucide-react'

const roles = [
  {
    title: "Educator",
    icon: <Monitor className="w-8 h-8 text-red-700" />,
    responsibilities: [
      "Teach learners online in an engaging manner.",
      "Design and develop new courses/curricula as needed.",
      "Keep yourself updated with the latest trends so that courses reflect current practices.",
      "Encourage students to be active learners and participate in online sessions."
    ]
  },
  {
    title: "Educator Associate",
    icon: <Users className="w-8 h-8 text-red-700" />,
    responsibilities: [
      "Solve learner's doubts using various communication channels.",
      "Help learners understand the learning process.",
      "Gather feedback from learners and pass it on to the educator.",
      "Discuss course progress with the learners and understand their requirements."
    ]
  },
  {
    title: "Mentors",
    icon: <UserCheck className="w-8 h-8 text-red-700" />,
    responsibilities: [
      "Conduct assessments to evaluate an individual's skills, strengths, and goals.",
      "Provide personalized guidance and advice on career options, and job opportunities.",
      "Collaborate to create actionable career plans, set goals, and develop strategies for growth.",
      "Offer ongoing support through counselling sessions and skill development."
    ]
  }
]

export default function ContributionRoles() {
  return (
    <div className="min-h-screen bg-black text-white font-space-grotesk p-8 mt-28 ">
      <h1 className="text-4xl font-bold text-center mb-12">You can contribute as</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {roles.map((role, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800 flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  {role.icon}
                  {role.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {role.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            {/* <CardFooter className="mt-auto flex justify-end">
            <a href="/register">
              <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 sm:w-auto">
                Apply Now
              </Button>
            </a>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  )
}
