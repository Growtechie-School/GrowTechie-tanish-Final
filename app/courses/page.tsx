'use client'

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
import CourseraOutcomes from "@/components/CourseOutcome";
import BusinessSolution from "@/components/CourseBusinessSkills";
import LearningEcosystem from "@/components/LearningEcosystem"

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    // <div className="text-white w-[90%] md:w-[95%] xl:w-[85%] mx-auto mt-10">
    //   <CourseLandingPage />

    //   {/* Learning Section */}

    //   <CourseLearningSection />

    //   {/* Discount section */}

    //   <CourseDiscountSection />

    //   {/* Benefit section */}

    //   <CourseBenefitsSection />

    //   {/* Syllabus */}

    //   <CourseSyllabus />

    //   {/*Certification Section*/}

    //   <CourseCertification />

    //   {/* Register Section */}
    //   <CourseRegistration />
    // </div>
    <>
    <PopularCourses/>
    <CourseraOutcomes/>
    <BusinessSolution/>
    <LearningEcosystem/>
    </>
  );
}
