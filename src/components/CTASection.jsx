import React from "react";

const CTASection = () => {
  return (
    <section
      className="w-full flex justify-center items-center py-20 px-4 
                "
    >
      <div
        className="w-full max-w-4xl text-center bg-[#FCE4BD] rounded-3xl 
                   border border-[#0000001a] shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                   py-16 px-6 md:px-12"
      >
        {/* Title */}
        <h2 className="text-[36px] md:text-[54px] font-semibold text-[#0D0D0D] leading-tight">
          Ready to scale your{" "}
          <br />
          <br className="block md:hidden" />
          brand to{" "}
          <span className="italic font-[Instrument_Serif] font-normal">
            new heights?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-[#0D0D0D]/70 text-[16px] md:text-[18px] mt-6 max-w-[600px] mx-auto leading-relaxed">
          If you want to achieve ground-breaking growth with increased sales and
          profitability with paid ads, then you're in the right place.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button
            className="bg-[#0D0D0D] text-white px-6 py-3 rounded-xl text-[15px] font-medium 
                       hover:bg-black transition-all duration-300 
                       shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
          >
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
