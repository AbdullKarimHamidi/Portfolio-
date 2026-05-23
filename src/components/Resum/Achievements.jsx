import React from "react";
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between  md:gap-20 md:flex-row flex-col md:pr-0 md:pl-0 pl-3 md:mx-10 px-5">
        <div className="div md:w-1/2 ">
          <div className=" py-15  pl-6">
            <p className="text-sm text-designcolor tracking-[4px] uppercase">
              2022 - 2025
            </p>
            <h2 className="text-2xl font-bold capitalize">Achieved</h2>
          </div>
          <div className=" border-l-[6px] border-l-black/30 h-[1000px] flex flex-col gap-10 ">
            <Resumecart
              title=" BSc in Computer Science"
              subtitle="Ghalib (2020 - 2024)"
              result="10/10"
              descriptions=" I completed my Bachelor's degree in Computer Science from 2019 to 2023, focusing on programming, algorithms, and software development. This education laid the foundation for my career as a web developer and AI enthusiast."
            />
            <Resumecart
              title=" MERN Stack Certification "
              subtitle="Ghalib (2023)"
              result="9.5/10"
              descriptions=" I earned a certification in the MERN stack in 2023, covering MongoDB, Express.js, React, and Node.js. This certification enabled me to develop full-stack web applications with a focus on both backend and frontend technologies."
            />
            <Resumecart
              title=" Learning Management System (LMS) "
              subtitle="super cola (2023 - 2024)"
              result="9/10"
              descriptions="  I built a Learning Management System (LMS) using the MERN stack in 2023, allowing admins, instructors, and students to manage courses and track progress. The system includes role-based access and real-time data management."
            />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="div py-15 text-right pr-6">
            <p className="text-sm text-designcolor tracking-[4px] uppercase">
              2022 - 2025
            </p>
            <h2 className="text-2xl font-bold capitalize">Achieved</h2>
          </div>
          <div className=" right border-r-[6px] border-r-black/30 h-[1000px] flex flex-col gap-10">
            <Rightresumcart
              title="AI-Powered Student Authentication System"
              subtitle="fars rout (2024 - Ongoing)"
              result="9.3/10"
              descriptions="I developed a student authentication system in 2024, using face recognition and voice recognition to track attendance. This system integrates AI to enhance security and simplify the verification process for educational institutions."
            />
            <Rightresumcart
              title=" Personal Projects in Web Development "
              subtitle=" (2022 - Ongoing)"
              result="9.6/10"
              descriptions=" I have developed multiple personal projects since 2022, using the MERN stack and focusing on solving real-world problems. These projects showcase my ability to create responsive and efficient web applications."
            />
            <Rightresumcart
              title="Work Experience at Web Development Companies"
              subtitle="Ghalib university (2020,2024)"
              result="10/10"
              descriptions="I have gained valuable experience as a web developer at Wassa, Super Cola, and Rahanet ISP, where I enhanced web applications' functionality and performance. These roles improved my problem-solving and technical skills."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Achievements;
