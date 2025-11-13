import React from "react";
import { motion } from "framer-motion";

export const PrimaryButtonWrapper = ({
  text = "Learn more",
  onClick = () => {},
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-6 py-3 rounded-xl font-medium text-black border border-black/30 bg-transparent transition-all duration-300 hover:border-[#ff5fcc] hover:text-[#ff5fcc]"
    >
      {text}
    </motion.button>
  );
};
