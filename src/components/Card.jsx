import React from "react";
import PropTypes from "prop-types";

export const Card = ({
  number = "01",
  title = "Social Media Strategy",
  description = "Build a community that loves your brand.",
  vector = "vector-1.svg",
  className = "",
}) => {
  return (
    <div
      className={`flex w-[265px] items-center gap-2.5 pt-[49px] pb-[11px] px-2 relative 
                  bg-[#fee0b9] rounded-[20px] overflow-hidden shadow-md hover:shadow-xl 
                  transition-all duration-300 ${className}`}
    >
      <div className="relative w-[249px] h-[284px] bg-[#fefae0] rounded-2xl">
        {/* Top Number with Vector */}
        <div className="absolute top-[17px] left-[13px] w-9 h-[35px]">
          <div className="absolute top-px left-1.5 font-inter font-medium text-black text-[18.8px] text-center tracking-[-0.40px] leading-[30px] whitespace-nowrap">
            {number}
          </div>

          <img
            className="absolute top-0 left-0 w-[34px] h-9"
            alt="Vector"
            src={vector}
          />
        </div>

        {/* Title */}
        <div className="absolute top-[190px] left-[13px] w-56 font-inter font-semibold text-black text-[18.8px] tracking-[-0.40px] leading-[30px]">
          {title}
        </div>

        {/* Description */}
        <p className="absolute top-[226px] left-[13px] w-[209px] text-gray-600 text-[15px] leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
};

// ✅ Prop validation (for professional React codebases)
Card.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  vector: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
