import { div } from 'framer-motion/client'
import React from 'react'
import { HiArrowRight } from "react-icons/hi";

export default function Cart({title,desc,icon}) {
  return (
    <div className="h-80  px-12 rounded-lg shadow-myshadow flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group  hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 ">
      <div className='h-72 overflow-y-hidden'>
        <div className="flex gap-6 flex-col w-full translate-y-14 hover:translate-y-0 transition-transform duration-300">
          <div>
            <span className="text-designcolor text-5xl">{icon}</span>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-gray-200 ">{title}</h1>
            <p className="base">{desc}</p>
          </div>
          <div className=" text-designcolor font-bold text-2xl">
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}


 <div className="features w-1/3 "></div>;