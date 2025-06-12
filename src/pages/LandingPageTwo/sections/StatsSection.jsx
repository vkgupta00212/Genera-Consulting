import React from "react";

const StatsSection = () => {
  return (
    <div className="w-full bg-white py-20 px-8 md:px-12 lg:px-8">
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex flex-row justify-between items-center w-full">
        {/* Left Text */}
        <div className="text-center w-full md:w-2/3 lg:w-1/2">
        <h2  className=" md:block hidden md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #F11157, #F5AB26)"
          }}>
          Miles de <br />
          <span>empresas</span>
        </h2>
          <p className="text-gray-600 mt-2 text-2xl lg:text-3xl">
            ya han solicitado su bono.
          </p>
        </div>

        {/* Right Text */}
        <div className="text-center w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-3xl md:text-2xl lg:text-4xl text-gray-600">
            <span className="font-extrabold">Genera Digital</span> ha<br /> tramitado
          </h2>
          <p
            className="text-4xl md:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #6ADC7E, #FFCE31)"
            }}
          >
            +2.000
          </p>
          <p className="text-gray-600 text-2xl md:text-3xl">solicitudes con éxito.</p>
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="flex md:hidden flex-col items-center text-center">
        {/* Top Text */}
        <h2  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #F11157, #F5AB26)"
          }}>
          Miles de <br />
          <span>empresas</span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg md:h-full w-1/2">ya han solicitado su bono.</p>

        {/* Vertical Line with Dots */}
        <div className="relative w-[1px] h-16 md:h-24 my-6 bg-gray-900 flex flex-col items-center">
          <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0"></div>
        </div>

        {/* Bottom Text */}
        <h2 className="text-lg md:text-xl text-gray-600 w-1/2 md:w-full">
          <span className="font-bold">Genera Digital</span> ha tramitado
        </h2>
        <p
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #6ADC7E, #FFCE31)"
          }}
        >
          +2.000

        </p>

        <p className="text-gray-600 text-lg md:text-xl">solicitudes con éxito.</p>
      </div>

      {/* Line for Desktop & Tablet */}
      <div className="hidden md:flex w-full items-center justify-center mt-12">
        <div className="w-3/6 border-t border-gray-400 relative">
          <div className="absolute left-0 top-[-6px] w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="absolute right-0 top-[-6px] w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
