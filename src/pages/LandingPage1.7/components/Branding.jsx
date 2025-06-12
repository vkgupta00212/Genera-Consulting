import React from "react";
import picture1 from "../../../assets/Frame001.svg";
import picture2 from "../../../assets/Frame002.svg";
import picture3 from "../../../assets/picture3.jpeg";
import Frame66 from '../../../assets/Frame66.svg';
import Frame1001 from '../../../assets/Frame1001.svg'

const brandingCards = [
  {
    id: 1,
    title: "EQUILIBRIO Y CREACIÓN",
    description:
      "Siguiendo la filosofía del Tao, combinamos lo mejor de la consultoría, los servicios digitales y la innovación propia para ofrecer soluciones completas y sólidas.",
    image: picture1,
    textColor: "text-white",
    gradientOverlay: true, // Left black gradient for first image
  },
  {
    id: 2,
    title: "FOCO EN LA IA",
    description:
      "La inteligencia artificial está presente en muchos de nuestros proyectos, alineada con la urgencia de digitalización que enfrentan las empresas para no quedarse rezagadas.",
    image: picture2,
    textColor: "text-black",
    bgColor: "bg-[#F5F5F5]",
  },
  {
    id: 3,
    title: "VISIÓN INTEGRAL",
    description:
      "Abordamos la transformación digital desde una perspectiva 360°, diseñando estrategias a medida y asegurando que cada paso sea efectivo y rentable.",
    image: picture3,
    textColor: "text-[#9A9A9A]",
    rotateImage: true, // Rotate the 3rd image
  },
];

const Branding = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-start text-white text-4xl md:text-6xl font-normal tracking-wide mb-12">
        NUESTRO SELLO
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col gap-10">
        {brandingCards.map((card) => (
          <div key={card.id} className="w-full">
            {/* Mobile View */}
            {/* Mobile View */}
            <div className="relative w-full h-[500px] md:hidden rounded-[30px] border-[0.5px] border-white/50 overflow-hidden flex flex-col justify-between py-[40px] px-[35px]">

              {/* Background for Second Card */}
              {card.bgColor && <div className={`absolute inset-0 ${card.bgColor} z-0`}></div>}

              {/* Image Display */}
              <img
                src={card.id === 2 ? Frame66 : card.image}  // Use Frame66 only for the second card
                alt={card.title}
                className={`absolute inset-0 w-full h-full object-cover z-10 ${card.rotateImage ? "rotate-180" : ""
                  } `}
              />

              {/* Left Black Gradient Overlay for First Image */}
              {card.gradientOverlay && (
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-20"></div>
              )}

              {/* Text Overlay */}
              <div className="relative z-30 flex flex-col justify-between">
                <h3 className={`font-semibold tracking-wide text-[32px] ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-[20px] mt-30 ${card.textColor}`}>{card.description}</p>
              </div>
            </div>


            {/* Desktop & Tablet View (Corrected for justify-between) */}
            <div
              className={`hidden md:flex w-full h-[214px] border border-[#1e1e1e] rounded-[30px] overflow-hidden items-center py-[40px] px-[30px] lg:px-[43px] relative ${card.bgColor ? card.bgColor : ""
                }`}
            >
              {/* Image (Fully Visible) */}
              <img
                src={card.id === 3 ? Frame1001 : card.image}
                alt={card.title}
                className={`absolute inset-0 w-full h-full object-cover z-10 `}
              />

              {/* Left Black Gradient for First Image (Desktop & Tablet) */}
              {card.gradientOverlay && (
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80 z-20"></div>
              )}

              {/* Text - Positioned at Two Ends */}
              <div className="relative z-30 flex justify-between items-start w-full ">
                {/* Left-aligned Title */}
                <h3 className={`font-normal tracking-wide text-[32px] lg:text-[40px] ${card.textColor}`}>
                  {card.title}
                </h3>
                {/* Right-aligned Paragraph */}
                <p className={`text-[18px] lg:text-[20px] w-[300px]  md:w-[387px] text-start font-normal ${card.textColor} text-right`}>
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branding;
