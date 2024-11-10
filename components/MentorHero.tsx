"use client"

import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Upload } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

const mentors = [
  { image: "/Ashirbad.jpeg", company: "/advanze_logo.jpeg", companyText: "Adv", bgColor: "bg-orange-400", position: "top-0 right-8" },
  { image: "/Vijeet.jpeg", company: "/Pairs.jpeg", companyText: "Pairs", bgColor: "bg-purple-500", position: "top-1/3 right-1/4" },
  { image: "/Ram.png", company: "/LogoAlone.png", companyText: "S", bgColor: "bg-red-500", position: "bottom-1/4 left-20" },
  { image: "/Volkan.jpg", company: "/LogoAlone.png", companyText: "A", bgColor: "bg-teal-400", position: "bottom-0 right-1" },
];

export default function MentorLanding() {
  const { toast } = useToast()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    contribute:'',
    role: '',
    resume: null as File | null,
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'resume' && value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, String(value));
        }
      });
  
      const response = await fetch('/api/mail/submit-mentor-application', {
        method: 'POST',
        body: formDataToSend,
      });
  
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit application');
      }
  
      console.log('Application submitted successfully:', result);
      toast({
        title: "Success",
        description: result.successMessage || "Thanks for applying for mentorship in growtechie",
        // position: "center",  // center the toast
        style: {
          backgroundColor: "black",  // black background
          color: "white",  // white text
          fontFamily: "Space Grotesk",  // apply Space Grotesk font
          padding: "1rem",  // padding for better readability
          borderRadius: "8px",  // rounded corners for aesthetic
        },
      });
      setIsModalOpen(false);
      setFormData({
        fullName: '',
        email: '',
        phoneCode: '+91',
        phoneNumber: '',
        contribute: '',
        role: '',
        resume: null,
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-transparent text-white font-space-grotesk py-12 flex flex-col items-center">
      <Toaster />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Become a Guiding Star: Mentor Future Tech Experts
          </h1>
          <p className="text-xl mb-8 text-gray-400">
            Educate, shape, and empower tech enthusiasts with your expertise and great pedagogy. Let's change lives together.
          </p>
          <Button 
            className="text-white border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 rounded-full text-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Become a Mentor →
          </Button>
        </div>
        {/* <div className="lg:w-1/2 relative h-[500px] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 opacity-75 rounded-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-yellow-100 via-red-100 to-blue-100 opacity-50 mix-blend-overlay rounded-lg"></div>
          <div className="absolute inset-0 backdrop-blur-[1px] rounded-lg"></div> */}
        <div className="lg:w-1/2 relative h-[500px] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-red-700 opacity-75 rounded-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 via-red-500 to-blue-600 opacity-30 mix-blend-overlay rounded-lg"></div>
          <div className="absolute inset-0 bg-navy-800 opacity-20 mix-blend-multiply rounded-lg"></div>
          <div className="absolute inset-0 backdrop-blur-[2px] rounded-lg"></div>
          {mentors.map((mentor, index) => (
          <div key={index} className={`absolute ${mentor.position} ${mentor.bgColor} rounded-full p-1 shadow-lg z-10`}>
            <img src={mentor.image} alt={`Mentor ${index + 1}`} className="w-20 h-20 rounded-full" />
            <img 
              src={mentor.company}
              alt={`Company ${index + 1}`} 
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-white bg-white"
            />
          </div>
        ))}
          <div className="absolute top-0 left-0 bg-white text-black rounded-lg p-3 shadow-lg max-w-[200px]">
            <div className="flex items-center">
              <img src="/connect.png" alt="Community" className="w-6 h-6 mr-2" />
              <span className="font-semibold text-sm">100+ Experts & Mentors Community</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 bg-purple-600 text-white rounded-lg p-3 shadow-lg max-w-[240px]">
            <div className="flex items-center">
              <img src="/Content.png" alt="Access" className="w-6 h-6 mr-2" />
              <span className="font-semibold text-sm">Book a demo! Statisfied, then book the mentor.</span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Become a mentor</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input 
                type="text" 
                placeholder="Full Name*" 
                className="w-full text-gray-900 placeholder-gray-500"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <Input 
                type="email" 
                placeholder="Email*" 
                className="w-full text-gray-900 placeholder-gray-500"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <div className="flex">
                <Select onValueChange={handleSelectChange('phoneCode')} value={formData.phoneCode}>
                  <SelectTrigger className="w-[100px] text-gray-900">
                    <SelectValue placeholder="+91" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="+91" className="hover:bg-gray-100">+91</SelectItem>
                    <SelectItem value="+1" className="hover:bg-gray-100">+1</SelectItem>
                    <SelectItem value="+44" className="hover:bg-gray-100">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  type="tel" 
                  placeholder="Phone number*" 
                  className="flex-1 ml-2 text-gray-900 placeholder-gray-500"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Select onValueChange={handleSelectChange('contribute')} value={formData.contribute}>
                <SelectTrigger className="w-full text-gray-900">
                  <SelectValue placeholder="Contribute As*" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Educator" className="hover:bg-gray-100">Educator</SelectItem>
                  <SelectItem value="Educator Associate" className="hover:bg-gray-100">Educator Associate</SelectItem>
                  <SelectItem value="Mentors" className="hover:bg-gray-100">Mentors</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={handleSelectChange('role')} value={formData.role}>
                <SelectTrigger className="w-full text-gray-700">
                  <SelectValue placeholder="Role*" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="developer" className="hover:bg-gray-100">Developer</SelectItem>
                  <SelectItem value="designer" className="hover:bg-gray-100">Designer</SelectItem>
                  <SelectItem value="manager" className="hover:bg-gray-100">Manager</SelectItem>
                  <SelectItem value="uiux" className="hover:bg-gray-100">UI/UX</SelectItem>
                  <SelectItem value="data-science" className="hover:bg-gray-100">Data Science</SelectItem>
                  <SelectItem value="programming" className="hover:bg-gray-100">Programming</SelectItem>
                  <SelectItem value="frontend" className="hover:bg-gray-100">Frontend</SelectItem>
                  <SelectItem value="database" className="hover:bg-gray-100">Database</SelectItem>
                  <SelectItem value="aiml" className="hover:bg-gray-100">AI/ML</SelectItem>
                  <SelectItem value="data-analytics" className="hover:bg-gray-100">Data Analytics</SelectItem>
                  <SelectItem value="cyber-security" className="hover:bg-gray-100">Cyber Security</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full text-gray-700 flex items-center justify-center"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {formData.resume ? formData.resume.name : "Upload resume"}
                </Button>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-red-700 hover:bg-red-500 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
              <p className="text-xs text-center text-gray-500">
                By continuing, you agree to the Growtechie's Terms and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}