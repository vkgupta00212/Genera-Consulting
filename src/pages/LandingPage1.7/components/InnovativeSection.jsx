import React from "react";
import Image from "../../../assets/Image99.png";
import Image1 from "../../../assets/image100.png";
import arrow from "../../../assets/arrow.png";
import { BsArrowRight } from "react-icons/bs";

const InnovativeSection = () => {
  return (
    <div className="py-[100px] px-[20px] md:px-[40px] bg-black ">
      <div className="max:w-[335px] h-[450px] rounded-[30px] md:hidden">
        <img src={Image1} alt="" className="h-full w-full" />
      </div>

      <div className="hidden md:block w-full">
        <img src={Image} alt="" className="h-full w-full" />
      </div>

      <div className="mt-[44px]">
        <p className="md:hidden text-[20px] text-white text-center">
          Si buscas reimaginar los límites con soluciones digitales y dar el
          siguiente paso hacia una transformación real, en Genera estamos
          preparados para ser tu aliado tecnológico. <br />{" "}
          <span className="uppercase">
            Este es solo el principio de nuestra historia y queremos que formes
            parte de ella.
          </span>
        </p>

        <p className="hidden md:block max-w-[800px] mx-auto text-[24px] text-white text-center">
          Si buscas reimaginar los límites con soluciones digitales y dar el
          siguiente paso hacia una transformación real, en Genera estamos
          preparados para ser tu aliado tecnológico. <br />{" "}
          <span className="uppercase">
            Este es solo el principio de nuestra historia y queremos que formes
            parte de ella.
          </span>
        </p>
      </div>

      <div className="flex justify-center my-10">
        {/* <button className='hidden  bg-white text-black md:flex text-[20px] uppercase font-bold gap-2 rounded-[64px] px-[36px] py-[18px]'>
          <img src={arrow} alt="" />
          Comienza tu Transformación
        </button>

        <button className='md:hidden  bg-white text-black flex uppercase text-[14px] font-bold gap-[18.2px] rounded-[43px] px-[26px] py-[13px]'>
          <img src={arrow} alt="" />
          Comienza tu Transformación
        </button> */}

        <button className="group flex justify-center items-center gap-2 md:gap-[18.2px] bg-white hover:bg-black text-black hover:text-white py-[13px] md:py-[18px] px-[36px] border rounded-[43px] md:rounded-[64px] text-[9.94px] font-bold transition-all duration-500 ease-in-out">
          <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-52">
            <BsArrowRight className="h-[19.36px] w-[19.36px]" />
          </span>
          <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-14 uppercase">
            Comienza tu Transformación
          </span>
        </button>
      </div>
    </div>
  );
};

export default InnovativeSection;
