import React from "react";
import targetAudience from "../../../assets/laptop.png";
import targetAudienceMobile from "../../../assets/laptop_mobile_image_one.png"; 

const TargetAudience = () => {
  return (
    <div className="bg-white py-16 flex justify-center">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start py-12 px-6 lg:px-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl  lg:text-5xl mb-8 md:mb-14 capitalize ">
            ¿A quién va dirigido?
          </h2>

          {/* Desktop Image */}
          <img
            src={targetAudience}
            alt="Laptop"
            className="hidden md:block rounded-2xl w-full"
          />

          {/* Mobile Image */}
          <img
            src={targetAudienceMobile}
            alt="Mobile View"
            className="block md:hidden rounded-2xl w-full"
          />
        </div>

        <div className="w-full md:w-1/2 lg:mt-8 md:mt-26 md:pl-10">
          <p className="text-gray-600  lg:text-[22px] md:text-[15px] leading-relaxed lg:mt-28 mt-6 md:mt-0 md:text-left text-left">
            Pequeñas y medianas empresas que no tienen un sitio web o que buscans
            renovar el que ya poseen para mejorar su presencia en línea y atraer a
            más clientes potenciales. Una web moderna y funcional las ayudará a
            destacar frente a la competencia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
