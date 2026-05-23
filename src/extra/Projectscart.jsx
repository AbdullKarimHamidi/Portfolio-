import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Example fallback icons

function Projectscart({
  title,
  description,
  firsticon,
  secondicon,
  image,
  github_address,
  live_address, // Added for semantic correctness
}) {
  return (
    <article className="w-full h-full min-h-[480px] flex flex-col justify-between p-6 rounded-2xl shadow-xl bg-gradient-to-br from-bodyColor to-[#1e2024] border border-white/5 group hover:from-gray-900 hover:to-[#141517] transition-all duration-500 ease-in-out">
      
      {/* Image Container */}
      <div className="w-full h-52 rounded-xl overflow-hidden mb-6 relative bg-black/20">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Header & Links */}
          <div className="flex justify-between items-start gap-4">
            <h3 className="tracking-wide text-designcolor font-bold text-lg md:text-xl line-clamp-2">
              {title}
            </h3>
            
            <div className="flex gap-3 items-center shrink-0">
              {/* GitHub Link */}
              {github_address && (
                <a
                  href={github_address}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code on GitHub`}
                  className="w-9 h-9 flex justify-center items-center rounded-full bg-black/40 text-gray-400 hover:text-red-500 border border-white/5 hover:border-red-500/30 shadow-md transition-all duration-300 backdrop-blur-sm"
                >
                  {firsticon || <FaGithub size={16} />}
                </a>
              )}

              {/* Project Live Link / Action */}
              <a
                href={live_address || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}
                className="w-9 h-9 flex justify-center items-center rounded-full bg-black/40 text-gray-400 hover:text-designcolor border border-white/5 hover:border-designcolor/30 shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                {secondicon || <FaExternalLinkAlt size={14} />}
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 font-normal text-sm leading-relaxed mt-4 line-clamp-4 normal-case">
            {description}
          </p>
        </div>
      </div>

    </article>
  );
}

export default Projectscart;