'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { ToastProvider } from '@/components/ToastProvider'

const ProfileForm = dynamic(() => import('@/components/TeacherProfileForm'), {
  ssr: false,
})

const Page: React.FC = () => {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-black">
        <ProfileForm mentorId="placeholder-mentor-id" />
      </div>
    </ToastProvider>
  )
}

export default Page