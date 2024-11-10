'use client'

import React, { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

const faqItems = [
  {
    question: "Are all courses 100% online?",
    answer: "Yes, this course is completely online, so there's no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device.",
  },
  {
    question: "What is your refund policy?",
    answer: "If you registered, you get a 1-week free trial during which you can cancel at no penalty. After that, we don't give refunds, but you can cancel your subscription at any time.",
  },
  {
    question: "Can I enroll or hire multiple courses or tutors?",
    answer: "Yes, you can hire or enroll in multiple courses. But managing time will be yours as there might be collision of live sessions as experts might be different.",
  },
  {
    question: "Who are the tutors or mentors here?",
    answer: "All tutors and mentors of Growtechie are subject matter experts & industry experts who have experience in the skill, tool or domain of their project and are passionate about sharing their knowledge to impact millions of learners around the world.",
  },
  {
    question: "Are all classes live or will recordings be available?",
    answer: "All sessions will be live. We want our students to be serious about learning & executing products/projects during learning time only.",
  },
  {
    question: "What if I miss a call?",
    answer: "Mail us so that we can book another class or assign you with another group for that particular missed class.",
  },
  {
    question: "How can I pay the course fee?",
    answer: "Pay the course fee via payment transfer methods such as credit/debit card.",
  },
]

export default function ContactUs() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/sendMessage/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message')
      }

      toast({
        title: "Thanks for reaching out to Growtechie",
        description: "Your message has been sent successfully!",
      })

      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <Toaster />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">FAQ & Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-gray-300 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>
            <div className="grid gap-6 mb-8">
              <Card className="bg-white text-[#0C0C0C]">
                <CardContent className="flex items-center p-4">
                  <Phone className="h-5 w-5 mr-4 text-[#0C0C0C]" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-600">+91-7978939845</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white text-[#0C0C0C]">
                <CardContent className="flex items-center p-4">
                  <Mail className="h-5 w-5 mr-4 text-[#0C0C0C]" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-600">info@growtechie.in</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white text-[#0C0C0C]">
                <CardContent className="flex items-center p-4">
                  <MapPin className="h-5 w-5 mr-4 text-[#0C0C0C]" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-gray-600">DRDO Township, CV Raman Nagar, Near KV School, Bengaluru, 560093</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="bg-white text-[#0C0C0C] border-gray-300 placeholder-gray-500" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="bg-white text-[#0C0C0C] border-gray-300 placeholder-gray-500" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Textarea 
                name="message"
                placeholder="Your Message" 
                className="bg-white text-[#0C0C0C] border-gray-300 placeholder-gray-500" 
                rows={5} 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-white text-[#0C0C0C] hover:bg-gray-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}