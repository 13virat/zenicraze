import React from "react";
import PropTypes from "prop-types";

const TestimonialCard = ({ text, name, role, avatar }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#FEE0B9] to-[#FEE0B9]/90 rounded-3xl p-8 
                 flex flex-col justify-between shadow-sm hover:scale-[1.02] 
                 transition-all duration-300 w-full min-h-[240px]"
    >
      {/* Quote */}
      <p className="text-[#1A1A1A] text-[17px] leading-[28px] font-medium mb-6">
        “{text}”
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 mt-auto">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-11 h-11 rounded-full object-cover border border-[#fff3e1]"
          />
        )}
        <div>
          <h4 className="font-semibold text-[#1A1A1A] text-[15px] leading-tight">
            {name}
          </h4>
          <p className="text-[#4B4B4B] text-[13px]">{role}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default TestimonialCard;
