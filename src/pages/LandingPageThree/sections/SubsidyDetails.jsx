import React from "react";
import heartImage from "../../../assets/hand_heart.svg";
import documentImage from "../../../assets/document_check.svg";


const subsidyData = {
  apple: [
    {
      image: heartImage,
      title: "Contribución",
      description: " El Kit Digital cubre parte del coste de adquisición de equipos informáticos de última generación."
    },
    {
      image: documentImage,
      title: "Tramitación simple",
      description: "Solo necesitas cumplir los requisitos oficiales y dejar que nosotros gestionemos la tramitación."
    }
  ],
  samsung: [
    {
      image: heartImage,
      title: "Contribución",
      description: "Subvención de 1.000 € para la compra del equipo Samsung, reduciendo el coste inicial."
    },
    {
      image: documentImage,
      title: "Tramitación Simple",
      description: "Se cumple con los requisitos oficiales y Genera Digital gestiona todo el proceso de tramitación."
    }
  ],
  hp: [
    {
      image: heartImage,
      title: "Contribución",
      description: "El Kit Digital aporta una subvención de 1.000 € para la adquisición del equipo HP, disminuyendo el coste inicial."
    },
    {
      image: documentImage,
      title: "Tramitación Simple",
      description: "Se cumple con los requisitos oficiales y Genera Digital gestiona todo el proceso de tramitación."
    }
  ]
};


const SubsidyDetails = ({ type = 'apple' }) => {
  const subsidyItems = subsidyData[type] || subsidyData.apple;

  return (
    <div className="bg-white text-black py-26 px-6">
      <div className="max-w-full w-full">
      <h2 className="text-2xl md:text-3xl mb-8 text-left">
          QUÉ INCLUYE LA SUBVENCIÓN
        </h2>
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {subsidyItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 border border-black rounded-2xl px-6 py-8 items-start"
            >
              <img src={item.image} alt={item.title} className="w-auto h-auto" />
              <div className="w-fit ml-4">
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-sm lg:w-2/2 text-[#525252]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-6">
          {subsidyItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border border-black rounded-2xl px-6 py-8 w-full"
            >
              <img src={item.image} alt={item.title} className="w-26 h-20 mb-4" />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-900">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubsidyDetails;
