import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import logo from "./assets/logo.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-6 left-0 right-0 z-50 flex justify-between items-center
        max-w-5xl mx-auto px-6 py-4 rounded-2xl border border-white/20 transition-all duration-500 
        ${scrolled
          ? "bg-[#fefae0]/95 shadow-lg backdrop-blur-xl scale-[0.98]"
          : "bg-[#fefae0]/90 shadow-[0px_4px_24px_rgba(245,239,205,0.5)] backdrop-blur-md"
        }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="logo" className="h-8" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 text-[14px] font-medium text-black">
        {["About", "Result", "Services", "Team", "Pages"].map((item) => (
          <li key={item} className="hover:text-gray-700 transition cursor-pointer">
            {item}
          </li>
        ))}
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform">
          Book a call
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-black"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 bg-[#fefae0]/90 
                       border border-white/20 shadow-lg rounded-xl p-4 flex flex-col 
                       items-center space-y-3 w-[90%] backdrop-blur-md md:hidden"
          >
            {["About", "Result", "Services", "Team", "Pages"].map((item) => (
              <span key={item} className="text-black hover:text-gray-700 transition">
                {item}
              </span>
            ))}
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
              Book a call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;
