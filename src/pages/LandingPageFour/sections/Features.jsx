import React from "react";
import imageOne from '../../../assets/sporte.svg'
import imageTwo from '../../../assets/seo.svg'
import imageThree from '../../../assets/internet_icon.png'
import imageFour from '../../../assets/setting_icon.png'
const steps = [
  {
    image: imageFour,
    title: "Configuración",
    description: "Registro de dominio y configuración de hosting.",
  },
  {
    image: imageThree,
    title: "Web",
    description: "Mínimo 3 páginas (Inicio, Servicios, Contacto)",
  },
  {
    image: imageOne,
    title: "SEO",
    description: "Posicionamiento básico en buscadores (ej: Google Business).",
  },
  {
    image: imageTwo,
    title: "Soporte",
    description: "Soporte y mantenimiento inicial.",
  },
];

const Features = () => {
  return (
    <div className="relative py-26 px-8 text-white feature-card-bg">
      <div className="w-full px-0">
        {/* Title */}
        <h2 className="text-4xl font-light mb-12 text-white text-left">
        ¿Qué incluye la subvención?
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-2xl md:px-4 md:py-4 py-4 px-4 lg:px-6 lg:py-7 text-left 
                         bg-transparent bg-opacity-30 backdrop-blur-md transition-all 
                         hover:bg-opacity-50 hover:scale-105 duration-300"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-16 h-16 object-cover rounded-full mb-4"
              />
              <h4 className="text-sm md:text-lg lg:text-2xl font-semibold mt-2 text-white">{step.title}</h4>
              <p className="text-md md:text-sm lg:text-lg text-gray-400 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
