import React from "react";
import Card from "./Card";
import vector from "./assets/cardVector.svg"; // 🟡 Common icon used for all cards

export const AboutUsContainer = () => {
  const services = [
    {
      number: "01",
      title: "Social Media Strategy",
      description: "Build a community that loves your brand.",
    },
    {
      number: "02",
      title: "SEO & Content Marketing",
      description: "Rank higher. Get found. Stay relevant.",
    },
    {
      number: "03",
      title: "Performance Marketing",
      description: "Data-driven paid ads that actually convert.",
    },
    {
      number: "04",
      title: "Email Marketing",
      description: "Automations and campaigns that nurture and convert.",
    },
  ];

  return (
    <section className="w-full bg-[#FEFAE0] py-20 px-6 md:px-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-xl border border-[#ffffff1a] backdrop-blur-sm">
          <span className="font-medium text-[15px] text-black">About Us</span>
        </div>

        <h2 className="text-[42px] md:text-[58px] font-medium text-[#0D0D0D] leading-[1.2]">
          What we{" "}
          <span className="italic font-[Instrument_Serif] text-[58px]">do!</span>
        </h2>

        <p className="text-[18px] text-gray-700 mt-4 max-w-[600px] mx-auto">
          We specialize in helping small and mid-sized businesses scale through:
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((item, i) => (
          <Card
            key={i}
            number={item.number}
            title={item.title}
            description={item.description}
            vector={vector}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUsContainer;
