import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import SP from "../../assets/tm.jpg";
import SP2 from "../../assets/sp4.jpg";
import SP3 from "../../assets/sp3.jpg";

import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const swiperRef = useRef(null);

  const testimonialsData = [
    {
      image: SP,
      name: "Zabiullah Rahmani",
      role: "Operations Officer",
      location: "Herat, Afghanistan",
      projectTitle: "Learning Management System",
      duration: "July 2023 - August 2024",
      rating: 5,
      feedback:
        "The Learning Management System we implemented has been a massive success in transforming how our teams approach professional development. It has made training accessible, tracking efficient, and onboarding highly personalized. This architecture continues to play a key role in scale operations at Super Cola.",
    },
    {
      image: SP2,
      name: "Asadullah Frotan",
      role: "Technical Manager",
      location: "Herat, Afghanistan",
      projectTitle: "AI Face Attendance & Authentication",
      duration: "March 2024",
      rating: 5,
      feedback:
        "The automated authentication system completely modernized our daily attendance tracking. By substituting manual processing with secure real-time verification and liveness checks, it eliminated credential vulnerability and system delays. It is a highly optimized engineering piece.",
    },
    {
      image: SP3,
      name: "John Anderson",
      role: "E-Commerce Founder",
      location: "Remote Client",
      projectTitle: "Next.js Full-Stack Platform",
      duration: "March 2024 - July 2025",
      rating: 5,
      feedback:
        "The production-ready e-commerce site exceeded expectations with its lightning-fast load times and smooth user experience. The database layer and clean backend configurations handle data flows flawlessly without drop-offs. It's transformed our operational growth.",
    },
  ];

  return (
    <section id="Testimonial" className="w-full py-20 border-b border-black/20">
      {/* Header and Controls Row */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-end mb-12 relative z-20">
        <div>
          <p className="text-xs uppercase text-designcolor tracking-[4px] font-medium mb-2">
            What Clients Say
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Testimonials
          </h2>
        </div>

        {/* Custom Navigation Controls outside Swiper bounds for clean clickable actions */}
        <div className="flex gap-4">
          <button
            aria-label="Previous slide"
            className="w-12 h-12 inline-flex justify-center items-center bg-black/40 border border-white/5 text-gray-400 hover:text-designcolor rounded-xl shadow-md transition-all duration-300 hover:border-designcolor/30 backdrop-blur-sm cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            aria-label="Next slide"
            className="w-12 h-12 inline-flex justify-center items-center bg-black/40 border border-white/5 text-gray-400 hover:text-designcolor rounded-xl shadow-md transition-all duration-300 hover:border-designcolor/30 backdrop-blur-sm cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Slider Carousel Container */}
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="pb-14"
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          speed={600}
          modules={[Pagination]}
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
                
                {/* Left Card: Profile Details */}
                <div className="w-full md:w-[35%] bg-gradient-to-br from-[#1e2024] to-[#141517] border border-white/5 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-full h-72 rounded-xl overflow-hidden bg-black/10 mb-6">
                    <img
                      src={item.image}
                      alt={`Portrait of ${item.name}`}
                      className="w-full h-full object-cover scale-x-[-1]"
                    />
                  </div>
                  <p className="text-xs uppercase font-bold text-designcolor tracking-widest">
                    {item.location}
                  </p>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.role}
                  </p>
                </div>

                {/* Right Card: Quote Content Block */}
                <div className="w-full md:w-[63%] flex flex-col justify-between items-start gap-4">
                  
                  {/* Subtle Accent Icon */}
                  <div className="text-gray-800/40 select-none self-end md:self-start">
                    <FaQuoteRight size={56} className="opacity-20" />
                  </div>

                  <div className="w-full bg-gradient-to-br from-[#1e2024] to-[#141517] border border-white/5 p-6 md:p-10 rounded-2xl shadow-xl flex-grow flex flex-col justify-center">
                    
                    {/* Project Meta Info */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-6 mb-6">
                      <div>
                        <h4 className="font-bold text-xl text-white tracking-wide">
                          {item.projectTitle}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1.5 font-medium tracking-wider uppercase">
                          {item.duration}
                        </p>
                      </div>
                      
                      {/* Interactive Stars Row */}
                      <div className="flex gap-1 items-center shrink-0" aria-label={`Rated ${item.rating} stars`}>
                        {[...Array(item.rating)].map((_, i) => (
                          <AiFillStar key={i} className="text-amber-500" size={18} />
                        ))}
                      </div>
                    </div>

                    {/* Feedback Text Area */}
                    <p className="text-gray-300 font-normal text-base leading-relaxed">
                      "{item.feedback}"
                    </p>
                    
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;