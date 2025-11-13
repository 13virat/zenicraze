import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

import olivia from "./assets/olivia.png";
import phoenix from "./assets/phoenix.png";
import lana from "./assets/lana.png";
import demi from "./assets/demi.png";

const TeamSection = () => {
  const team = [
    {
      image: olivia,
      name: "Olivia Rhye",
      role: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      image: phoenix,
      name: "Phoenix Baker",
      role: "Engineering Manager",
      description:
        "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      image: lana,
      name: "Lana Steiner",
      role: "Product Manager",
      description:
        "Former PM for Linear, Lambda School, and On Deck.",
    },
    {
      image: demi,
      name: "Demi Wilkinson",
      role: "Frontend Developer",
      description:
        "Former frontend dev for Linear, Coinbase, and Postscript.",
    },
  ];

  return (
    <section className="w-full bg-[#FEFAE0] py-24 px-6 md:px-16 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-xl border border-[#ffffff1a] backdrop-blur-sm">
          <span className="font-medium text-[15px] text-black">Team</span>
        </div>

        <h2 className="text-[42px] md:text-[56px] font-medium text-[#0D0D0D] leading-[1.2]">
          Meet the{" "}
          <span className="italic font-[Instrument_Serif] text-[56px]">
            incredible
          </span>{" "}
          team.
        </h2>

        <p className="text-[18px] text-gray-700 mt-4">
          We pride ourselves on being the best of the best, <br />and our team
          encapsulates that.
        </p>

      </motion.div>

      {/* Team Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px]"
      >
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
