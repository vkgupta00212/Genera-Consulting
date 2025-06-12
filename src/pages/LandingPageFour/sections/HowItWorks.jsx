import React from "react";

const steps = [
  {
    number: "01",
    title: "Asesoramiento inicial",
    description: "Alta y firma de acuerdo en el Kit Digital",
  },
  {
    number: "02",
    title: "Reunión con Project Manager",
    description: "r para definir alcance y diseño.",
  },
  {
    number: "03",
    title: "Desarrollo técnico",
    description: "y entrega.",
  },
  {
    number: "04",
    title: "Soporte y formación",
    description: "para autogestionar tu web.",
  },
];

const HowItWorks = () => {
  return (
    <div className="relative py-20 px-6 md:px-12 lg:px-20 text-white work-card-bg">
      <div className="w-full px-0">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-white text-center md:text-left">
          ¿CÓMO FUNCIONA?
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-2xl py-4 px-4 md:px-4 md:py-4 lg:px-6 lg:py-7 text-left 
                         bg-transparent bg-opacity-30 backdrop-blur-md transition-all 
                         hover:bg-opacity-50 hover:scale-105 duration-300"
            >
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">
                {step.number}
              </h3>
              <h4 className="text-xl md:text-lg lg:text-2xl font-semibold mt-2 text-white">
                {step.title}
              </h4>
              <p className="text-sm md:text-md text-gray-400 mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
