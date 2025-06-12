import React from 'react'
import { FiMenu } from "react-icons/fi";
import logo from "../../../assets/Genera-logo-dark.svg";
import { FaArrowRight } from 'react-icons/fa';
import circlelogo from "../../../assets/genera_circle_logo.svg";
import { BsArrowRight } from 'react-icons/bs';
import logoThree from "../../../assets/I.A.Black.svg";
const Header = () => {
  return (
    <div>
      <header className=" w-full fixed bg-white top-0 flex justify-between items-center px-6 md:px-6 py-4  z-10 shadow-sm">
        <img src={logo} alt="Genera Logo" className="h-10 md:h-12" />

        <div className="flex items-center gap-6">
        <img src={logoThree} alt="Genera Logo" className="h-6 md:h-8" />
  
          <button className="text-black text-lg md:text-2xl cursor-pointer">
            <FiMenu />
          </button>
        </div>
      </header>
      <header className="w-[96%] md:w-[99%] fixed md:px-4 flex justify-center md:justify-between items-center bg-white shadow-sm top-22 rounded-2xl left-2 md:left-2.5 z-50 border-1 border-gray-200">
          <div className="flex items-center sub-header-img md:hidden lg:block">
            <img src={circlelogo} alt="Logo" className="h-8 w-8" /> 
          </div>
        <div className="lg:mx-0 md:mx-auto md:py-4 md:px-6  px-4 py-2">
          <div className="flex space-x-0.5 md:space-x-4 mx-auto md:ml-auto ">
          <button className="btn-swipe  w-[180px] contact-btn right-swipe md:w-fit h-11 md:pr-6 cursor-pointer relative overflow-hidden flex justify-center items-center gap-3 bg-white text-black 
                                 md:pl-15 py-2 px-1 pl-1
                                 rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-black border-1
                                 border-black hover:text-white hover:lg:pl-4  hover:pr-4">
              <span className="absolute left-4 arrow-icon">
                <BsArrowRight
                  className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-1
                                                          w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1"
                />

              </span>
              <span className="md:text-sm pl-8 text-[0.6em] px-7 uppercase">contáctanos</span>
            </button>

            <button className="btn-swipe  w-[180px] contact-btn right-swipe md:w-fit h-11 md:pr-6 cursor-pointer relative overflow-hidden flex justify-center items-center gap-3 bg-black text-white 
                                 md:pl-15 py-2 px-1 pl-1
                                 rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-white border-1
                                 border-black hover:text-black hover:lg:pl-4 ">
              <span className="absolute left-4 arrow-icon">
                <BsArrowRight
                  className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-1
                                                          w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1"
                />

              </span>
              <span className="md:text-sm pl-8 text-[0.6em] px-7 capitalize">AGENDAR LLAMADA</span>

            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
