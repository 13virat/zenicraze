import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "./PrimaryButton";
import { PrimaryButtonWrapper } from "./PrimaryButtonWrapper";
import Gradient from "./assets/Gradient.svg";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-black px-4 md:px-0 overflow-hidden">
      {/* Heading Section */}
     <div
  className="absolute top-[-490px] left-[-502px] w-[851px] h-[869px]"
>
  <img src={Gradient} alt="" />
</div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] font-medium leading-tight text-[#0D0D0D] dark:text-white max-w-[900px]"
      >
        <span className="block  font-medium">Skyrocket Your 
        <span className="italic font-italic Serif text-[4.5rem] md:text-[5rem] ">Brand</span></span>
        <span className="block mt-2 text-[2.5rem] md:text-[3rem]">
          with Proven Digital 
        </span>
        <span className="block mt-2 text-[2.5rem] md:text-[3rem]">Marketing Strategies</span>
        
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-center max-w-[700px] text-black text-[1rem] md:text-[1.1rem] leading-relaxed"
      >
        We help startups, small businesses, and personal brands attract more
        leads and convert them into paying customers.
      </motion.p>

      {/* Clients Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex items-center justify-center gap-3 mt-10"
      >
        {/* Avatar Group */}
        <div className="flex -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="client"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
          />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="client"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
          />
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="client"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
          />
        </div>
        <p className="text-gray-400 text-[15px] font-medium">
          80+ happy clients
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        <PrimaryButton property1="default" />
        <PrimaryButtonWrapper />
      </motion.div>

     <div className="relative h-[150px] bottom-[500px] -right-[350px] z-[-1]">
  <img src={Gradient} alt="" />
</div>



    </section>

  );
};
