import React, { useState } from "react";
import axios from "axios";
import { Component } from "./Component";
import { ComponentWrapper } from "./ComponentWrapper";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/newsletter/subscribe/",
        { email }
      );

      alert(res.data.message);
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <footer
      className="relative w-full py-16 px-6 md:px-20 flex flex-col items-center justify-center text-white
                 bg-[rgba(0,0,0,0.65)] backdrop-blur-[14px] backdrop-saturate-[180%]
                 border-t border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
    >
      <ComponentWrapper className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-4xl font-bold tracking-tight">M</div>
            <div className="text-xl font-semibold -mt-1">egg</div>
          </div>

          <h3 className="text-[18px] font-medium mb-2">Join our newsletter</h3>
          <p className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-md">
            Sign up to our mailing list below and be the first to know about new
            updates. Don’t worry, we hate spam too.
          </p>

          {/* EMAIL INPUT + BUTTON */}
          <div className="flex w-full max-w-md bg-white/5 rounded-xl border border-white/15 overflow-hidden backdrop-blur-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}                     // <—— added
              onChange={(e) => setEmail(e.target.value)} // <—— added
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={handleSubscribe}          // <—— added
              className="bg-white/90 text-black px-6 py-3 font-medium hover:bg-white transition"
            >
              Get Notified
            </button>
          </div>
        </div>

        {/* Right section unchanged */}
        <div className="flex flex-wrap gap-16 md:gap-24">
          <div>
            <h4 className="font-semibold text-[16px] mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-300 text-[15px]">
              <Component text="About" />
              <Component text="Blog" />
              <Component text="Services" />
              <Component text="404" />
            </ul>
          </div>

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
    </footer>
  );
};
