import React from "react";
import PropTypes from "prop-types";

export const Component = ({ text, href = "#" }) => {
  return (
    <li>
      <a
        href={href}
        className="hover:text-white transition-colors duration-200"
      >
        {text}
      </a>
    </li>
  );
};

Component.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};
