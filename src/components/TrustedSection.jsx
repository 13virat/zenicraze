import React from "react";
import { motion } from "framer-motion";

import logo1 from "./assets/c1.png";
import logo2 from "./assets/c2.png";
import logo3 from "./assets/c3.png";
import logo4 from "./assets/c4.png";
import logo5 from "./assets/c5.png";

export const TrustedSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="w-full py-20 bg-[#FEFAE0] overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-gray-800 text-xl md:text-2xl font-semibold mb-12 tracking-wide">
        TRUSTED BY COMPANIES
      </h2>

      {/* Infinite Scroller */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-32 w-max animate-scroll"
          style={{ willChange: "transform" }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index}`}
              className="h-24 sm:h-28 md:h-32 lg:h-36 object-contain opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedSection;
