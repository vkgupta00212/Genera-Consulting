import React from "react";
import Ellipse7 from "../../../assets/Ellipse7.svg";
import Ellipse9 from "../../../assets/Ellipse9.svg";
import { BsArrowRight } from "react-icons/bs";
import ContactCard1 from "../../LandingPage2.4/sections/ContactCard1";
import { div } from "framer-motion/client";

export const Form = () => {
  return (
    // <div className=" bg-black text-white px-[20px] md:px-[40px] py-[80px] md:py-[50px] flex flex-col lg:flex-row items-start ">
    //   {/* Left Column */}
    //   <div className="lg:w-1/2 flex flex-col justify-center py-[80px] md:py-[130px] border-2 border-red-500 ">
    //     <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FDFDBF] via-[#F8DA79] to-[#C19C45] leading-snug">
    //       IMPULSA PROYECTOS DE
    //       <br />
    //       ALTO IMPACTO Y CONSIGUE SOLUCIONES
    //       <br />
    //       ESTRATÉGICAS <br /> PERSONALIZADAS.
    //     </h1>
    //   </div>

    //   {/* Right Column (Ellipse BG + Form) */}
    //   <div className="lg:w-2/3 relative overflow-visible flex justify-end items-end border-2 border-green-500 ">
    //     {/* Ellipse Background covering the entire right column */}
    //     <img
    //       src={Ellipse7}
    //       alt="Ellipse Background"
    //       className="absolute inset-0 w-full h-full hidden md:block "
    //     />

    //     <img
    //       src={Ellipse9}
    //       alt="Ellipse Background"
    //       className="absolute inset-0 w-full h-full md:hidden -mt-10"
    //     />

    //     {/* Form Container on top */}
    //     <div className="relative bg-[#111111] text-white rounded-[50px] my-[150px] ">
    //       <ContactCard1/>
    //     </div>
    //   </div>
    // </div>

    <div className="relative overflow-hidden">

      <img
        src={Ellipse7}
        alt="Ellipse Background"
        className="absolute inset-0 w-full h-full top-24 left-50 -rotate-20  hidden md:block "
      />

      <img
        src={Ellipse9}
        alt="Ellipse Background"
        className="absolute inset-0 w-full h-full  top-30 left-10 md:hidden "
      />

      <div className='px-10 flex flex-col lg:flex-row bg-black text-white pb-[100px]'>
        <div className="pt-[60px] lg:pt-[110px] lg:w-1/2">
          <h1 className="text-[32px] md:text-[40px] font-semibold md:text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-[#FDFDBF] via-[#F8DA79] to-[#C19C45] leading-snug">
            IMPULSA PROYECTOS DE
            <br />
            ALTO IMPACTO Y CONSIGUE SOLUCIONES
            <br />
            ESTRATÉGICAS <br /> PERSONALIZADAS.
          </h1>
        </div>

        <div className="lg:w-1/2 relative z-10 pt-[100px] lg:pt-[40px]">
          <ContactCard1 />
        </div>
      </div>
    </div>

  );
};
