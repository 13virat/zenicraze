import React from "react";
import { motion } from "framer-motion";

export const PrimaryButton = ({ text = "Book a free call", property1 }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 95, 204, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-xl font-medium text-white bg-black border border-[#746d72] transition-all duration-300 hover:bg-[#746d72] hover:text-white shadow-md`}
    >
      {text}
    </motion.button>
  );
};
