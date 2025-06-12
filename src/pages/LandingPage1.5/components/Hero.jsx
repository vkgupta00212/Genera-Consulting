import React, { useState } from 'react';
import Mac from '../../../assets/mac1.svg';
import s1 from '../../../assets/m1.svg';
import s2 from '../../../assets/m2.svg';
import s3 from '../../../assets/m3.svg';
import s4 from '../../../assets/m4.svg';
import s5 from '../../../assets/m5.svg';
import { BsArrowRight } from 'react-icons/bs';

const Hero = ({ baseModel = "apple", model = "MacBookAir13" }) => {
  const brandContent = {
    apple: {
      MacBookAir13: {
        title: "MacBook Air 13” con Chip M3",
        subtitle: "Potencia y ligereza para tu día a día, ahora con 1.000€ de subvención gracias al Kit Digital.",
        description: "Potencia y ligereza para tu día a día, ahora con 1.000€ de subvención gracias al Kit Digital.",
        price: "1.569 € + IVA",
        offerPrice: "569€ + IVA"
      },
      MacBookAir15: {
        title: "MacBook Air 13” con Chip M3",
        subtitle: "Equilibrio perfecto entre rendimiento, estilo y movilidad, ahora con 1.000 € de subvención gracias al Kit Digital.",
        price: "1.817€ + IVA",
        offerPrice: "817€ + IVA"
      },
      MacBookPro14: {
        title: "MacBook Pro de 14",
        subtitle: "Redefine el rendimiento profesional en un formato compacto y sofisticado, ahora con 1.000 € de subvención gracias al Kit Digital.",
        description: "",
        price: "1.899€ + IVA",
        offerPrice: "899€ + IVA"
      },
      MacBookPro16: {
        title: "MacBook Pro 16",
        subtitle: "Libertad de soñar en grande, con una potencia excepcional y una pantalla envolvente que hace realidad tus ideas, ahora con 1.000 € de subvención gracias al Kit Digital.",
        price: "2742€ + IVA",
        offerPrice: "1742€ + IVA"
      }, 
    },
    samsung: {
      GalaxyBook415: {
        title: "Galaxy Book4 15”",
        subtitle: "Elegante, compacto y listo para subir de nivel tu día, ahora con 1.000 € de subvención gracias al Kit Digital.",
        price: "2742€ + IVA",
        offerPrice: "1742€ + IVA"
      },
      GalaxyBook4Pro14
      : {
        title: "Galaxy Book4 Pro 14”",
        subtitle: "El soporte que tus ideas merecen, ahora con 1.000 € de subvención gracias al Kit Digital.",
        price: "2742€ + IVA",
        offerPrice: "1742€ + IVA"
      },
    },
    hp:{
      ZHP_ZbookPowerG11: {
        title: "Z by HP-Zbook Power G11”",
        subtitle: "El soporte que tus ideas merecen, ahora con 1.000 € de subvención gracias al Kit Digital.",
        price: "2742€ + IVA",
        offerPrice: "1742€ + IVA"
      },
      HPProOne440G9: {
        title: "HP ProOne 440 G9",
        subtitle: "Renueva tu forma de trabajar, ahora con 1.000 € de subvención gracias al Kit Digital",
        price: "2000 € + IVA",
        offerPrice: "1000€ + IVA"
      },
      SobremesaHPProSmall400G9_MonitorHP_E24mvG4: {
        title: "Sobremesa HP Pro Small 400 G9 + Monitor HP E24mv G4",
        subtitle: "Pack perfecto para tu negocio, ahora con 1.000 € de subvención gracias al Kit Digital.",
        price: " 2000 € + IVA",
        offerPrice: "1000€ + IVA"
      },
      HPEliteBook665G11: {
        title: "MacBook Pro 16",
        subtitle: "Libertad de soñar en grande, con una potencia excepcional y una pantalla envolvente que hace realidad tus ideas, ahora con 1.000 € de subvención gracias al Kit Digital.",
        price: "2742€ + IVA",
        offerPrice: "1742€ + IVA"
      }
    }
  };

  const content =
    brandContent[baseModel]?.[model] || {
      title: "Modelo no encontrado",
      subtitle: "",
      description: "No hay información disponible para este modelo.",
      price: "-",
      offerPrice: "-"
    };

  const [selectedImage, setSelectedImage] = useState(Mac);

  return (
    <div className="px-5 sm:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col lg:flex-row col-span-2 lg:px-[31px]">
          <div className="grid grid-cols-5 lg:grid-cols-1 my-auto gap-1 order-2 lg:order-1">
            {[s1, s2, s3, s4, s5].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Small ${index + 1}`}
                className="w-full object-cover rounded-[10px] transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(index === 0 ? Mac : src)}
              />
            ))}
          </div>
          <div className="order-1 lg:order-2 w-full h-[400px] flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Big"
              className="w-auto h-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 border-1 rounded-[50px] mt-10 lg:mt-0 py-[50px] lg:py-[60px] px-[20px] lg:px-[45px] lg:col-span-1">
          <div>
            <h2 className="text-[32px] sm:text-[40px] font-medium tracking-wide">
              {content.title}
            </h2>
            <h3 className="text-sm md:text-sm">{content.subtitle}</h3>
          </div>

          <div className="items-center mt-14 lg:mt-2">
            <p className="text-xl">
              Precio Normal: <span className="font-medium">{content.price}</span>
            </p>
            <p className="text-xl">
              Precio con Subvención: <span className="font-medium">{content.offerPrice}</span>
            </p>

            <button className="group flex justify-center items-center mt-4 gap-5 bg-black hover:bg-white text-white hover:text-black py-4 px-8 border border-black rounded-[50px] text-[16px] font-bold uppercase transition-all duration-500 ease-in-out">
              <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-40">
                <BsArrowRight className="h-[25px] w-[25px]" />
              </span>
              <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-10">
                Solicita Ahora
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
