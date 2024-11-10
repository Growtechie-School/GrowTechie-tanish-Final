'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type FormData = {
  firstName: string;
  lastName: string;
  phoneNo: string;
  city: string;
  age: string;
  country: string;
  company: string;
  position: string;
  projectLinks: string[];
  linkedin: string;
  github: string;
  timezone: string;
  availabilityDate: string;
}

export default function MentorProfileFlow({ mentorId }: { mentorId: string }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNo: "",
    city: "",
    age: "",
    country: "",
    company: "",
    position: "",
    projectLinks: [""],
    linkedin: "",
    github: "",
    timezone: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    availabilityDate: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  // Validate mentorId on component mount
  useEffect(() => {
    if (!mentorId || isNaN(Number(mentorId))) {
      toast({
        title: "Error",
        description: "Invalid mentor ID. Please try again.",
        variant: "destructive",
      })
      router.push('/') // Redirect to home if mentorId is invalid
    }
  }, [mentorId, router, toast])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleProjectLinkChange = (index: number, value: string) => {
    const newProjectLinks = [...formData.projectLinks]
    newProjectLinks[index] = value
    setFormData(prev => ({ ...prev, projectLinks: newProjectLinks }))
    setErrors(prev => ({ ...prev, projectLinks: [] }))
  }
  
  const addProjectLink = () => {
    setFormData(prev => ({ ...prev, projectLinks: [...prev.projectLinks, ""] }))
  }

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone number is required'
    if (!formData.city) newErrors.city = 'City is required'
    if (!formData.age) newErrors.age = 'Age is required'
    if (!formData.country) newErrors.country = 'Country is required'
    if (!formData.company) newErrors.company = 'Company is required'
    if (!formData.position) newErrors.position = 'Position is required'
    if (formData.projectLinks.some(link => !link)) {
      newErrors.projectLinks = ['All project links must be filled']
    }
    if (!formData.linkedin) newErrors.linkedin = 'LinkedIn profile is required'
    if (!formData.github) newErrors.github = 'GitHub profile is required'
    if (!formData.availabilityDate) newErrors.availabilityDate = 'Availability date is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    
    // Validate mentorId before submission
    if (!mentorId || isNaN(Number(mentorId))) {
      toast({
        title: "Error",
        description: "Invalid mentor ID. Please try again.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/growtect/Mentor&Mentee/registerTeacher`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age, 10), // Convert age to number
          mentorId: parseInt(mentorId, 10), // Ensure mentorId is sent as a number
        }),
      })
  
      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(errorData || 'Failed to submit profile')
      }
  
      const result = await response.json()
      console.log('Profile submitted successfully:', result)

      toast({
        title: "Success",
        description: "Your profile has been submitted successfully!",
      })
      
      // Delay the navigation to ensure the user sees the success message
      setTimeout(() => {
        router.push('/home')
      }, 2000)
  
    } catch (error) {
      console.error('Error submitting profile:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-['Space_Grotesk']">
      <h2 className="text-3xl font-bold mb-6">Mentor Profile Details</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-6 bg-black p-8 rounded-lg shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 animate-[spin_3s_linear_infinite]"></div>
        <div className="relative z-10 space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="personal" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-semibold">Personal Details</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                    <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="phoneNo" className="text-gray-300">Phone No *</Label>
                  <Input id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                  {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-gray-300">City *</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <Label htmlFor="age" className="text-gray-300">Age *</Label>
                    <Input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="country" className="text-gray-300">Country *</Label>
                  <Input id="country" name="country" value={formData.country} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-300">Company *</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                <div>
                  <Label htmlFor="position" className="text-gray-300">Position *</Label>
                  <Input id="position" name="position" value={formData.position} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" required />
                  {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="projects" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-semibold">Projects & Featured Work</AccordionTrigger>
              <AccordionContent className="space-y-4">
                {formData.projectLinks.map((link, index) => (
                  <div key={index}>
                    <Label htmlFor={`projectLink${index}`} className="text-gray-300">Project Link {index + 1} *</Label>
                    <Input
                      id={`projectLink${index}`}
                      value={link}
                      onChange={(e) => handleProjectLinkChange(index, e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                ))}
                {errors.projectLinks && <p className="text-red-500 text-sm mt-1">{errors.projectLinks}</p>}
                <Button type="button" onClick={addProjectLink} variant="outline" className="bg-gray-800 text-white hover:bg-gray-700">Add Project Link</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="social" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-semibold">Social Media Details</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <Input
                    id="linkedin"
                    name="linkedin"
                    placeholder="LinkedIn Profile URL *"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>}
                <div className="flex items-center space-x-2">
                  <Github className="w-5 h-5 text-gray-400" />
                  <Input
                    id="github"
                    name="github"
                    placeholder="GitHub Profile URL *"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github}</p>}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="availability" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-semibold">Availability Details</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <Label htmlFor="availabilityDate" className="text-gray-300">Availability Date *</Label>
                  <Input
                    id="availabilityDate"
                    name="availabilityDate"
                    type="date"
                    value={formData.availabilityDate}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                  {errors.availabilityDate && <p className="text-red-500 text-sm mt-1">{errors.availabilityDate}</p>}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-l"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Profile'}
          </Button>
        </div>
      </form>
    </div>
  )
}