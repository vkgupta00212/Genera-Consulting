import React from "react";

const KitDigitalSection = () => {
  return (
    <div className="w-full bg-white py-22 px-6 md:px-16">
      <div className=" mx-auto flex flex-col md:flex-row items-start md:items-start justify-between">
        {/* Left - Title */}
        <h2 className="text-3xl lg:text-5xl text-black w-full md:w-1/2 mb-12 md:mb-0">
          ¿QUÉ ES KIT DIGITAL?
        </h2>
        <p className="text-gray-600 text-lg w-full lg:w-1/2 md:2/4">
          Kit Digital es una iniciativa del Gobierno de España cuyo objetivo es
          subvencionar la implantación de soluciones digitales disponibles en el mercado
          para conseguir un avance significativo en el nivel de madurez digital de las
          empresas.
        </p>
      </div>
    </div>
  );
};

export default KitDigitalSection;
