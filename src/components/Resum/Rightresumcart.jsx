
import React from "react";

function Rightresumcart({title,subtitle,result,descriptions}) {
  return (
    <div className="w-full h-1/3 group flex  ">
      <div className=" w-full bg-black/20 group-hover:bg-black/25 transition-colors ease-in-out duration-300 rounded-lg flex justify-center items-center shadow-myshadow">
        <div className="flex flex-col ml-10 mr-3 gap-10  text-gray-400 group-hover:text-white duration-500">
          <div className="top w-full flex justify-between ">
            <div className="">
              <h3 className="md:text-2xl text-1xl mb-3">{title}</h3>
              <p className="md:text-sm text-xs  tracking-wide font-semibold">
                {subtitle}
              </p>
            </div>
            <div>
              <p className="text-sm  tracking-wide w-20 h-10 bg-black/40 inline-flex justify-center items-center p-2 rounded-lg font-semibold text-designcolor shadow-myshadow  ">
                {result}
              </p>
            </div>
          </div>
          <p className="text-sm leading-6">{descriptions}</p>
        </div>
      </div>
      <div className="w-10 h-[6px] bg-black/20 relative mt-16">
        <span className="absolute w-5 h-5 rounded-full bg-black/30  -right-3 -top-2">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex justify-center group-hover:bg-designcolor transition-all duration-200 items-center ml-1 mb-0.5"></span>
        </span>
      </div>
    </div>
  );
}

export default Rightresumcart;
