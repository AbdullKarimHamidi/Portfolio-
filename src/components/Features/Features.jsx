import React from "react";
import Cart from "../../extra/Cart";
import {
  FaBars,
  FaDeaf,
  FaGlobe,
  FaHandPointer,
  FaMobile,
  FaWindows,
} from "react-icons/fa";
import {
  AiFillApi,
  AiFillAppstore,
  AiFillGoogleCircle,
  AiFillRobot,
  AiOutlineBarChart,
  AiOutlineGlobal,
  AiOutlineLineChart,
  AiOutlinePartition,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { BiCloud } from "react-icons/bi";

import { MdOutlineSmartphone } from "react-icons/md";
import { FiLayers } from "react-icons/fi";

function Features() {
  return (
    <section
      id="Features"
      className="w-full  pb-20 borer-b-[1px] border-b-black ml-3 md:pr-4 pr-7 "
    >
      <div className="flex flex-col gap-5 font-titleFont mb-12 ">
        <h3 className="text-sm text-designcolor tracking-wide capitalize">
          Features
        </h3>
        <h1 className="text-5xl font-titleFont text-gray-300 font-bold">
          What i do
        </h1>
      </div>

      <div className="div grid md:grid-cols-3 gap-10 md:pr-0 pr-4 md:pl-0 pl-2">
        <Cart
          title="Full-Stack Developer"
          desc="Building scalable and modern web applications using MERN stack technologies, focusing on responsive design, secure backend systems, APIs, and high-performance user experiences.

"
          icon={<FaLaptopCode />}
        />
        <Cart
          title="Computer Vision Engineer"
          desc="Developing intelligent AI systems for real-time detection, face recognition, object tracking, and video analysis using machine learning, deep learning, and computer vision technologies."
          icon={<FaCodeBranch />}
        />
        <Cart
          title="AI Developer "
          desc=" Creating AI-powered applications using machine learning, NLP, and deep learning to build intelligent automation and real-world smart solutions."
          icon={<MdOutlineVideoLibrary />}
        />
        <Cart
          title="Python Developer"
          desc="Building efficient backend systems, automation tools, AI applications, and data-driven solutions using Python and modern development frameworks."
          icon={<SiTensorflow />}
        />
        <Cart
          title="Web App Developer"
          desc="Designing and developing responsive, scalable, and user-friendly web applications with modern frontend and backend technologies."
          icon={<FaChartLine />}
        />
        <Cart
          title="SaaS Developer"
          desc="Building scalable Software-as-a-Service platforms with secure authentication, cloud-based architecture, and modern user experiences."
          icon={<BiCloud />}
        />
      </div>
    </section>
  );
}

export default Features;
