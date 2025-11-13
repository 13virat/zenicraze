import React from "react";
import { Component } from "./Component";
import { ComponentWrapper } from "./ComponentWrapper";

export const Footer = () => {
  return (
    <footer
      className="relative w-full py-16 px-6 md:px-20 flex flex-col items-center justify-center text-white
                 bg-[rgba(0,0,0,0.65)] backdrop-blur-[14px] backdrop-saturate-[180%]
                 border-t border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Subtle gradient overlay */}
      <ComponentWrapper className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">
        {/* Left Section */}
        <div className="flex-1">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="text-4xl font-bold tracking-tight">M</div>
            <div className="text-xl font-semibold -mt-1">egg</div>
          </div>

          {/* Newsletter */}
          <h3 className="text-[18px] font-medium mb-2">Join our newsletter</h3>
          <p className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-md">
            Sign up to our mailing list below and be the first to know about new
            updates. Don’t worry, we hate spam too.
          </p>

          {/* Email Input */}
          <div className="flex w-full max-w-md bg-white/5 rounded-xl border border-white/15 overflow-hidden backdrop-blur-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-white/90 text-black px-6 py-3 font-medium hover:bg-white transition">
              Get Notified
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-16 md:gap-24">
          {/* Pages */}
          <div>
            <h4 className="font-semibold text-[16px] mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-300 text-[15px]">
              <Component text="About" />
              <Component text="Blog" />
              <Component text="Services" />
              <Component text="404" />
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-[16px] mb-4">Information</h4>
            <ul className="space-y-2 text-gray-300 text-[15px]">
              <Component text="FAQ" />
              <Component text="Contact" />
              <Component text="Legal" />
              <Component text="Coming Soon" />
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      {/* <div className="w-full h-px bg-white/10 mt-12"></div> */}

      {/* Bottom Text */}
      {/* <p className="text-gray-500 text-sm mt-4 text-center">
        © 2025 Megg. All rights reserved.
      </p> */}
    </footer>
  );
};
