import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import BusinessSolution from '@/components/CourseBusinessSkills';
import CustomizedLearningExperience from '@/components/LearningEcosystem';

const testimonials = [
  { 
    name: 'Rohit', 
    post: 'Data Scientists', 
    text: "Highly recommend GrowTechie's Data Analyst course! Live classes with knowledgeable instructors created an interactive environment. Emphasis on projects for practical application, personalized attention, and support made the learning journey enjoyable and productive. Kudos to Mr. Ramakrushna and the team!",
    img: "/Rohit.png" 
  },
  { 
    name: 'Amit Yadav', 
    post: 'MBA Student', 
    text: "GrowTechie's Python training exceeded expectations with a practical, project-oriented approach. Expert instructors made complex concepts engaging. Hands-on learning through real-world projects boosted confidence. Comprehensive curriculum covered basics and advanced topics. Highly recommend!",
    img: "/Amit.jpg" 
  },
  { 
    name: 'Madhura Bijawe', 
    post: 'Developer, Student', 
    text: 'I took a PowerBI course and then expanded my learning to SQL and Python with Growtechie. I appreciated that Growtechie didnt ask for money, allowed negotiation, and didnt make false promises about job placement. I found the prices reasonable. Thanks for the learning experience.',
    img: "/Madhura.jpg" 
  },
  { 
    name: 'Nikita Bhole', 
    post: 'Designer, Student', 
    text: "Initially hesitant due to the absence of a website, I found Growtechie on LinkedIn. Impressed by a demo class with Ramakrushna, despite occasional scolding, I appreciated his teaching style. Growtechie's commitment to affordable courses without false promises made it my ideal learning space.",
    img: "/Nikita.jpg" 
  },
  { 
    name: 'Puja Samal', 
    post: 'Data Analyst, DataPros', 
    text: "Highly recommend GrowTechie's SQL and Power BI training! Exceeded expectations with a focus on real-world applications and project-based learning. Solid foundation in SQL for data manipulation, and standout Power BI section for expert guidance in creating actionable dashboards. Well-crafted for today's data-centric environment.",
    img: "/Puja.jpg" 
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#0c0c0c] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="bg-[#1c1c1c] w-96 flex-shrink-0 mx-4">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Image 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      width={64} 
                      height={64} 
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400 mb-2">{testimonial.post}</div>
                    </div>
                  </div>
                  <p className="text-white text-sm">{testimonial.text}</p>
                </CardContent>
              </Card>
              
            ))}
          </div>
        </div>
      </div>
      <CustomizedLearningExperience/>
      <BusinessSolution/>
    </div>
  )
}