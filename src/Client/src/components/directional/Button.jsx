// src/directional/Button.jsx
import React from "react";

const NavButton = ({ onClick, disabled, title, icon: Icon }) => (
  <div className="relative group">
    <button
      className={`rounded-full p-2 transition-colors duration-200 ${
        disabled
          ? "bg-gray-800 text-gray-600 cursor-not-allowed"
          : "bg-gray-800 text-gray-400 hover:text-white cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon fontSize="small" />
    </button>
    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
      {title}
    </span>
  </div>
);

export default NavButton;
