import React from "react";
import PropTypes from "prop-types";
import { FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

const TeamCard = ({ image, name, role, description }) => {
  return (
    <div
      className="bg-[#FEFAE0]/90 rounded-3xl border border-[#FFFBE8] shadow-[6px_4px_36px_rgba(0,0,0,0.08)]
                 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Avatar */}
      <div className="w-20 h-20 mb-5">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover border border-[#f5eecb]"
        />
      </div>

      {/* Name and Role */}
      <h3 className="text-[#0D0D0D] text-[18px] font-semibold">{name}</h3>
      <p className="text-gray-600 text-[15px] mb-3">{role}</p>

      {/* Description */}
      <p className="text-[#333] text-[14px] leading-relaxed mb-6 max-w-[240px]">
        {description}
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 text-[#0D0D0D]/80 text-lg">
        <FaTwitter className="hover:text-black cursor-pointer transition-colors" />
        <FaLinkedin className="hover:text-black cursor-pointer transition-colors" />
        <FaDribbble className="hover:text-black cursor-pointer transition-colors" />
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TeamCard;
