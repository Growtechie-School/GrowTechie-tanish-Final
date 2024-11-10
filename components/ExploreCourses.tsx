// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { PlayIcon, PauseIcon } from "lucide-react";

// const categories = [
//   { name: "Data Analytics", image: "/DataAnalyticsCover.jpg", link: "/courses/data-analytics" },
//   { name: "UI/UX Design", image: "/UIUXCover.jpg", link: "/courses/ui-ux-design" },
//   { name: "Data Science", image: "/DataScienceCover.jpg", link: "/courses/data_science" },
//   { name: "Programming", image: "/ProgrammingCover.jpg", link: "/courses/python_fundamentals" },
//   { name: "Cyber Security", image: "/CyberSecurityCover.jpg", link: "/courses/cyber_security" },
//   { name: "React", image: "/ReactCover.jpg", link: "/courses/react_fundamentals" },
//   { name: "SQL Masterclass", image: "/SQLCover.jpg", link: "/courses/sql" },
//   { name: "AI Engineering", image: "/AIEngineeringCover.jpg", link: "/courses/ai_engineering" },
// ];

// export default function SkillsCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(nextSlide, 3000);
//     } else if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [isPlaying]);

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="bg-black min-h-screen flex flex-col justify-center items-center py-12 px-4">
//       <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-gray-300 font-space-grotesk mb-12">
//         Explore Our Skill Categories
//       </h1>
//       <div className="relative w-full max-w-7xl overflow-hidden rounded-lg shadow-lg">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 20}%)` }}
//         >
//           {[...categories, ...categories.slice(0, 5)].map((category, index) => (
//             <Link key={index} href={category.link} passHref className="w-1/5 flex-shrink-0 relative group">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={1200}
//                 height={800}
//                 className="w-full h-[60vh] object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex justify-center items-center">
//                 <h2 className="text-white text-2xl font-bold">{category.name}</h2>
//               </div>
//             </Link>
//           ))}
//         </div>
//         <Button
//           onClick={togglePlayPause}
//           className="absolute bottom-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2"
//         >
//           {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
//         </Button>
//       </div>
//       <div className="mt-8 text-center">
//         <p className="text-gray-300 mb-4">
//           Discover a wide range of skills and boost your career with our expert-led courses.
//         </p>
//         <div>
//           <Link href="/courses" passHref>
//             <Button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
//               Explore All Courses
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlayIcon, PauseIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useSwipeable } from "react-swipeable"

const categories = [
  { name: "Data Analytics", image: "/DataAnalyticsCover.jpg", link: "/courses/data-analytics" },
  { name: "UI/UX Design", image: "/UIUXCover.jpg", link: "/courses/ui-ux-design" },
  { name: "Data Science", image: "/DataScienceCover.jpg", link: "/courses/data_science" },
  { name: "Programming", image: "/ProgrammingCover.jpg", link: "/courses/python_fundamentals" },
  { name: "Cyber Security", image: "/CyberSecurityCover.jpg", link: "/courses/cyber_security" },
  { name: "React", image: "/ReactCover.jpg", link: "/courses/react_fundamentals" },
  { name: "SQL Masterclass", image: "/SQLCover.jpg", link: "/courses/sql" },
  { name: "AI Engineering", image: "/AIEngineeringCover.jpg", link: "/courses/ai_engineering" },
]

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length)
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, 3000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-gray-300 font-space-grotesk mb-8 md:mb-12 text-center">
        Explore Our Skill Categories
      </h1>
      <div className="relative w-full max-w-7xl overflow-hidden rounded-lg shadow-lg" {...handlers}>
        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="relative">
            <Image
              src={categories[currentIndex].image}
              alt={categories[currentIndex].name}
              width={1200}
              height={800}
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
              <h2 className="text-white text-2xl font-bold text-center px-4">{categories[currentIndex].name}</h2>
            </div>
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Button onClick={prevSlide} className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2">
              <ChevronLeftIcon className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <Button onClick={nextSlide} className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2">
              <ChevronRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {[...categories, ...categories.slice(0, 5)].map((category, index) => (
              <Link key={index} href={category.link} passHref className="w-1/5 flex-shrink-0 relative group">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={1200}
                  height={800}
                  className="w-full h-[60vh] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex justify-center items-center">
                  <h2 className="text-white text-2xl font-bold text-center px-4">{category.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2"
        >
          {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
        </Button>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-300 mb-4 px-4">
          Discover a wide range of skills and boost your career with our expert-led courses.
        </p>
        <div>
          <Link href="/courses" passHref>
            <Button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
              Explore All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
