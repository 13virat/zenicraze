import React from "react";
import { motion } from "framer-motion";

export const ServicesContainer = () => {
  const services = [
    {
      title: "Paid Ads",
      description: [
        "Our team has decades of combined experience creating",
        "winning Facebook & Instagram campaigns.",
      ],
      gradient:
        "bg-gradient-to-br from-[#FFD1C1] via-[#FECBAA] to-[#F5B7A1]",
      size: "half",
    },
    {
      title: "SEO",
      description: [
        "Put your products in front of active buyers and beat out the",
        "competition with expert Google Shopping services.",
      ],
      gradient:
        "bg-gradient-to-br from-[#FFD1C1] via-[#FECBAA] to-[#F5B7A1]",
      size: "half",
    },
    {
      title: "Social Media Management",
      description: [
        "With over 800 million monthly users in the US, TikTok is the",
        "strongest link between your brand and the next generation.",
      ],
      gradient:
        "bg-gradient-to-br from-[#FBC1E1] via-[#FAD1B1] to-[#F9C5D1]",
      size: "full",
    },
  ];

  return (
    <section className="w-full bg-[#FEFAE0] py-20 px-6 md:px-12 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-xl border border-[#ffffff1a] backdrop-blur-sm">
          <span className="font-medium text-[15px] text-black">Services</span>
        </div>

        <h2 className="text-[42px] md:text-[58px] font-medium text-[#0D0D0D] leading-[1.2]">
          How can we help{" "}
          <span className="italic font-[Instrument_Serif] text-[58px]">you?</span>
        </h2>

        <p className="text-[18px] text-gray-700 mt-4 max-w-[600px] mx-auto">
          Tailored Digital Marketing Services to Fit Your Goals
        </p>
      </motion.div>

      {/* Service Cards Container */}
      <div className="flex flex-col gap-8 w-full max-w-6xl">
        {/* Top Row (Two Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services
            .filter((service) => service.size === "half")
            .map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className={`relative ${service.gradient} rounded-3xl p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-300`}
              >
                <h3 className="text-[36px] font-semibold text-[#0D0D0D] mb-4">
                  {service.title}
                </h3>
                {service.description.map((line, index) => (
                  <p
                    key={index}
                    className="text-[15px] text-[#4D4D4D] leading-[24px]"
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
        </div>

        {/* Bottom Full-Width Card */}
        {services
          .filter((service) => service.size === "full")
          .map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`relative ${service.gradient} rounded-3xl p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-300`}
            >
              <h3 className="text-[36px] font-semibold text-[#0D0D0D] mb-4">
                {service.title}
              </h3>
              {service.description.map((line, index) => (
                <p
                  key={index}
                  className="text-[15px] text-[#4D4D4D] leading-[24px]"
                >
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default ServicesContainer;
