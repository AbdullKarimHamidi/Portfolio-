import React from "react";

function Resumecart({ title, subtitle, result, descriptions }) {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px]  mt-16 relative  bg-black/40 flex justify-center ">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black/60 ">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex justify-center group-hover:bg-designcolor transition-all duration-200"></span>
        </span>
      </div>
      <div className="w-full bg-black/20 hover:bg-black-30 duration-300 rounded-lg px-10  gap-10 shadow-myshadow flex flex-col justify-center items-center ">
        <div className="first w-full flex justify-between">
          <div className="mt-5">
            <h3 className="md:text-2xl text-1xl group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="font-semibold md:text-sm text-xs text-gray-400 group-hover:text-white mt-2 duration-300">
              {subtitle}
            </p>
          </div>
          <div className="div   mt-10">
            <p className="text-designcolor bg-black/20 h-10 w-20   inline-flex justify-center items-center rounded-lg shadow-myshadow text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-gray-400 group-hover:text-white duration-300 text-sm leading-6">
          {descriptions}
        </p>
      </div>
    </div>
  );
}

export default Resumecart;
