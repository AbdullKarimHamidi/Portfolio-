import React, { useState } from "react";
import Education from "./Education";
import Skills from "./skillls";
import Experience from "./Experience";
import Achievements from "./Achievements";
import { motion } from "framer-motion";

function Resum() {
  const [educationdata, setEdcationdata] = useState(true);
  const [skillscata, setSkillsdata] = useState(false);
  const [experiencedata, setExperience] = useState(false);
  const [achievementdata, setAchievementdata] = useState(false);
  return (
    <section id="Resume" className="py-20 w-full border-b-[1px] border-b-black ">
      <div className="title flex justify-center items-center flex-col">
        <h3 className="text-designcolor tracking-tight font-normal capitalize">
          3+ years of experience
        </h3>
        <h1 className="text-5xl font-bodyFont font-bold">My Resume</h1>
      </div>
      <div className="w-full ">
        <ul className="md:w-[80%] w-[90%] mx-auto grid md:grid-cols-4 mt-10  rounded-lg">
          <li
            className={`${
              educationdata
                ? "border-[1px] border-designcolor rounded-lg"
                : "border-transparent"
            } resume `}
            onClick={() =>
              setEdcationdata(true) &
              setSkillsdata(false) &
              setExperience(false) &
              setAchievementdata(false)
            }
          >
            Education
          </li>
          <li
            onClick={() =>
              setEdcationdata(false) &
              setSkillsdata(true) &
              setExperience(false) &
              setAchievementdata(false)
            }
            className={`${
              skillscata
                ? "border-[1px] border-designcolor rounded-lg"
                : "border-transparent"
            } resume `}
          >
            Professional skills
          </li>
          <li
            onClick={() =>
              setEdcationdata(false) &
              setSkillsdata(false) &
              setExperience(true) &
              setAchievementdata(false)
            }
            className={`${
              experiencedata
                ? "border-[1px] border-designcolor rounded-lg"
                : "border-transparent"
            } resume `}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEdcationdata(false) &
              setSkillsdata(false) &
              setExperience(false) &
              setAchievementdata(true)
            }
            className={`${
              achievementdata
                ? "border-[1px] border-designcolor rounded-lg"
                : "border-transparent"
            } resume `}
          >
            Achievements
          </li>
        </ul>
      </div>

      {educationdata && <Education />}
      {skillscata && <Skills />}
      {experiencedata && <Experience />}
      {achievementdata && <Achievements />}
      {/* <Education/> */}
      {/* <Skills/> */}
      {/* <Experience/> */}
      {/* <Achievements/> */}
    </section>
  );
}

export default Resum;
