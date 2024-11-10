import PopularTutors from "@/components/PopularTutor";
import FAQ from "@/components/Faqcourse";
import ContributionRoles from "@/components/MentorContribution";
import JoinUsSteps from "@/components/MentorJoinus";
import MentorHero from "@/components/MentorHero";
import MentorRewards from "@/components/MentorReward";
import EligibilityCriteria from "@/components/MentorEligibility";

const Teachers = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 my-[5%]">
      <div className="container mx-auto mt-2">
        <MentorHero />
        <ContributionRoles />
        <MentorRewards />
        <EligibilityCriteria />
        <JoinUsSteps />
      </div>
    </main>
  );
};

export default Teachers;
