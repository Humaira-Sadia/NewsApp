import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-2 flex justify-center bg-[#B99470] h-16 text-sm sm:text-lg sm:h-24 text-white items-center tracking-widest">
      Designed by <span className="font-bold mx-1">Humaira |</span>
      <span className="flex items-center gap-1">
        Copyright
        <FaRegCopyright />
        {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
