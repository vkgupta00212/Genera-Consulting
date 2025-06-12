import React from "react";
import bgImage from "../../../assets/backGround.jpeg";
import Arrow from '../../../assets/arrow.png'
import SecondaryNavigation from "./SecondaryNavbar";
import { BsArrowRight } from 'react-icons/bs'


const Hero = () => {
  return (
    <div
      className=" relative mt-[110px] md:mt-[92px] h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <SecondaryNavigation />
      {/* Blurred Content Box */}
      <div className="max-w-[1018px] w-full bg-black/30 backdrop-blur-[30px] rounded-[30px] p-8 text-center">
        <h1 className="text-white text-[40px] md:text-[64px] font-medium uppercase tracking-wide leading-wide">
          Genera Consulting
        </h1>
        <h2 className="text-white text-[24px] md:text-[32px] font-normal uppercase leading-[100%] my-[30px]">
          Transformación Digital Estratégica
        </h2>
        <p className="text-[#EEEEEE] text-[20px] md:text-[32px]  mt-[100px] max-w-[640px]  mx-auto text-center leading-[100%]">
          Potenciando el crecimiento de las <br /> empresas con soluciones integrales
          que combinan consultoría y tecnología.
        </p>

        {/* CTA Button */}
        <div className="hidden md:flex mt-6  justify-center">
          {/* <button className='flex justify-center items-center gap-3 bg-white py-[16px] px-[32px] border rounded-[50px] text-[17px] uppercase font-semibold'>
            <span>
              <img src={Arrow} alt="" className='h-[19.36px] w-[19.36px]' />
            </span>
            Transforma tu negocio
          </button> */}
          <button className='group flex justify-center items-center gap-3 bg-white hover:bg-transparent text-black hover:text-white py-[16px] px-[32px] border rounded-[50px] text-[17px] font-semibold transition-all duration-500 ease-in-out'>
            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-50">
              <BsArrowRight className="h-[19.36px] w-[19.36px] font-bold " />
            </span >
            <span className='transition-transform duration-500 ease-in-out group-hover:-translate-x-10'>
              Transforma tu negocio
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
