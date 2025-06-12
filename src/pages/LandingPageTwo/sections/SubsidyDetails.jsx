import React from "react";
import personImage from "../../../assets/setting__icon.svg";
import internetImage from "../../../assets/internet_icon.png";


const subsidyItems = [
  {
    image: personImage,
    title: "Importes",
    description: "Dependiendo del número de empleados (hasta 12.000€)",
  },
  {
    image: internetImage,
    title: "Amplitud",
    description:
      "Desde diseño web, SEO, redes sociales, hasta ordenadores y ciberseguridad.",
  },
];

const SubsidyDetails = () => {
  return (
    <div className="work-card-bg-two text-white py-26 px-6">
      <div className="max-w-full w-full">
        {/* Title */}
        <h2 className="text-3xl font-light mb-8 text-left">
          QUÉ INCLUYE LA SUBVENCIÓN
        </h2>
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {subsidyItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 border border-white rounded-2xl px-6 py-8 items-start"
            >
              <img src={item.image} alt={item.title} className="w-auto h-auto" />


              <div className="w-fit ml-4">
                <h3 className="text-xl mb-4 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Content Grid */}
        <div className="md:hidden flex flex-col gap-6">
          {subsidyItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start border border-white rounded-2xl px-6 py-8 w-full"
            >
              {/* Image */}
              <img src={item.image} alt={item.title} className="w-12 h-12 mb-4" />

              {/* Text */}
              <div className="text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubsidyDetails;
