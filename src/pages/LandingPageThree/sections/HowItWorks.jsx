import React from "react";

const stepsContent = {
  apple: [
    {
      number: "01",
      title: "Rellena el formulario",
      description: "Elige tu modelo Apple",
    },
    {
      number: "02",
      title: "Asesoramiento",
      description: "Te contactarán nuestros asesores para dar de alta la ayuda o la ampliación.",
    },
    {
      number: "03",
      title: "Recibe",
      description: "Firma y recibe tu ordenador Apple subvencionado.",
    },
  ],
  samsung: [
    {
      number: "01",
      title: "Formulario",
      description: "Completa el formulario y selecciona el modelo Samsung deseado.",
    },
    {
      number: "02",
      title: "Asesoramiento",
      description: "Los asesores de Genera Digital gestionarán la tramitación del Kit Digital o la ampliación del acuerdo.",
    },
    {
      number: "03",
      title: "Recibe",
      description: "Una vez formalizado el alta del programa y la categoría de 'Puesto de Trabajo Seguro', recibe el equipo Samsung en breve.",
    },
  ],
  hp: [
    {
      number: "01",
      title: "Formulario",
      description: "Completa el formulario y selecciona el modelo HP deseado.",
    },
    {
      number: "02",
      title: "Asesoramiento",
      description: "Los asesores de Genera Digital gestionarán la tramitación del Kit Digital o la ampliación del acuerdo.",
    },
    {
      number: "03",
      title: "Recibe",
      description: "Una vez formalizado el alta del programa y la categoría 'Puesto de Trabajo Seguro', recibe tu equipo HP en breve.",
    },
  ],
};


const HowItWorks = ({ type = "apple" }) => {
  const steps = stepsContent[type] || stepsContent.apple;

  return (
    <div className="bg-white text-black py-26 px-8">
      <div className="w-full px-0">
        {/* Title */}
        <h2 className="text-4xl font-light mb-12">¿CÓMO FUNCIONA?</h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-black rounded-3xl px-6 py-7 text-left"
            >
              <h3 className="text-4xl font-bold mb-8">{step.number}</h3>
              <h4 className="text-2xl font-semibold mt-2">{step.title}</h4>
              <p className="text-md text-[#525252] mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
