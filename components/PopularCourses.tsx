'use client'

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/libs/nav_menus"

export default function Courses() {
  const [displayCount, setDisplayCount] = useState(6)
  const [filter, setFilter] = useState('all')

  const filteredCourses = courses.filter(course => {
    if (filter === 'free') return !course.price
    if (filter === 'paid') return !!course.price
    return true
  })

  const displayedCourses = filteredCourses.slice(0, displayCount)

  const loadMore = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 6, filteredCourses.length))
  }

  return (
    <div className="bg-[#0C0C0C] text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Courses</h1>
        
        <div className="flex justify-between items-center mb-8">
          <div className="space-x-4">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Courses
            </Button>
            <Button 
              variant={filter === 'free' ? 'default' : 'outline'}
              onClick={() => setFilter('free')}
            >
              Free Courses
            </Button>
            <Button 
              variant={filter === 'paid' ? 'default' : 'outline'}
              onClick={() => setFilter('paid')}
            >
              Paid Courses
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map(course => (
            <Card key={course.id} className="bg-white text-[#0C0C0C]">
              <div className="relative">
                <Image
                  src={course.img}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl p-1"
                />
                {course.context && (
                  <Badge className="absolute top-2 left-2 bg-white text-[#0C0C0C]">
                    {course.context}
                  </Badge>
                )}
              </div>
              <CardContent className="pt-4">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600">Duration: {course.duration} Months</p>
                <p className="font-bold ">
                  {course.price ? `₹${course.price}` : 'Free'}
                  {course.negotiable && <span className="text-red-500 text-sm ml-2">{course.negotiable}</span>}
                </p>
               
              </CardContent>
              <CardFooter>
                <Link href={course.url} passHref>
                  <Button className="w-full bg-[#0C0C0C] text-white hover:bg-gray-800">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {displayCount < filteredCourses.length && (
          <div className="text-center mt-8">
            <Button onClick={loadMore} className="bg-white text-[#0C0C0C] hover:bg-gray-200">
              View More Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}