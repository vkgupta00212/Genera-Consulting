import React from 'react'
import Frame200 from '../../../assets/Frame200.png'
import Frame20 from '../../../assets/Frame20.png'

const values = [
  {
    title: "Innovación",
    description:
      "Invertimos en investigación y desarrollo para crear software y servicios que reflejen las tendencias tecnológicas más punteras.",
  },
  {
    title: "Sostenibilidad",
    description:
      "Priorizamos el crecimiento responsable, minimizando nuestro impacto medioambiental y social.",
  },
  {
    title: "Cercanía",
    description:
      "Cultivamos una comunicación honesta y humana, porque la tecnología solo cobra sentido cuando conecta con las personas.",
  },
  {
    title: "Calidad Técnica",
    description:
      "Apostamos por la excelencia y la rigurosidad, sin perder de vista la usabilidad y la accesibilidad.",
  },
];




const Team = () => {
  return (
    <div className="bg-black py-[60px] px-[20px] md:px-[40px]">
      {/* Heading */}
      <div>
        <p className="hidden md:block text-white text-[32px] md:text-[50px] lg:text-[64px] uppercase tracking-wide">
          Nuestro Norte y Razón de Ser
        </p>

        {/* Mobile View Heading (Stacked) */}
        <div className="md:hidden">
          <p className="text-white text-[32px] uppercase tracking-wide">Nuestro</p>
          <p className="text-white text-[32px] uppercase tracking-widest">Norte y Razón</p>
          <p className="text-white text-[32px] uppercase tracking-wide">de Ser</p>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden mt-[92px] flex justify-between gap-1">
        <button className="bg-black flex-1 text-white ring-1 uppercase p-[20px] font-normal text-[16px] sm:text-[20px] tracking-wide rounded-[20px]">
          Visión
        </button>

        <button className="bg-[#D9D9D9] flex-1 text-black ring-1 p-[20px] uppercase font-normal text-[16px] sm:text-[20px] tracking-wide rounded-[20px]">
          Misión
        </button>

        <button className="bg-[#D9D9D9] flex-1 text-black ring-1 py-[20px] px-[8px] uppercase font-normal text-[16px] sm:text-[20px] tracking-wide rounded-[20px]">
          Valores
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex mt-[92px] gap-3 justify-between">
        <button className="bg-[#D9D9D9] text-left pl-6 flex-1 text-black ring-1 uppercase p-[20px] font-normal text-[24px] lg:text-[32px] tracking-wide rounded-[30px]">
          Visión
        </button>

        <button className="bg-[#D9D9D9] flex-1 text-left pl-6 text-black ring-1 p-[20px] uppercase font-normal text-[24px] lg:text-[32px] tracking-wide rounded-[30px]">
          Misión
        </button>

        <button className="bg-black flex-1 text-left pl-6 text-white ring-1 py-[20px] px-[8px] uppercase font-normal text-[24px] lg:text-[32px] tracking-wide rounded-[30px]">
          Valores
        </button>
      </div>

      {/* Mobile View Box */}
      <div className="md:hidden border-2 border-white text-white rounded-[30px] mt-4 py-[40px] px-[30px]">
        <h1 className="text-[32px] sm:text-[40px] uppercase tracking-wide">Visión</h1>

        <div className="mt-[25px]">
          <p className="text-[16px]">
            Convertirnos en la empresa de referencia en el sector tecnológico, reconocida por su inversión en tecnología de vanguardia y la optimización constante de procesos propios y de nuestros clientes.
          </p>
        </div>

        <div className="mt-[50px]">
          <img src={Frame200} alt="Vision" />
        </div>
      </div>
      <div className="hidden md:flex flex-col lg:flex-row items-stretch px-[30px] lg:px-[50px] py-[40px] lg:py-[60px] rounded-[30px] border border-white mt-2">
        {/* Left Section - Text Content (Adjustable Height) */}
        <div className="flex flex-col justify-between h-full w-full lg:w-[60%]">
          <h1 className="text-[40px] md:text-[50px] lg:text-[64px] text-white uppercase font-normal tracking-wide">
            VALORES
          </h1>

          {/* List of Values (Text) */}
          <div className="flex flex-col w-full md:w-[90%] lg:w-[800px] gap-5 mt-[25px]">
            {values.map((value, index) => (
              <div key={index}>
                <h1 className="text-white text-[20px] md:text-[24px]">{value.title}</h1>
                <p className="text-[#9A9A9A] text-[18px] md:text-[20px]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image (Full Height) */}
        <div className="w-full lg:w-[40%] h-auto mt-6 lg:mt-0">
          <img
            src={Frame20}
            alt="Valores"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>

    </div>
  );
};

export default Team;
