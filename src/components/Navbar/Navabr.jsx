import React, { useState } from "react";
import First from "../../assets/karim .png";
import { Navlinks } from "../../Constants/data";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import { FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full h-20 bg-bodyColor border-b-[1px] border-b-gray-400 font-bodyFont overflow-hidden">
      <div className="max-w-8xl mx-auto flex justify-between items-center p-4">
        <div className="flex gap-2">
          <img
            src={First}
            className="rounded-full w-12 h-12 border-2 border-gray-500 bg-cover"
          />
          <h1 className="mt-3 font-bold">Hamidi</h1>
        </div>
        <ul className="md:flex hidden items-center gap-10">
          {Navlinks.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="cursor-pointer tracking-normal hover:text-designcolor transition-all duration-300 ease-in-out"
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowmenu(!showmenu)}
          className="text-xl text-designcolor inline-flex justify-center items-center w-10 h-10 md:hidden bg-black/30 rounded-full cursor-pointer"
        >
          <IoMdMenu />
        </span>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={showmenu ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-2 w-[80%] h-full bg-gray-900 p-4 scrollbar-hidden z-50 md:hidden block"
        >
          <div className="top flex justify-between mt-6 mb-4">
            <div className="title flex gap-4">
              <img
                src={First}
                className="rounded-full w-12 h-12 border-2 border-gray-500 bg-cover"
              />
              <h1 className="mt-3 font-bodyFont">Hamidi</h1>
            </div>
            <motion.button
              onClick={() => setShowmenu(false)}
              className="text-white text-2xl cursor-pointer hover:text-designcolor duration-300"
              whileTap={{ x: -50, opacity: 0 }} // Moves left and fades out when closing
              transition={{ duration: 0.3 }}
            >
              <AiOutlineClose />
            </motion.button>
          </div>
          <div>
            <p className="text-xs leading-5">
              I am a MERN stack web developer skilled in Next.js, Node.js,
              React.js, MongoDB, Tailwind CSS, and AI integration. I build
              scalable web applications and have experience in authentication
              systems, LMS, and AI projects. Passionate about machine learning,
              NLP, and computer vision.
            </p>
          </div>

          <div className="text-xs mt-12">
            <ul className="flex flex-col font-bodyFont mt-5 gap-5">
              {Navlinks.map(({ _id, title, link }) => (
                <li key={_id}>
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setShowmenu(false)}
                    className="text-xl hover:text-designcolor transition-all"
                  >
                    <h1 className="text-sm cursor-pointer">{title}</h1>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="butons flex gap-5 mt-17 flex-col">
            <div className="title">
              <h1 className="uppercase">Find me in</h1>
            </div>
            <div className="links flex gap-7">
              <span className="cursor-pointer text-gray-200 md:w-10 md:h-10 w-15 h-15 bg-black/25 inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designcolor duration-300 border-b-[1px] border-b-gray-600 shadow-gray-800">
                <a
                  href="https://www.facebook.com/profile.php?id=100043866711375"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span className="md:w-10 md:h-10 w-15 h-15 bg-black/25 text-gray-200 inline-flex justify-center items-center p-2 rounded-md shadow-md hover:translate-y-1 hover:text-designcolor transition-all duration-300 cursor-pointer border-b-[1px] shadow-gray-800 border-b-gray-600">
                <a
                  href="https://www.linkedin.com/in/karim-hamidi-647883211/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span className="cursor-pointer text-gray-200 p-2 md:w-10 md:h-10 w-15 h-15 bg-black/25 inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designcolor duration-300 border-b-[1px] border-b-gray-600 shadow-gray-800">
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
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
