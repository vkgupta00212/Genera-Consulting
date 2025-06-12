import React, { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import logo from "../../../assets/Genera-logo-dark.svg";
import circlelogo from "../../../assets/genera_circle_logo.svg";
import { BsArrowRight } from 'react-icons/bs';
import logoThree from "../../../assets/I.A.Black.svg";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Only hide if scrolling down and not at top of page
      if (isScrollingDown && currentScrollPos > 10) {
        setVisible(false);
      } 
      // Show if scrolling up or at top of page
      else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Main Header */}
      <header className="w-full bg-white flex justify-between items-center px-6 md:px-6 py-4 shadow-sm">
        <img src={logo} alt="Genera Logo" className="h-10 md:h-12" />
        <div className="flex items-center gap-6">
          <img src={logoThree} alt="Genera Logo" className="h-6 md:h-8" />
          <button className="text-black text-lg md:text-2xl cursor-pointer">
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Secondary Header */}
      <header className="w-[96%] md:w-[99%] mx-auto md:px-4 flex justify-center md:justify-between items-center bg-white shadow-sm rounded-2xl border border-gray-200 mt-2">
        <div className="flex items-center sub-header-img md:hidden lg:block">
          <img src={circlelogo} alt="Logo" className="h-8 w-8" /> 
        </div>
        <div className="lg:mx-0 md:mx-auto md:py-4 md:px-6 px-4 py-2">
          <div className="flex space-x-0.5 md:space-x-4 mx-auto md:ml-auto">
            <button className="btn-swipe w-[180px] contact-btn right-swipe md:w-fit h-11 md:pr-6 cursor-pointer relative overflow-hidden flex justify-center items-center gap-3 bg-white text-black 
                             md:pl-15 py-2 px-1 pl-1 rounded-full text-sm font-bold transition-all duration-500 ease-in-out 
                             hover:bg-black border border-black hover:text-white hover:lg:pl-4 hover:pr-4">
              <span className="absolute left-4 arrow-icon">
                <BsArrowRight className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-1 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1" />
              </span>
              <span className="md:text-sm pl-8 text-[0.6em] px-7 uppercase">contáctanos</span>
            </button>

            <button className="btn-swipe w-[180px] contact-btn right-swipe md:w-fit h-11 md:pr-6 cursor-pointer relative overflow-hidden flex justify-center items-center gap-3 bg-black text-white 
                             md:pl-15 py-2 px-1 pl-1 rounded-full text-sm font-bold transition-all duration-500 ease-in-out 
                             hover:bg-white border border-black hover:text-black hover:lg:pl-4">
              <span className="absolute left-4 arrow-icon">
                <BsArrowRight className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-1 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1" />
              </span>
              <span className="md:text-sm pl-8 text-[0.6em] px-7 capitalize">AGENDAR LLAMADA</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;