'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  {
    name: "Ramakrushna Mohapatra",
    role: "Founder",
    photo: "/Ram.png",
    specialization: "Data Scientists, Cloud Architecture & Webdev",
    background: "10+ years in tech, Ex-Amazon, Startup Mentor",
    twitter: "https://x.com/techwith_ram",
    linkedin: "https://www.linkedin.com/in/ramakrushnamohapatra",
    github: "https://github.com/Ramakm"
  },
  {
    name: "Volkan Bozkurt",
    role: "Product Designer",
    photo: "/Volkan.jpg",
    specialization: "Frontend Developer, Blockchain, Web3",
    background: "Ethereum Core Developer, DeFi Expert",
    twitter: "https://x.com/volkan0x",
    linkedin: "https://linkedin.com/in/volfcan/",
    github: "https://github.com/volkan0x"
  },
  {
    name: "Roopesh Vetcha",
    role: "Web Developer",
    photo: "/Roopesh.png",
    specialization: "Product Management, Growth Strategies",
    background: "Serial Entrepreneur, EdTech Innovator",
    twitter: "https://twitter.com/roopeshvetcha",
    linkedin: "https://www.linkedin.com/in/vetcharoopesh",
    github: "https://github.com/roopeshvetcha"
  },
  {
    name: "Selva Kumar",
    role: "Web Developer",
    photo: "/selva.png",
    specialization: "Frontend Development, UI/UX Design",
    background: "5+ years in web development, Open Source Contributor",
    twitter: "https://x.com/SelvaKumar68449",
    linkedin: "https://www.linkedin.com/in/selva-kumar-338222147/",
    github: "https://github.com/selvakumar"
  },
  {
    name: "Tanish Lande",
    role: "Full-Stack Developer",
    photo: "/tanish.png",
    specialization: "Full-Stack Development, UI/UX Design, Backend Development",
    background: "Proficient in developing user-centered applications with a strong foundation in spanning web and mobile platforms.",
    twitter: "https://x.com/tanish_lande",
    linkedin: "https://www.linkedin.com/in/tanish-lande-903606312/",
    github: "https://github.com/TanishLande"
  }
]

export default function AboutUs() {
  return (
    <div className="bg-[#09090b] text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">About Growtechie</Badge>
          <h1 className="text-4xl font-bold mb-6">Empowering the Next Generation of Tech Leaders</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to democratize tech education, breaking down barriers and closing the knowledge gap. Our expert-led platform equips aspiring technologists with cutting-edge skills, regardless of their background.
          </p>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#0c0c0c] border-gray-800">
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full "
                    />
                    <div>
                      <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2"><strong>Specialization:</strong> {member.specialization}</p>
                    <p className="text-sm mb-4"><strong>Background:</strong> {member.background}</p>
                    <div className="flex space-x-3">
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Tech Community</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Connect with industry experts, collaborate on real-world projects, and accelerate your tech career. Our community is the perfect place to network, learn, and grow.
          </p>
          <Link href="https://discord.com/channels/1015348978755313764/1290424078594871386" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#09090b] hover:bg-gray-200 transition-colors">
              Join Our Discord <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}