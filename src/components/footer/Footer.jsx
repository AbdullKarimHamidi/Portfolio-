import React from "react";
import First from "../../assets/karim .png";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { div } from "framer-motion/client";
import { RiWhatsappLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Footer() {
  const whatsappNumber = "+93798534752";
  const messageme = "Hello! I'm interested in your services.";
  return (
    <div>
      <div className="w-full border-t-[2px] border-t-black/20 h-auto grid md:grid-cols-4 grid-cols-1 gap-8 md:py-20 py-10 border-b-[2px] border-b-black/30 md:pl-0 pl-5 overflow-hidden">
        <div className="text-center w-full h-full  md:ml-15">
          <div className="div flex gap-2">
            <img
              src={First}
              className="w-[40px] h-[40px] rounded-full border border-gray-600"
              alt=""
            />
            <h1 className="items-center mt-2.5 text-sm font-semibold">
              Hamidi
            </h1>
          </div>
          <div className="buttons mt-7 flex gap-3 ">
            <button className="w-12 h-12 rounded-md bg-black/20 inline-flex justify-center items-center cursor-pointer hover:text-designcolor duration-300 ">
              <a
                href="https://www.facebook.com/profile.php?id=100043866711375"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="" />
              </a>
            </button>
            <button className="w-12 h-12 rounded-md bg-black-20 bg-black/20 inline-flex justify-center items-center cursor-pointer hover:text-designcolor duration-300">
              <a
                href="https://www.linkedin.com/in/karim-hamidi-647883211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </button>
            <button className="w-12 h-12 rounded-md bg-black-20 bg-black/20 inline-flex justify-center items-center cursor-pointer text hover:text-designcolor duration-300">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  messageme
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <RiWhatsappLine />
              </a>
            </button>
          </div>
        </div>
        <div className=" w-full h-full font-titleFont">
          <div className="data">
            <h1 className="text-sm font-bold text-designcolor uppercase">
              quick link
            </h1>
            <div className="links capitalize  py-5 font-medium text-sm font-titleFont">
              <ul className="flex flex-col gap-5 overflow-hidden">
                <li>
                  <span className="w-full relative group hover:text-designcolor duration-300 cursor-pointer">
                    About{" "}
                    <span className="absolute inline-flex w-full bg-designcolor h-[1px] bottom-0 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative group hover:text-designcolor duration-300 cursor-pointer">
                    portfolio{" "}
                    <span className="absolute inline-flex w-full bg-designcolor h-[1px] bottom-0 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative group hover:text-designcolor duration-300 cursor-pointer">
                    services{" "}
                    <span className="absolute inline-flex w-full bg-designcolor h-[1px] bottom-0 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative group hover:text-designcolor duration-300 cursor-pointer">
                    blog{" "}
                    <span className="absolute inline-flex w-full bg-designcolor h-[1px] bottom-0 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative group hover:text-designcolor duration-300 cursor-pointer">
                    contact{" "}
                    <span className="absolute inline-flex w-full bg-designcolor h-[1px] bottom-0 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full h-full ">
          <div className="data">
            <h1 className="uppercase font-bold text-sm text-designcolor">
              resources
            </h1>
            <div className="w-full h-full uppercase font-bodyFont font-medium">
              <ul className="overflow-hidden flex flex-col gap-5 mt-5 capitalize">
                <li>
                  <span className="w-full relative hover:text-designcolor duration-300 cursor-pointer group">
                    authentication{" "}
                    <span className="absolute inline-flex w-full h-[1px] bg-designcolor top-5 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative hover:text-designcolor duration-300 cursor-pointer group">
                    system status{" "}
                    <span className="absolute inline-flex w-full h-[1px] bg-designcolor top-5 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative hover:text-designcolor duration-300 cursor-pointer group">
                    teams of services{" "}
                    <span className="absolute inline-flex w-full h-[1px] bg-designcolor top-5 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative hover:text-designcolor duration-300 cursor-pointer group">
                    pricing{" "}
                    <span className="absolute inline-flex w-full h-[1px] bg-designcolor top-5 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                  </span>
                </li>
                <li>
                  <span className="w-full relative hover:text-designcolor duration-300 cursor-pointer group">
                    over right{" "}
                    <span className="absolute inline-flex w-full h-[1px] bg-designcolor top-5 -left-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full h-full ">
          <div className="data">
            <p className="uppercase text-sm font-bold text-designcolor">
              developers
            </p>
            <div>
              <ul className="flex flex-col gap-5 overflow-hidden mt-5 capitalize font-bodyFont">
                <li>
                  <span className="relative hover:text-designcolor duration-300 cursor-pointer group">
                    documentation
                    <span className="absolute top-5 left-0 w-full h-[1px] inline-flex bg-designcolor translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="relative hover:text-designcolor duration-300 cursor-pointer group">
                    authentication
                    <span className="absolute top-5 left-0 w-full h-[1px] inline-flex bg-designcolor translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="relative hover:text-designcolor duration-300 cursor-pointer group">
                    API reference
                    <span className="absolute top-5 left-0 w-full h-[1px] inline-flex bg-designcolor translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="relative hover:text-designcolor duration-300 cursor-pointer group">
                    support
                    <span className="absolute top-5 left-0 w-full h-[1px] inline-flex bg-designcolor translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="relative hover:text-designcolor duration-300 cursor-pointer group">
                    open source
                    <span className="absolute top-5 left-0 w-full h-[1px] inline-flex bg-designcolor translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-22 py-5 font-resverfont">
        <p className="text-center text-xs text-gray-400 tracking-wide">
          2025 All rights reserved by Karim Hamidi
        </p>
      </div>
    </div>
  );
}

export default Footer;
