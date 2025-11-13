import React from "react";
import PropTypes from "prop-types";

const ResultCard = ({
  image,
  metrics = [],
  name,
  role,
}) => {
  return (
    <div
      className="bg-[#FEFAE0]/90 rounded-3xl p-6 shadow-[6px_4px_36px_rgba(0,0,0,0.1)]
                 border border-[#fffbe8] flex flex-col justify-between 
                 min-w-[320px] sm:min-w-[360px] md:min-w-[380px] flex-shrink-0 
                 transition-all duration-300 hover:scale-[1.02] h-[480px]"
    >
      {/* Image */}
      <div className="w-full h-64 rounded-2xl overflow-hidden mb-5 flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Metrics (2 per row grid) */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#FFFBE8] px-3 py-2 rounded-md text-sm font-medium text-[#0D0D0D]
                       whitespace-nowrap text-ellipsis overflow-hidden"
          >
            {metric}
          </div>
        ))}
      </div>

      {/* Author Info */}
      <div className="mt-auto">
        <h4 className="font-semibold text-[#0D0D0D] text-[14px] leading-tight">
          {name}
        </h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

ResultCard.propTypes = {
  image: PropTypes.string.isRequired,
  metrics: PropTypes.array,
  name: PropTypes.string,
  role: PropTypes.string,
};

export default ResultCard;
