import React from "react";
import { motion } from "framer-motion";
import img1 from "./assets/award1.png";
import img2 from "./assets/award2.png";
import img3 from "./assets/award3.png";

const AwardsSection = () => {
  const awards = [
    {
      year: "2024",
      title: "AWARD FOR BEST BC CONTENT 2024",
      tag: "ADS",
    },
    {
      year: "2024",
      title: "TOP 05 SOCIAL MEDIA MARKETING",
      image: img1,
    },
    {
      year: "2024",
      title: "BEST AI POWERED CONTENT STRATEGY",
      tag: "MARKETING",
    },
    {
      year: "2024",
      title: "TOP 05 SOCIAL MEDIA MARKETING",
      image: img2,
    },
    {
      year: "2024",
      title: "BEST DESIGN FUNCTIONALITY AWARD",
      tag: "SEO",
    },
    {
      year: "2024",
      title: "TOP 05 SOCIAL MEDIA MARKETING",
      image: img3,
    },
  ];

  return (
    <section className="w-full bg-[#FEFAE0] py-24 px-6 md:px-16 flex flex-col items-center">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[42px] md:text-[56px] font-medium text-[#0D0D0D] leading-[1.2]">
          Awards for{" "}
          <span className="italic font-[Instrument_Serif] text-[56px]">
            standing out
          </span>
        </h2>
      </motion.div>

      {/* Awards List */}
      <div className="w-full max-w-5xl divide-y divide-[#E2E2E2]/90">
        {awards.map((award, i) => {
          const hasImage = !!award.image;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`flex flex-col sm:flex-row sm:items-center justify-between py-8 ${
                hasImage ? "px-4 md:px-24" : ""
              }`}
            >
              {/* Left side — Year and Title */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <span className="text-[#555555] text-[15px] font-medium w-[60px]">
                  {award.year}
                </span>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0D0D0D] tracking-[-0.2px]">
                  {award.title}
                </h3>
              </div>

              {/* Right side — Tag or Image */}
              <div className="mt-4 sm:mt-0 flex items-center justify-end gap-4">
                {award.tag && (
                  <span className="px-4 py-1 border border-[#d1d1d1] rounded-full text-[13px] uppercase text-[#2b2b2b] font-medium tracking-wide bg-white/60 backdrop-blur-sm hover:bg-[#fffaf0] transition">
                    {award.tag}
                  </span>
                )}

                {award.image && (
                  <div className="w-[220px] h-[130px] overflow-hidden shadow-sm">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AwardsSection;
