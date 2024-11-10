"use client"
import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Component() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState('All')

  const mentors = [
    {
      name: "Ramakrushna Mohapatra",
      role: "Quality Assurance Engineer II",
      company: "Amazon",
      location: "Karnataka, India",
      experience: "7+ Yr",
      sessions: "2x Sessions Per Week",
      price: "₹10,000",
      rating: 5.0,
      reviews: 330,
      skills: ["API Testing with Postman", "Software Testing", "Out of box thinking in designing Testcases", "JAVA", "Agile"],
      image: "/Ram.png"
    },
    // Add more mentor objects here...
  ]

  const skillOptions = ["All", "Frontend", "Backend", "Fullstack", "DevOps / SRE / Cloud", "Data Scientist / AI/ML", "Data Analyst"]

  const filteredMentors = mentors.filter(mentor => 
    selectedSkill === 'All' || mentor.skills.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-black p-8 font-sans text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for any Skill, domain or name..."
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-gray-800 text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price">Lowest Price</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-4">
          {skillOptions.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                variant={selectedSkill === skill ? "default" : "secondary"}
                className={`px-3 py-1 text-sm cursor-pointer ${
                  selectedSkill === skill 
                    ? "bg-white text-black" 
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMentors.map((mentor, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:border-primary bg-gray-800 text-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <img src={mentor.image} alt={mentor.name} className="w-16 h-16 rounded-full" />
                <div>
                  <CardTitle>
                    <Link href={`/profile/${mentor.name.toLowerCase().replace(' ', '-')}`} className="hover:underline">
                      {mentor.name}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-gray-400">{mentor.location}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{mentor.role}</p>
                <p className="text-sm text-gray-400">{mentor.company}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span>{mentor.rating.toFixed(1)}</span>
                  <span className="text-gray-400">({mentor.reviews}+ reviews)</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {mentor.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs text-white border-gray-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">{mentor.price}</p>
                  <p className="text-sm text-gray-400">Per Month</p>
                </div>
                <div className="space-x-2">
                  <Link href="/book-trial">
                    <motion.button
                      className="bg-[#333] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Trial
                    </motion.button>
                  </Link>
                  <Link href={`/profile/${mentor.name.toLowerCase().replace(' ', '-')}`}>
                    <motion.button
                      className="bg-[#333] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Profile
                    </motion.button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}