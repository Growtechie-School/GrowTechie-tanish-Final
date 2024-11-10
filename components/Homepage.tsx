import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  MessageCircle,
  Puzzle,
  User,
  DollarSign,
  Clock,
  HelpCircle,
} from "lucide-react";
// import { FlipWordsDemo } from "@/components/FlipWordsDemo";
import person1 from "@/public/Picture1.jpg";
import person2 from "@/public/Picture2.jpg";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import CourseCatalog from "./CourseCatalog";
import CourseBenefitsSection from "./CourseBenefitsSection";
import { MarqueeDemo } from "./MarqueeDemo";
import SkillsCarousel from "./ExploreCourses";
import CourseLandingPage from "./CourseLandingPage";

export default function HomePage() {
  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen font-[var(--font-space-grotesk)]">
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <FlipWordsDemo />

              <div className="text-center md:text-left">
                <p className="text-xl text-gray-400 my-10">
                  Learn from expert professionals & join the largest online
                  community for creative projects/products building.
                </p>
                <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-3">
                  <a href="/courses">Explore More</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <SafariDemo />
            </div>
          </div>
        </div>
      </section> */}
      {/* Statistics */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-light">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SkillsCarousel/>
      {/* popular courses */}

      <section className="bg-[#1c1c1c]">
        <div className="text-center py-20 ">
          <h2>Start Attending</h2>
          <h1 className="text-5xl font-semibold">Popular Webinars</h1>
        </div>
        <div>
          <CourseCatalog />
        </div>
      </section>

      {/* students testimonials */}

      <section>
        <div>
          <MarqueeDemo />
        </div>
      </section>
      {/* Course Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <HoverEffect key={index}>
                <Card className="bg-[#1c1c1c] border-0">
                  <CardContent className="p-6 space-y-4">
                    <center>
                      <Image
                        src={course.icon}
                        alt={course.title}
                        width={64}
                        height={64}
                        className="m-5"
                      />
                    </center>

                    <h3 className="text-xl font-light">{course.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {course.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-[#2c2c2c] text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </HoverEffect>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-white text-black hover:bg-gray-200 text-sm px-8 py-3">
            <a href="/courses">Explore More</a>
          </Button>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">
            Work-Experience Based Learning Approach
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-sm">
            Learn and grow like you would on a real job. Start from the
            fundamentals, get support from our mentors and community, and build
            your way to the top - through professional work-like Full-stack and
            Backend web development projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <HoverEffect key={index}>
                <Card className="bg-[#1c1c1c] border-0">
                  <CardContent className="p-6 space-y-4">
                    <feature.icon className="w-8 h-8 text-white" />
                    <h3 className="text-lg font-light">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </HoverEffect>
            ))}
          </div>
        </div>
      </section>

      {/* Discord Community */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-light mb-6">
                Join Our Thriving Discord Community!
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Learn new skills, collaborate with fellow coders, and get access
                to our exclusive resources and tools to take your coding skills
                to the next level.
              </p>
              <Button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                <Link href="https://discord.com/channels/1015348978755313764/1290424078594871386">
                  Join Us On Discord
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Image
                src={person1}
                alt="Community 1"
                width={250}
                height={250}
                className="rounded-lg"
              />
              <Image
                src={person2}
                alt="Community 2"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Advancement */}
    </div>
  );
}

const courses = [
  {
    icon: "/frontend_1.png",
    title: "Work like Frontend Developers at AirBnB",
    description: "Build a highly responsive frontend for a travel app.",
    skills: ["HTML", "CSS", "Bootstrap", "React JS"],
  },
  {
    icon: "/computer-engineer.png",
    title: "Work like an Engineer at Zerodha or at Grow",
    description:
      "Build a tool to analyze an investment portfolio and help users.",
    skills: ["OOP", "JSON", "Gradle", "Rest API"],
  },
  {
    icon: "/senior.png",
    title: "Work like a senior developer at Flipkart",
    description: "Experience working on a live distributed system in AWS.",
    skills: ["Microservices", "Kafka", "Scaling", "Cloud"],
  },
];

const stats = [
  { value: "100+", label: "Instructors" },
  { value: "10K", label: "Students" },
  { value: "900hrs+", label: "Live Sessions" },
  { value: "20+", label: "Companies" },
  { value: "8LPA", label: "Average Salary" },
  { value: "24*7", label: "Query Helps" },
];

const features = [
  {
    icon: User,
    title: "Exclusive Guest Sessions",
    description:
      "From basic problem-solving to complex tech stuff, you'll get a solid understanding.",
  },
  {
    icon: MessageCircle,
    title: "No Tech Jargon, Just Results",
    description:
      "From basic problem-solving to complex tech stuff, you'll get a solid understanding.",
  },
  {
    icon: Puzzle,
    title: "Real Skills for Real Jobs",
    description:
      "From basic problem-solving to complex tech stuff, you'll get a solid understanding.",
  },
];
