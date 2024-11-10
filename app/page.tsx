import BusinessSolution from "@/components/CourseBusinessSkills";
import CourseraOutcomes from "@/components/CourseOutcome";
import SkillsCarousel from "@/components/ExploreCourses";
import Homepage from "@/components/Homepage";
import AIProductLanding from "@/components/Landingpage";
import LearningEcosystem from "@/components/LearningEcosystem";


export default function Page() {
  return (
    <div className="">
      <AIProductLanding/>
      <Homepage />
      <BusinessSolution/>
      <CourseraOutcomes/>
      <LearningEcosystem/>
    </div>
  );
}