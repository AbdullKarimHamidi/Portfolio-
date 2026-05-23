import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import {
  FaCss3,
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaGithub,
  FaGithubAlt,
  FaHtml5,
  FaLinkedin,
  FaLinkedinIn,
  FaPython,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import Image from "../../assets/h2.png";

function Baner() {
  return (
    <section
      id="Home"
      className="w-full md:py-20 py-5 pb-20 flex  items-center border-b-[1px] border-b-black overflow-hidden relative"
    >
      <div className="div w-full flex md:flex-row flex-col pl-5">
        <div className="left md:w-1/2 mt-14 w-full md:ml-0 ml-2">
          <div className=" flex flex-col gap-3">
            <h3 className="text-lg font-normal space-x-1 font-titleFont">
              Welcome to my world{" "}
            </h3>
            <h1 className="md:text-6xl text-4xl font-bold text-white capitalize md:break-normal font-bodyFont">
              <h1>Hi, I'm</h1>
              <span className=" font-bold text-designcolor font-bodyFont">
                Karim Hamidi
              </span>
            </h1>
            <h2 className="text-4xl font-bold text-white flex gap-2">
              a{" "}
              <span>
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Red Hat Display",
                  }}
                  cursorColor="#ff014f"
                  effect="fadeIn"
                  delay={1000}
                  duration={2000}
                  startDelay={2000}
                  multiText={[
                    "Full stack developer.",
                    "Compter vision Engineer",
                    "UI designer.",
                    "Fullstack developer.",
                    "Code lover.",
                    "UX designer.",
                  ]}
                  multiTextLoop={true}
                  multiTextDelay={2000}
                  typeSpeed={40}
                  deleteSpeed={30}
                />
              </span>
            </h2>
            <p className=" md:text-base font-bodyFont leading-6 tracking-wide text-sm md:pr-0 ">
              I am a passionate Full Stack Developer and Computer Vision
              Engineer focused on building scalable web applications and
              intelligent AI-powered systems. I specialize in the MERN stack
              with strong experience in Next.js, React.js, Node.js, MongoDB, and
              Tailwind CSS. Beyond web development, I work on machine learning
              and computer vision projects including real-time face recognition,
              attendance systems, object detection, sports analysis, and AI
              automation. I enjoy combining software engineering with artificial
              intelligence to solve real-world problems.
            </p>
          </div>
          <div className="findme md:mt-[8rem] mt-[4rem] flex md:justify-between md:flex-row flex-col md:gap-0 gap-5">
            <div className="left t">
              <h2 className="md:text-center font-titleFont">Find me in</h2>
              <div className=" flex gap-4 mt-5 ">
                <span className="cursor-pointer text-gray-200 md:w-10 md:h-10 w-15 h-15 bg-black/25   inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designcolor cursor-poiter duration-300">
                  <a
                    href="https://www.facebook.com/profile.php?id=100043866711375"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </span>
                <span className="cursor-pointer md:w-10 md:h-10 w-15 h-15 rounded-md shadow-md inline-flex items-center justify-center hover:translate-y-1 bg-black/25 hover:text-designcolor transition-all duration-300   hover:bg/25 text-gray-200">
                  <FaTwitter />
                </span>
                <span className="md:w-10 md:h-10 w-15 h-15 bg-black/25 text-gray-200 inline-flex justify-center items-center p-2 rounded-md shadow-md hover:translate-y-1  hover:text-designcolor transition-all duration-300  cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/karim-hamidi-647883211/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                <span className="cursor-pointer text-gray-200 p-2 md:w-10 md:h-10 w-15 h-15 bg-black/25   inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designcolor cursor-poiter duration-300">
                  <a
                    href="https://github.com/Kairmhamidi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubAlt />
                  </a>
                </span>
              </div>
            </div>
            <div className="right">
              <h3 className="md:text-center font-normal tracking-wider font-titleFont">
                Best skills on
              </h3>
              <div className="best flex gap-3 mt-6 md:pr-0 pr-5">
                <span className="md:w-10 md:h-10 w-15 h-15  rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <FaReact />
                </span>
                <span className="md:w-10 md:h-10 w-15 h-15  rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <FaPython />
                </span>
                <span className="md:w-10 md:h-10 w-15 h-15  rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <FaCss3 />
                </span>
                <span className="md:w-10 md:h-10 w-15 h-15 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiNodedotjs />
                </span>
                <span className="md:w-10 md:h-10 w-15 h-15 p-1 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiExpress />
                </span>
                <span className="md:w-10 md:h-10 w-15 h-15 p-1 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiMongodb />
                </span>
                <span className="md:w-10 md:h-10 w-15 h-15 p-1 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiNextdotjs />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2 flex justify-center items-center relative md:mt-0 mt-10">
          <img
            src={Image}
            alt=""
            className="md:w-[500px] md:h-[680px] w-[300px] mx-auto h-[450px] z-10  border-b-black/25  rounded pb-16"
          />

          <div className="absolute shadow-myshadow rounded md:w-[550px] md:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] b-0 flex justify-center items-center md:left-[16%] md:top-[18%] left-5 top-22 w-[320px] h-[300px]"></div>
        </div>
      </div>
    </section>
  );
}

export default Baner;
