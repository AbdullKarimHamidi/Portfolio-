import React from "react";
import Projectscart from "../../extra/Projectscart";
import First from "../../assets/course9.jpg";
import Second from "../../assets/course2.jpg";
import third from "../../assets/me.png";
import fourth from "../../assets/course16.jpg";
import fifth from "../../assets/course3.jpg";
import sixth from "../../assets/course17.jpg";
import { FaGithub, FaGlobe } from "react-icons/fa";
import VCS from "../../assets/vsc.webp";
import RealTime from "..//../assets/RealTime.png";

import Intrusion from "../../assets/intrusion.png";
import Lms from "../../assets/lms.png";
import Face_an from "../../assets/Face_an.png";
import bask from '../../assets/bask.png'

function Project() {
  return (
    <section
      id="Projects"
      className="w-full h-auto bg-bodyColor text-lighttext overflow-hidden"
    >
      <div className="flex justify-center items-center flex-col mb-10">
        <h1 className=" uppercase font-normal tracking-wide text-designcolor text-sm mb-5">
          visit my profile and keep your feedback
        </h1>
        <h3 className="font-bold text-5xl">My projects</h3>
      </div>
      <div className="div grid md:grid-cols-3 md:gap-7">
         <Projectscart
          image={bask}
          title="Basketball-Analysis"
          description="A Real-Time Basketball Analysis System is a computer vision project I developed to track and analyze basketball gameplay in live video. It detects players, ball movement, and key actions on the court, then generates insights such as performance statistics, positioning, and game patterns in real time, helping to better understand and evaluate the game."
          firsticon={<FaGithub />}
          github_address={
            "https://github.com/Kairmhamidi/Real-Time-Basketball-Analysis-with-Computer-Vision"
          }
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={Intrusion}
          title="AI Powered Intrusion Detection system"
          description="An Intrusion Detection System (IDS) is a security solution I developed to monitor activity and detect suspicious or unauthorized access in real time. It analyzes incoming data and system behavior to identify potential threats and alerts the system when abnormal patterns are found, helping improve overall security and protection"
          firsticon={<FaGithub />}
          github_address={"https://github.com/Kairmhamidi/Intrusion-Detection"}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={Lms}
          title={'Learning management system (LMS)'}
          description="A Learning Management System (LMS) is a platform I developed to manage educational activities online. It allows teachers to assign classes, deliver content, and track student progress, while students can access lessons, submit work, and view their performance in one centralized system."
          firsticon={<FaGithub />}
          github_address={
            "https://github.com/Kairmhamidi/Learning-Management-System"
          }
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={third}
          description="A professional portfolio built with Next.js and Tailwind CSS, showcasing skills, projects, experiences, and contact details in an interactive design."
          title={"Atractive Portfolio"}
          firsticon={<FaGithub />}
          github_address={"https://github.com/Kairmhamidi/hamidi_portfolio"}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={RealTime}
          title="Real time face attendacne system"
          description="A Real-Time Face Attendance System is a smart solution I developed to automatically recognize individuals using face detection and mark their attendance instantly. It uses computer vision to capture and identify faces in real time, reducing manual work and improving accuracy, speed, and security in attendance tracking."
          firsticon={<FaGithub />}
          github_address={
            "https://github.com/Kairmhamidi/Real-Time-Face-Attendance-system-using-Python-and-Next.js"
          }
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={Face_an}
          title="Real Time Face-Anonymizer"
          firsticon={<FaGithub />}
          github_address={
            "https://github.com/Kairmhamidi/Face-Anonymizer-Privacy-Filter"
          }
          secondicon={<FaGlobe />}
          description="A Real-Time Face Anonymizer is a computer vision system I developed that detects faces in live video and automatically hides or blurs them to protect privacy. It processes frames in real time, applying anonymization techniques like blurring or masking, making it useful for privacy-focused applications in surveillance, recording, or public data handling.."
        />
       
      </div>
    </section>
  );
}

export default Project;
