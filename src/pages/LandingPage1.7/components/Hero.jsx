import React from "react";
import Video from "../../../assets/video.gif";

const Hero = () => {
  return (
    <div className="py-[80px] px-[20px] md:px-[40px] lg:px-[71px] md:h-[750px] lg:h-[865px] bg-black">
      <div className="text-white">
        <h1 className="text-3xl md:text-6xl lg:text-8xl md:tracking-wide lg:tracking-wide font-normal uppercase">
          Donde Comienza la Transformación
        </h1>
      </div>

      <div className="mt-[50px] flex flex-col md:flex-row lg:flex-row justify-center items-center">
        <div className="md:w-[55%] lg:w-2/3">
          {/* Mobile Image */}
          <img
            src={Video}
            alt="HeroDarkSmall"
            className="block md:hidden lg:hidden"
          />
          {/* Tablet (Scaled Down) & Desktop Image */}
          <img
            src={Video}
            alt="HeroDark"
            className="hidden md:block lg:block md:w-[700px] md:h-[400px] lg:w-[903px] lg:h-[471px]"
          />
        </div>

        <div className="mt-[50px] md:w-[45%] lg:w-1/3 md:mt-0 lg:mt-0 md:h-[400px] lg:h-[471px] md:flex lg:flex md:justify-center lg:justify-center items-center">
          <p className="text-white text-xl font-normal px-5 md:px-[20px] lg:px-[30px] md:py-[50px] lg:py-[76px] text-start">
            Inspirada en el Tao, la esencia de Genera nace del equilibrio y la
            creación de todas las cosas. Creemos en la coexistencia de los
            opuestos —la tecnología y lo humano, la simplicidad y la innovación—
            para generar soluciones sólidas, limpias y atemporales. Este
            principio nos ha guiado desde el principio y define nuestra forma de
            entender la transformación digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
