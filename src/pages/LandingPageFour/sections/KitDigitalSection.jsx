import React from "react";

const KitDigitalSection = () => {
  return (
    <div className="w-fit m-[2rem] rounded-4xl bg-black py-8 md:py-16 px-6 md:px-12">
      <div className=" mx-auto flex flex-col md:flex-row items-start md:items-start justify-between">
        {/* Left - Title */}
        <h2 className="text-2xl mt-0 md:text-4xl font-light text-white w-full md:w-1/2 uppercase">
        Haz despegar tu negocio <br /> con un Sitio Web <br />Profesional
        </h2>

        <p className="text-[#9A9A9A] text-sm md:text-lg w-full md:w-2/5 mt-12 md:mt-0">
        Creamos, optimizamos y lanzamos tu sitio web para lograr mayor visibilidad en internet. Incluye un diseño adaptable a diferentes dispositivos y la configuración de SEO básico para que tus clientes te encuentren fácilmente.
        </p>
      </div>
    </div>
  );
};

export default KitDigitalSection;
