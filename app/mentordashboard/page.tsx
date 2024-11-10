'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CalendarDays, DollarSign, GraduationCap, Users } from 'lucide-react'

const bookingsData = [
  { name: 'Mon', bookings: 4 },
  { name: 'Tue', bookings: 3 },
  { name: 'Wed', bookings: 2 },
  { name: 'Thu', bookings: 5 },
  { name: 'Fri', bookings: 3 },
  { name: 'Sat', bookings: 6 },
  { name: 'Sun', bookings: 4 },
]

export default function MentorDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Mentor Dashboard</h1>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="Mentor" />
            <AvatarFallback>MN</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#1c1c1c] text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+20% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1c1c1c] text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bookings This Week</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">27</div>
              <p className="text-xs text-muted-foreground">+5 from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1c1c1c] text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1c1c1c] text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Created</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 in review</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#1c1c1c] text-white">
            <CardHeader>
              <CardTitle>Weekly Bookings</CardTitle>
              <CardDescription>Number of bookings per day this week</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-[#1c1c1c] text-white">
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>Your latest transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { student: "Alice Johnson", amount: 150, date: "2024-10-22" },
                  { student: "Bob Smith", amount: 200, date: "2024-10-21" },
                  { student: "Charlie Brown", amount: 100, date: "2024-10-20" },
                  { student: "Diana Prince", amount: 175, date: "2024-10-19" },
                ].map((payment, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{payment.student[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{payment.student}</p>
                        <p className="text-xs text-muted-foreground">{payment.date}</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">${payment.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button variant="outline" className="mr-2">View All Bookings</Button>
          <Button>Update Profile</Button>
        </div>
      </div>
    </div>
  )
}
