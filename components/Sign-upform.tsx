'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    role: "Mentor",
    password: "",
    confirmPassword: "",
    mob: "",
    status: "active",
  })

  const [error, setError] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { firstName, lastName, emailId, role, password, confirmPassword, mob } = formData

    if (!firstName || !lastName || !emailId || !role || !password || !confirmPassword || !mob) {
      setError("All fields are mandatory.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setError("")

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/growtect/Mentor&Mentee/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        if (response.status === 409) {
          setError("A user with this email or mobile number already exists.")
        } else if (response.status === 400) {
          setError("Invalid data. Please check your inputs.")
        } else {
          setError(errorData.message || "Signup failed.")
        }
        return
      }

      await response.json()
      setShowSuccessModal(true)
    } catch (error) {
      setError("Something went wrong. Please try again later.")
    }
  }

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false)
    window.location.href = "/signin"
  }

  return (
    <div className="w-full max-w-lg mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-2xl text-center text-black">Join Growtechie</h2>
      <p className="text-black text-sm mt-2 text-center">
        Sign up for an account and start learning today!
      </p>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <LabelInputContainer>
            <Label htmlFor="firstName" className="text-black">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Dattakumar"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border-2 border-black rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastName" className="text-black">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Dattu"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border-2 border-black rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </LabelInputContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <LabelInputContainer>
            <Label htmlFor="emailId" className="text-black">Email Address</Label>
            <Input
              id="emailId"
              name="emailId"
              placeholder="email@example.com"
              type="email"
              value={formData.emailId}
              onChange={handleChange}
              className="p-3 border-2 border-black rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="mob" className="text-black">Mobile Number</Label>
            <Input
              id="mob"
              name="mob"
              placeholder="1234567890"
              type="tel"
              value={formData.mob}
              onChange={handleChange}
              className="p-3 border-2 border-black rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </LabelInputContainer>
        </div>

        <div className="mt-4">
          <Label className="text-black">Role</Label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Mentor"
                checked={formData.role === "Mentor"}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-black">Mentor</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Mentee"
                checked={formData.role === "Mentee"}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-black">Mentee</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <LabelInputContainer>
            <Label htmlFor="password" className="text-black">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 border-2 border-black rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="confirmPassword" className="text-black">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-3 border-2 border-black rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </LabelInputContainer>
        </div>

        <Button
          type="submit"
          className="mt-6 bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          Sign Up
        </Button>
      </form>

      <div className="text-center mt-4">
        <p className="text-black">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-[425px] bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Success!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-xl">Congratulations!</p>
            <p className="mt-2">You have been successfully registered.</p>
          </div>
          <DialogFooter>
            <Button onClick={handleCloseSuccessModal} className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-2">{children}</div>
}