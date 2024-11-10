"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useCurrentUser } from '../_features/auth/api/use-current-user'
import { useAuthActions } from '@convex-dev/auth/react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ClockIcon, MailIcon, GithubIcon, SettingsIcon, LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Profile = () => {
  const { data, isLoading } = useCurrentUser()
  const { signOut } = useAuthActions();

  if (isLoading) {
    return <ProfileSkeleton />
  }

  if (!data) {
    return null
  }

  const { image, name, email, _creationTime, emailVerificationTime } = data

  const logout = () => {
    signOut();
    window.location.reload();
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const creationDate = formatDate(_creationTime)
  const verificationDate = emailVerificationTime ? formatDate(emailVerificationTime) : 'Not verified'

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Card className="bg-gray-800/50 backdrop-filter backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              <motion.aside
                className="lg:w-2/5 p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex flex-col items-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Avatar className="h-32 w-32 border-4 border-white/20 shadow-xl">
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                        {name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white text-center">{name}</h2>
                  <div className="flex space-x-3">
                    <Badge className="bg-blue-500/50 hover:bg-blue-500/70 transition-colors text-white px-4 py-1 text-sm">User</Badge>
                    <Badge className="bg-green-500/50 hover:bg-green-500/70 transition-colors text-white px-4 py-1 text-sm">Active</Badge>
                  </div>
                  <div className="w-full pt-6 space-y-3">
                    <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10 transition-colors duration-300">
                      <SettingsIcon className="mr-2 h-5 w-5" /> Account Settings
                    </Button>
                    <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10 transition-colors duration-300" onClick={logout}>
                      <LogOutIcon className="mr-2 h-5 w-5" /> Log Out
                    </Button>
                  </div>
                </div>
              </motion.aside>
              <main className="lg:w-3/5 p-8">
                <Tabs defaultValue="info" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-700/50 rounded-lg p-1">
                    <TabsTrigger value="info" className="text-white data-[state=active]:bg-gray-600">User Info</TabsTrigger>
                    <TabsTrigger value="activity" className="text-white data-[state=active]:bg-gray-600">Account Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="info" className="mt-8 space-y-6">
                    <ProfileItem icon={<MailIcon />} title="Email" value={email} />
                    {/* <ProfileItem icon={<GithubIcon />} title="GitHub Profile" value={`github.com/${name}`} /> */}
                    <ProfileItem icon={<CalendarIcon />} title="Joined" value={creationDate} />
                    <ProfileItem icon={<ClockIcon />} title="Email Verified" value={verificationDate} />
                  </TabsContent>
                  <TabsContent value="activity" className="mt-8 space-y-6">
                    <ActivityItem title="Account Created" date={creationDate} description="Your journey with us began." />
                    <ActivityItem title="Email Verification" date={verificationDate} description="Ensuring the security of your account." />
                    {/* <ActivityItem title="GitHub Integration" date={creationDate} description="Successfully linked your GitHub account." /> */}
                  </TabsContent>
                </Tabs>
              </main>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

const ProfileItem = ({ icon, title, value }: { icon: React.ReactNode, title: string; value: React.ReactNode }) => (
  <motion.div
    className="bg-gray-700/30 backdrop-filter backdrop-blur-sm p-5 rounded-lg flex items-center space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="text-blue-400 text-2xl">{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-300">{title}</h3>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  </motion.div>
)

const ActivityItem = ({ title, date, description }: { title: string; date: string; description: string }) => (
  <motion.div
    className="bg-gray-700/30 backdrop-filter backdrop-blur-sm p-5 rounded-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
  >
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-gray-300 mb-2">{date}</p>
    <p className="text-sm text-gray-400">{description}</p>
  </motion.div>
)

const ProfileSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-gray-900 to-black">
    <Card className="w-full max-w-4xl bg-gray-800/50 backdrop-filter backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          <aside className="lg:w-2/5 p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
            <div className="flex flex-col items-center space-y-6">
              <Skeleton className="h-32 w-32 rounded-full bg-gray-700/50" />
              <Skeleton className="h-8 w-48 bg-gray-700/50" />
              <div className="flex space-x-3">
                <Skeleton className="h-8 w-24 bg-gray-700/50" />
                <Skeleton className="h-8 w-24 bg-gray-700/50" />
              </div>
              <div className="w-full pt-6 space-y-3">
                <Skeleton className="h-12 w-full bg-gray-700/50" />
                <Skeleton className="h-12 w-full bg-gray-700/50" />
              </div>
            </div>
          </aside>
          <main className="lg:w-3/5 p-8">
            <Skeleton className="h-12 w-full bg-gray-700/50 mb-8" />
            <div className="space-y-6">
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} className="h-20 w-full bg-gray-700/30" />
              ))}
            </div>
          </main>
        </div>
      </CardContent>
    </Card>
  </div>
)

export default Profile