import React from "react";
import PropTypes from "prop-types";

export const ComponentWrapper = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#0d0d0d]/80 ${className}`}
    ></div>
  );
};

ComponentWrapper.propTypes = {
  className: PropTypes.string,
};
