// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { BarChart2, Clock, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog";
// import { DialogTitle } from "@radix-ui/react-dialog";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { useToast } from "@/hooks/use-toast"
// import { Toaster } from "@/components/ui/toaster"

// interface CourseCardProps {
//   type: string;
//   title: string;
//   description: string;
//   level: string;
//   duration: string;
//   link: string;
// }

// const CourseCard: React.FC<CourseCardProps> = ({
//   type,
//   title,
//   description,
//   level,
//   duration,
//   link,
// }) => {
//   const [email, setEmail] = useState("");
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoadingButton, setIsLoadingButton] = useState(false);
//   const { toast } = useToast()
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   setIsLoadingButton(true);
//   //   e.preventDefault();
    
//   //   await new Promise(resolve => setTimeout(resolve, 1000));
//   //   console.log("Form submitted with email:", email);
//   //   setIsSubmitted(true);
//   //   setIsLoadingButton(true);
    
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // setIsSubmitting(true)

//     try {
//       const response = await fetch('/api/catalogMail/catalog-form-submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.message || 'Failed to send message')
//       }

//       toast({
//         title: "Thanks for reaching out to Growtechie",
//         description: "Your message has been sent successfully!",
//       })

//       setFormData({ name: '', email: '', message: `${title}` })
//     } catch (error) {
//       console.error('Error sending message:', error)
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//     }
//   }

//   const handleDialogClose = () => {
//     setIsDialogOpen(false);
//     setIsSubmitted(false);
//     setEmail("");
//   };

  

//   return (
//     <Card className="bg-[#1c1c1c] text-white h-full flex flex-col justify-between rounded-lg overflow-hidden">
//       <CardHeader className="pb-2">
//         <div className={`text-xs font-semibold mb-2 ${type === "Free Webinars" ? "text-green-500" : "text-primary"}`}>
//           {type}
//         </div>
//         <CardTitle className="text-xl font-bold">{title}</CardTitle>
//       </CardHeader>
//       <CardContent className="pb-2">
//         <p className="text-sm text-gray-300">{description}</p>
//       </CardContent>
//       <CardFooter className="pt-2 flex flex-col items-stretch">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center text-xs text-gray-400">
//             <BarChart2 className="w-4 h-4 mr-1" />
//             <span>{level} Friendly</span>
//           </div>
//           <div className="flex items-center text-xs text-gray-400">
//             <Clock className="w-4 h-4 mr-1" />
//             <span>{duration}</span>
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300">
//                 Register Now
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="bg-black text-white border border-gray-600 sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle className="text-xl font-bold">
//                   {isSubmitted ? "Registration Successful!" : `Interested in ${title}?`}
//                 </DialogTitle>
//                 <DialogDescription className="text-gray-400">
//                   {isSubmitted
//                     ? `You've been registered for "${title}". Check your email for more details.`
//                     : "Enter your email below to receive updates about this course."}
//                 </DialogDescription>
//               </DialogHeader>
//               {!isSubmitted && (
//                 <form onSubmit={handleSubmit}>
//                   <div className="grid gap-4 py-4">
//                     <div className="grid w-full items-center gap-1.5">
//                     <Label htmlFor="email" className="sr-only">Name</Label>
//                       <Input
//                         id="name"
//                         type="name"
//                         placeholder="Enter your Name"
//                         className="col-span-12 bg-[#2c2c2c] border-gray-600 text-white"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                       <Label htmlFor="email" className="sr-only">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="Enter your Email"
//                         className="col-span-12 bg-[#2c2c2c] border-gray-600 text-white"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <DialogFooter className="sm:justify-between">
//                     <Button
//                       type="button"
//                       variant="outline"
//                       onClick={handleDialogClose}
//                       className="text-white border-white  hover:bg-white hover:text-black transition-colors duration-300"
//                     >
//                       Cancel
//                     </Button>
//                     <Button  disabled={isLoadingButton} type="submit" className="bg-white mb-2 text-black hover:bg-white/80">
//                       Continue
//                     </Button>
//                   </DialogFooter>
//                 </form>
//               )}
//               {isSubmitted && (
//                 <DialogFooter>
//                   <Button
//                     type="button"
//                     onClick={handleDialogClose}
//                     className="bg-white text-black hover:bg-white/80 mt-4"
//                   >
//                     Close
//                   </Button>
//                 </DialogFooter>
//               )}
//             </DialogContent>
//           </Dialog>
//           <div className="text-primary hover:text-primary-dark transition-colors duration-300">
//             1 Dec
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };


// export default function CourseCatalog() {
//   const [activeTab, setActiveTab] = useState("All");

//   const categories = ["All", "AI", "New to coding", "Career paths"];
//   const courses = [
//     {
//       type: "Free Webinars",
//       title: "Intro to Generative AI & Llama",
//       description: "Dive into the many forms of generative AI and learn how we can best use these new technologies in your daily life!",
//       level: "Beginner",
//       duration: "< 1 hour",
//       category: "AI",
//       link: "/courses/intro-to-generative-ai",
//     },
//     {
//       type: "Free Webinars",
//       title: "Learn How to Use ChatGPT & Prompts",
//       description: "Ready to dive into the world of Generative AI? Learn how ChatGPT works, how to use ChatGPT in your daily life, and much more!",
//       level: "Beginner",
//       duration: "1 hour",
//       category: "AI",
//       link: "/courses/chatgpt-and-prompts",
//     },
//     {
//       type: "Free Webinars",
//       title: "Learn How to Use AI for Coding",
//       description: "Ready to learn how to use AI for coding? Learn how to use generative AI tools like ChatGPT to help you write better code, faster.",
//       level: "Beginner",
//       duration: "1 hour",
//       category: "AI",
//       link: "/courses/ai-for-coding",
//     },
//     {
//       type: "Coding Webinar",
//       title: "Are you scared of coding?",
//       description: "If you want to start your career, attend this session from industry expert to know what is best choice for you. Mind will be clear.",
//       level: "Beginner",
//       duration: "2 hours",
//       category: "New to coding",
//       link: "/courses/start-tech-career",
//     },
//     {
//       type: "Career path Webinar",
//       title: "Where to start my tech career?",
//       description: "If you want to start your career, attend this session from industry expert to know what is best choice for you. Mind will be clear.",
//       level: "Beginner",
//       duration: "2 hours",
//       category: "Career paths",
//       link: "/courses/tech-career-path",
//     },
//   ];

//   const filteredCourses =
//     activeTab === "All"
//       ? courses
//       : courses.filter((course) => course.category === activeTab);

//   return (
//     <div className="bg-black text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
//           <TabsList className="w-full justify-start overflow-x-auto bg-transparent">
//             {categories.map((category) => (
//               <TabsTrigger
//                 key={category}
//                 value={category}
//                 className={`text-sm font-medium px-4 py-2 rounded-full ${
//                   activeTab === category ? "bg-white text-black" : "text-white hover:bg-gray-800"
//                 }`}
//               >
//                 {category} 
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           <TabsContent value={activeTab}>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               {filteredCourses.map((course, index) => (
//                 <CourseCard key={index} {...course} />
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//         <div className="text-center">
//           <Link href="/courses">
//             <Button className="bg-white text-black hover:bg-gray-200">
//               Explore All Courses
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }