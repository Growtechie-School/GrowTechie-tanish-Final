'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import E_HeroSection from '@/components/E_HeroSection'
import Pillar from '@/components/Pillar'
import MentorCard from '@/components/MentorCard'
import Navbar from '@/components/Navbar'

export default function page() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing : 'ease',
          once: true,
          anchorPlacement: 'top-bottom',
        })
      },[])
  return (

    <>
    <E_HeroSection/>
    <Pillar/>
    <MentorCard/> 
    </>
  )
}
