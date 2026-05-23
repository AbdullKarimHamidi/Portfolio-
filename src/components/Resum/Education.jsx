import React from "react";
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between  gap-20 md:flex-row flex-col md:pl-0  md:mx-10">
        <div className="div md:w-1/2  pl-3">
          <div className="div py-15 pl-4">
            {" "}
            <p className="text-sm text-designcolor tracking-[4px]">
              2008 - 2024
            </p>
            <h2 className="text-2xl font-bold capitalize">Education Quality</h2>
          </div>
          <div className="w-full border-l-[6px] border-l-black/30 h-[1000px] flex flex-col gap-10 md:mr-0 md:pr-8 pr-4">
            <Resumecart
              title="BCS in Computer Science"
              subtitle="Ghalib (2020 - 2024)"
              result="9.5/10"
              descriptions="The training provided by universities in order to prepare people to work in various sectors of the economy areas of the culture"
            />
            <Resumecart
              title="MERN Stack Certification"
              subtitle="Wassa (2022 - 2023)"
              result="8.5/10"
              descriptions=" I hold a certification in the MERN stack, covering MongoDB, Express.js, React, and Node.js. It enables me to build dynamic, full-stack web applications with scalable backend and responsive frontend."
            />
            <Resumecart
              title="Personal Projects "
              subtitle="(2020 - 2024)"
              result="10/10"
              descriptions="I have built full-stack MERN applications and AI-powered computer vision systems that combine scalable web development with real-time intelligent analysis. My projects focus on solving real-world problems through efficient, user-friendly, and production-ready solutions."
            />
          </div>
        </div>

        <div className="div md:w-1/2 md:pr-0 pr-5">
          <div className="div py-15 text-right pr-4">
            {" "}
            <p className="text-sm text-designcolor tracking-[4px]">
              2022 - 2025
            </p>
            <h2 className="text-2xl font-bold capitalize">Job Experience</h2>
          </div>
          <div className=" right w-full border-r-[6px] border-r-black/30 h-[1000px] flex flex-col gap-10 ">
            <Rightresumcart
              title="AI & Computer Vision Engineer"
              subtitle="Rahanet ISP (08/2024 - 03/2025)"
              result="9.6/10"
              descriptions=" Architected and deployed intelligent internal monitoring systems utilizing advanced Computer Vision. Integrated custom AI pipelines with local infrastructure to automate process auditing, optimize backend data streams, and enhance real-time operational efficiency.."
            />
            <Rightresumcart
              title="Web Developer"
              subtitle="Super Cola (07/2023 - 08/2024)"
              result="9.5/10"
              descriptions="At Super Cola, I was responsible for building scalable web applications and optimizing existing systems. I worked closely with the team to ensure fast load times and improved the overall web infrastructure.

"
            />
            <Rightresumcart
              title="Full-Stack & Computer Vision Engineer"
              subtitle="Rahanet Internet Service Provider (2020 - 2024)"
              result="9.6/10"
              descriptions="I worked on full-stack web applications and AI-powered computer vision systems, developing scalable solutions that improved automation, system performance, and user experience across different services."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
