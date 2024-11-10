import React from "react";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Work like Frontend Developers at AirBnB",
      description: "Build a highly responsive frontend for a travel app.",
      skills: ["HTML", "CSS", "Bootstrap", "React JS"],
      imageSrc: "/frontend_1.png", // Update with the correct path
    },
    {
      title: "Work like an Engineer at Zerodha",
      description: "Build a tool to analyze an investment portfolio.",
      skills: ["OOP", "JSON", "Gradle", "Rest API"],
      imageSrc: "/computer-engineer.png", // Update with the correct path
    },
    {
      title: "Work like a senior developer at Flipkart",
      description: "Experience working on a live distributed system in AWS.",
      skills: ["Microservices", "Kafka", "Scaling", "Cloud"],
      imageSrc: "/senior.png", // Update with the correct path
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Work-Experience Based Learning Approach
        </h2>
        <p className="text-white mb-10">
          Learn and grow like you would on a real job. Start from the fundamentals, get support from our mentors
          and community, and <strong>build your way to the top</strong> - through professional work-like Full-stack
          and Backend web development projects.
        </p>
        <div className="my-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="text-white bg-[#000319] flex flex-col justify-center items-center text-center p-6 md:p-8 space-y-4 rounded-md hover:bg-black hover:text-white border border-slate-500/20 transition-all duration-300 ease-in-out"
            >
              <div className="mb-4 md:mb-6">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-lg md:text-[20px] font-semibold">{project.title}</h3>
              <p className="text-slate-300 text-sm md:text-base">{project.description}</p>
              <div className="flex justify-center flex-wrap gap-2 mt-4">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="bg-slate-600 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button className="bg-[#ffbd59] text-[#000319] font-semibold px-6 py-3 rounded-lg hover:bg-[#e0a842] transition">
            Apply & Start For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
