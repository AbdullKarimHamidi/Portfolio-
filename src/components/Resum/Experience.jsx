import React from "react";
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";
import { motion } from "framer-motion";

function Experience() {
  // Left Side Data: Professional Industry Experience
  const professionalExperience = [
    {
      title: "AI & Computer Vision Engineer",
      subtitle: "Rahanet ISP (08/2024 - 03/2025)",
      result: "9.8/10",
      descriptions: "Architected and deployed intelligent internal monitoring systems utilizing advanced Computer Vision. Integrated custom AI pipelines with local infrastructure to automate process auditing, optimize backend data streams, and enhance real-time operational efficiency.",
    },
    {
      title: "Web Developer",
      subtitle: "Super Cola (07/2023 - 08/2024)",
      result: "9.5/10",
      descriptions: "At Super Cola, I was responsible for building scalable web applications and optimizing existing systems. I worked closely with the team to ensure fast load times and improved the overall web infrastructure.",
    },
    {
      title: "Web Developer",
      subtitle: "Wassa (05/2022 - 02/2023)",
      result: "9.6/10",
      descriptions: "At Wassa, I worked on developing and optimizing web applications to enhance user experience. I focused on improving UI/UX, debugging issues, and ensuring smooth functionality across platforms.",
    },
  ];

  // Right Side Data: Specialized R&D and Independent Engineering
  const innovationExperience = [
    {
      title: "AI Solutions & Full-Stack Freelancer",
      subtitle: "(2022 - Ongoing)",
      result: "10/10",
      descriptions: "Engineered tailormade digital solutions for private clients, specializing in pairing MERN stacks with analytical modules. Built, refined, and deployed highly interactive frontend interfaces matched with specialized backend logic.",
    },
    {
      title: "Open-Source AI & CV Contributor",
      subtitle: "(2022 - Ongoing)",
      result: "10/10",
      descriptions: "Active open-source collaborator contributing to tools and libraries in the modern AI ecosystem. Focused on fine-tuning code implementations, debugging modular tracking processes, and reviewing community-driven logic.",
    },
    {
      title: "Personal AI & Computer Vision Labs",
      subtitle: "(2022 - Ongoing)",
      result: "10/10",
      descriptions: "Designed, trained, and evaluated custom object detection models and real-time tracking engines using YOLO platforms. Integrated computer vision outputs directly into responsive dashboards to achieve dynamic analytics tracking.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mx-5 pr-10"
    >
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20 px-4 md:px-0 md:mx-10">
        
        {/* Left Side: Professional Experience */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="py-8 ">
            <p className="text-sm text-designcolor tracking-[4px] uppercase font-medium">
              Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-1">
              Job Experience
            </h2>
          </div>
          
          <div className="border-l-[4px] border-l-black/30 h-auto flex flex-col gap-10 pl-2">
            {professionalExperience.map((exp, index) => (
              <Resumecart
                key={index}
                title={exp.title}
                subtitle={exp.subtitle}
                result={exp.result}
                descriptions={exp.descriptions}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Specialized Development / Lab Work */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="py-8 md:text-right pr-6 pl-6 md:pl-0">
            <p className="text-sm text-designcolor tracking-[4px] uppercase font-medium">
              Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-1">
              Development Experience
            </h2>
          </div>

          <div className="border-l-[4px] md:border-l-0 md:border-r-[4px] border-black/30 h-auto flex flex-col gap-10 pl-2 md:pl-0 md:pr-2">
            {innovationExperience.map((exp, index) => (
              <Rightresumcart
                key={index}
                title={exp.title}
                subtitle={exp.subtitle}
                result={exp.result}
                descriptions={exp.descriptions}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default Experience;