"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseLandingPage from "@/components/CourseLandingPage";
import CourseLearningSection from "@/components/CourseLearningSection";
import CourseDiscountSection from "@/components/CourseDiscountSection";
import CourseBenefitsSection from "@/components/CourseBenefitsSection";
import CourseSyllabus from "@/components/CourseSyllabus";
import CourseCertification from "@/components/CourseCertification";
import CourseRegistration from "@/components/CourseRegistration";
import PopularCourses from "@/components/PopularCourses";
import { courseDetails } from "@/libs/nav_menus";

export default function page({
  params,
}: {
  params: {
    courseName: string;
  };
}) {
  const courseName = params.courseName;
  const course = courseDetails.filter(course => course.title === courseName)
  console.log(course)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="text-white w-[90%] md:w-[95%] xl:w-[85%] mx-auto mt-10">

      <CourseLandingPage course={course}/>

      <CourseLearningSection />

      <CourseDiscountSection />

      <CourseBenefitsSection course={course}/>

      <CourseSyllabus course={course} />

      <CourseCertification />

      <CourseRegistration />
    </div>
  );
}