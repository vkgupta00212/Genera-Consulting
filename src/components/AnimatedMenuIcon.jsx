"use client";
import React, { useState } from "react";
import { Menu, ArrowLeft } from "lucide-react";
import MenuIcon from "../assets/menu.svg";
import WhiteMenuIcon from "../assets/Frame_D.svg";
import { useSideNav } from "../hooks/useSideNav";
{
  /* <img src={color === 'black' ? MenuIcon : WhiteMenuIcon} alt="" className={`w-[24.85px] h-[19.33px] sm:w-[31px] sm:h-[24.11px]'`} /> */
}

const HamburgurToLeftArrow = ({ color = "black" }) => {
  const { toggleSidenav } = useSideNav();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleSidenav}
    >
      <div
        className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
          isHovered ? "opacity-0 translate-x-2" : "opacity-100"
        }`}
      >
        <img
          src={color === "black" ? MenuIcon : WhiteMenuIcon}
          alt=""
          className="w-6 h-6 object-contain"
        />
      </div>
      <div
        className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
          isHovered ? "opacity-100" : "opacity-0 -translate-x-2"
        }`}
      >
        <ArrowLeft
          className={`w-6 h-6 ${
            color === "black" ? "text-black" : "text-white"
          }`}
        />
      </div>
    </div>
  );
};

export default HamburgurToLeftArrow;
