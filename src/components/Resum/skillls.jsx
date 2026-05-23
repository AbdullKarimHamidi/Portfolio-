import React from "react";
import { motion } from "framer-motion";

function Skills() {
  // Dynamically map skills to avoid huge blocks of duplicate code
  const designSkills = [
    { name: "Photoshop", level: "100%", width: "w-full" },
    { name: "Figma", level: "80%", width: "w-[80%]" },
    { name: "Adobe InDesign", level: "75%", width: "w-[75%]" },
    { name: "CorelDRAW", level: "90%", width: "w-[90%]" },
  ];

  const developmentSkills = [
    { name: "Machine Learning", level: "90%", width: "w-[90%]" },
    { name: "Computer Vision", level: "95%", width: "w-[95%]" },
    { name: "React.js", level: "100%", width: "w-full" },
    { name: "Next.js", level: "90%", width: "w-[90%]" },
    { name: "TailwindCSS", level: "100%", width: "w-full" },
    { name: "Node.js / Express.js", level: "90%", width: "w-[90%]" },
    { name: "MongoDB", level: "85%", width: "w-[85%]" },
  ];

  // Shared progress bar animation variants
  const progressVariants = {
    hidden: { scaleX: 0, originX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full my-16 flex flex-col gap-20"
    >
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20  md:px-0 mx-10 pr-10">

          <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="mb-4">
            <p className="text-sm text-designcolor tracking-[4px] uppercase font-medium mb-2">
              Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Engineering & AI Expertise
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {developmentSkills.map((skill, index) => (
              <div key={index} className="overflow-visible">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-gray-300">
                  {skill.name}
                </p>
                <div className="w-full h-2.5 bg-black/50 rounded-full mt-3 overflow-visible relative">
                  <motion.div
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`absolute top-0 left-0 h-full ${skill.width} bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full`}
                  >
                    <span className="absolute -top-7 right-0 text-xs font-bold text-designcolor tracking-wider">
                      {skill.level}
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Left Column: Design Skills */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 mr-25">
          <div className="mb-4">
            <p className="text-sm text-designcolor tracking-[4px] uppercase font-medium mb-2">
              Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Design Architecture
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {designSkills.map((skill, index) => (
              <div key={index} className="overflow-visible">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-gray-300">
                  {skill.name}
                </p>
                <div className="w-full h-2.5 bg-black/50 rounded-full mt-3 overflow-visible relative">
                  <motion.div
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`absolute top-0 left-0 h-full ${skill.width} bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full`}
                  >
                    <span className="absolute -top-7 right-0 text-xs font-bold text-designcolor tracking-wider">
                      {skill.level}
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Development Skills */}
      

      </div>
    </motion.div>
  );
}

export default Skills;