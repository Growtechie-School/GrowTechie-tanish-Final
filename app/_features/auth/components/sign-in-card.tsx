'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { TriangleAlert, Eye, EyeOff, ArrowLeft } from "lucide-react"
import { useAuthActions } from '@convex-dev/auth/react'
import { SignInFLow } from '../types'
import { useRouter } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export const SignInCard = ({ setState }: { setState: (state: SignInFLow) => void }) => {
  const { signIn } = useAuthActions()
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const [resetStep, setResetStep] = useState<"signIn" | "forgot" | "reset">("signIn")
  const [resetEmail, setResetEmail] = useState("")
  const [resetCode, setResetCode] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setPending(true)
      await signIn("password", {
        email: formData.email,
        password: formData.password,
        flow: "signIn"
      })
      router.push("/")
      toast({
        title: "Sign In Successful",
        description: "Welcome back to your account!",
        style: {
          backgroundColor: "black",
          color: "white",
          fontFamily: "Space Grotesk",
          padding: "1rem",
          borderRadius: "8px",
        },
      })

    } catch (error) {
      setError("Invalid email or password")
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    } finally {
      setPending(false)
    }
  }

  const handleOAuthSignIn = async (provider: "github" | "google") => {
    try {
      setPending(true)
      await signIn(provider)
      toast({
        title: "Authentication Successful",
        description: `You've successfully signed in with ${provider}. Redirecting to dashboard...`,
        style: {
          backgroundColor: "black",
          color: "white",
          fontFamily: "Space Grotesk",
          padding: "1rem",
          borderRadius: "8px",
        },
      })
      router.push("/")
    } catch (error) {
      console.error("Auth error:", error)
      setError("Authentication failed. Please try again.")
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    } finally {
      setPending(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setPending(true)
      await signIn("password", {
        email: resetEmail,
        flow: "reset"
      })
      setResetStep("reset")
    } catch (error) {
      setError("Failed to send reset code. Please try again.")
    } finally {
      setPending(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setPending(true)
      await signIn("password", {
        email: resetEmail,
        code: resetCode,
        newPassword: newPassword,
        flow: "reset-verification"
      })
      setError("")
      setResetStep("signIn")
      setFormData({ ...formData, email: resetEmail })
    } catch (error) {
      setError("Failed to reset password. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <Card className="bg-black/60 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            {resetStep === "signIn" ? "Welcome back" : "Reset Password"}
          </CardTitle>
          <CardDescription className="text-white/60">
            {resetStep === "signIn" ? "Sign in to your account" : "Enter your email to reset your password"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-center gap-2">
              <TriangleAlert className="h-4 w-4" />
              {error}
            </div>
          )}
          <AnimatePresence mode="wait">
            {resetStep === "signIn" && (
              <motion.form
                key="signin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  disabled={pending}
                />
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    disabled={pending}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-full hover:bg-transparent text-white/60"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    type="submit"
                    className="bg-white text-black hover:bg-white/90"
                    disabled={pending}
                  >
                    Sign in
                  </Button>
                  <Button
                    type="button"
                    variant="link"
                    className="text-blue-400 hover:text-blue-300"
                    onClick={() => setResetStep("forgot")}
                  >
                    Forgot password?
                  </Button>
                </div>
              </motion.form>
            )}
            {resetStep === "forgot" && (
              <motion.form
                key="forgot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleForgotPassword}
                className="space-y-4"
              >
                <Input
                  type="email"
                  placeholder="Email"
                  value={resetEmail}
                  onChange={e => setResetEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  disabled={pending}
                />
                <div className="flex justify-between items-center">
                  <Button
                    type="submit"
                    className="bg-white text-black hover:bg-white/90"
                    disabled={pending}
                  >
                    Send reset code
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-white/60 hover:text-white"
                    onClick={() => setResetStep("signIn")}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to sign in
                  </Button>
                </div>
              </motion.form>
            )}
            {resetStep === "reset" && (
              <motion.form
                key="reset"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleResetPassword}
                className="space-y-4"
              >
                <Input
                  type="text"
                  placeholder="Reset code"
                  value={resetCode}
                  onChange={e => setResetCode(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  disabled={pending}
                />
                <Input
                  type="password"
                  placeholder="New password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  disabled={pending}
                />
                <div className="flex justify-between items-center">
                  <Button
                    type="submit"
                    className="bg-white text-black hover:bg-white/90"
                    disabled={pending}
                  >
                    Reset password
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-white/60 hover:text-white"
                    onClick={() => setResetStep("signIn")}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to sign in
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {resetStep === "signIn" && (
            <>
              <div className="mt-6">
                <Separator className="bg-white/20" />
                <div className="mt-6 space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => handleOAuthSignIn("google")}
                    disabled={pending}
                  >
                    <FcGoogle className="mr-2 h-5 w-5" />
                    Continue with Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => handleOAuthSignIn("github")}
                    disabled={pending}
                  >
                    <FaGithub className="mr-2 h-5 w-5" />
                    Continue with GitHub
                  </Button>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-white/60">
                Don't have an account?{" "}
                <button
                  onClick={() => setState("signUp")}
                  className="text-blue-400 hover:text-blue-300 hover:underline focus:outline-none"
                >
                  Sign up
                </button>
              </p>
            </>
          )}
        </CardContent>
      </Card>
      <Toaster />
    </motion.div>
  )
}