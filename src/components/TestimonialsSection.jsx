import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

import melissa from "./assets/melissa.png";
import jonathan from "./assets/jonathan.png";
import chris from "./assets/chris.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "We never realised the power of paid advertising until we found Megg. It's doubled our revenue in just a few months, absolutely incredible.",
      name: "Melissa Reid",
      role: "Founder of Blahh",
      avatar: melissa,
    },
    {
      text: "Megg transformed our business overnight. From stale organic growth to explosive growth with Google Ads and it's scaling everyday.",
      name: "Jonathan Day",
      role: "Co-founder of Monday",
      avatar: jonathan,
    },
    {
      text: "Megg turned our marketing game around! With their paid advertising strategies, we saw a remarkable boost in sales that we never thought possible.",
      name: "Chris Wright",
      role: "Founder of Shhhh",
      avatar: chris,
    },
    {
      text: "Megg turned our marketing game around! With their paid advertising strategies, we saw a remarkable boost in sales that we never thought possible.",
      name: "Chris Wright",
      role: "Founder of Shhhh",
      avatar: chris,
    },
    {
      text: "Megg turned our marketing game around! With their paid advertising strategies, we saw a remarkable boost in sales that we never thought possible.",
      name: "Chris Wright",
      role: "Founder of Shhhh",
      avatar: chris,
    },
    {
      text: "Megg turned our marketing game around! With their paid advertising strategies, we saw a remarkable boost in sales that we never thought possible.",
      name: "Chris Wright",
      role: "Founder of Shhhh",
      avatar: chris,
    },
  ];

  return (
    <section className="w-full bg-[#FEFAE0] py-24 px-6 md:px-16 flex flex-col items-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-xl border border-[#ffffff1a] backdrop-blur-sm">
          <span className="font-medium text-[15px] text-black">
            Testimonials
          </span>
        </div>

        <h2 className="text-[42px] md:text-[56px] font-medium text-[#0D0D0D] leading-[1.2]">
          Don’t take my word <br />
          <span className="italic font-[Instrument_Serif] text-[56px]">
            take theirs
          </span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1400px]"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          >
            <TestimonialCard {...t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
