import { Link } from "react-router-dom";
import Ellipse from "../../../assets/Ellipse 5.svg";
import ArrowBlack from "../../../assets/ArrowBlack.svg";
import ArrowWhite from "../../../assets/Arr.svg";
import Group from "../../../assets/Group.svg";

export const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Background Ellipse Image */}
      <img
        src={Ellipse}
        alt="Ellipse Background"
        className="absolute inset-0 w-full h-full object-cover -mt-60 md:-mt-0"
      />

<div className="max-w-[2000px] mx-auto px-6">
  <div className="bg-black h-16 flex justify-around md:justify-between md:mx-5 rounded-xl">
    <div className="mt-4 items-center hidden md:block">
      <img src={Group} className="h-8 w-8" alt="Group Icon" />
    </div>

    <div className="flex items-center gap-2 md:gap-4">
      <button className="flex justify-center items-center gap-3 bg-black text-white py-2.5 px-4 border rounded-4xl text-[9.94px] font-semibold">
        <span>
          <img src={ArrowWhite} alt="" className="h-[19.36px] w-[19.36px]" />
        </span>
        CONTÁCTANOS
      </button>

      <button className="flex justify-center items-center gap-3 bg-white py-2.5 px-4 border z-10 rounded-4xl text-[9.94px] font-semibold">
        <span>
          <img src={ArrowBlack} alt="" className="h-[19.36px] w-[19.36px]" />
        </span>
        AGENDAR LLAMADA
      </button>
    </div>
  </div>
</div>


      {/* Card Content */}
      <div className="relative z-10 flex items-center justify-center h-full mt-10">
        <div className="backdrop-blur-[10px] bg-[#111111]/60 rounded-[30px] border border-black px-[40px] py-10 flex flex-col items-center w-11/12 md:w-4/6 xl:w-full justify-center">
          {/* Main Heading */}
          <h1 className="text-center">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFDBF] via-[#C19C45] to-[#F8DA79] text-5xl md:text-7xl lg:text-7xl  font-bold mb-2">
              PRIVATE
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFDBF] via-[#C19C45] to-[#F8DA79] text-5xl md:text-3xl lg:text-7xl  font-bold">
              CONSULTING
            </div>
          </h1>

          {/* Subheading */}
          <h2 className="text-white text-2xl md:text-3xl text-center mt-6 mb-12">
            Asesoría para Proyectos
            <br />
            de Alto Impacto
          </h2>

          {/* Description */}
          <p className="text-white/90 text-center max-w-2xl mb-12 text-base ">
            Soluciones estratégicas y confidenciales,
            <br className="hidden md:block"/>
            respaldadas por tecnología de vanguardia, que
            <br className="hidden md:block" />
            marcan la diferencia en la transformación digital.
          </p>



          {/* CTA Button */}
          <div className="flex items-center gap-2 px-[19px] md:px-8 py-[10px] md:py-4 rounded-[32px] bg-white text-black hover:bg-white/90 transition-colors">
            <img src={ArrowBlack} className="h-6 w-6" alt="Arrow Black" />
            <span className="font-bold flex text-[10px] md:text-base">
              SOLICITA UNA CONSULTA ESTRATÉGICA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
