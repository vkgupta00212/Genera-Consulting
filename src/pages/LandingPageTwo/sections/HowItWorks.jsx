import React from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Evaluamos tu nivel de madurez digital.",
  },
  {
    number: "02",
    title: "Selección",
    description: "Eliges la categoría y soluciones que más te convengan.",
  },
  {
    number: "03",
    title: "Implementación",
    description: "Nuestro equipo configura y entrega el proyecto.",
  },
  {
    number: "04",
    title: "Seguimiento",
    description: "Recibes soporte post-implementación.",
  },
];

const HowItWorks = () => {
  return (
    <div className="work-card-bg-two text-white py-26 px-8">
      <div className="w-full px-0">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl  font-light mb-12">
          ¿CÓMO FUNCIONA?
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-white rounded-2xl px-6 py-7 text-left"
            >
              <h3 className="text-3xl font-bold mb-8">{step.number}</h3>
              <h4 className="text-lg font-semibold mt-2">{step.title}</h4>
              <p className="text-md text-gray-300 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
