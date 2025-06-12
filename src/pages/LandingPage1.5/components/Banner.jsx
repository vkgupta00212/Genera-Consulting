import React from "react";

const Banner = ({ baseModel = "apple", model = "MacBookAir13" }) => {
  const productData = {
    apple: {
      MacBookPro13: {
        characteristics: [
          "Procesador: Chip M3 (CPU de 8 núcleos + GPU de 10 núcleos)",
          "RAM: 16 GB de memoria unificada",
          "Almacenamiento: 512 GB de almacenamiento SSD",
          "Licencia Endpoint Sophos (1 año)",
          "Lector DNIe",
          "Hub USB-C",
          "Etiqueta obligatoria de Red.es",
          "Tapa de privacidad para la cámara",
        ],
      },
      MacBookAir13: {
        characteristics: [
          "Procesador: Chip M3 (CPU de 8 núcleos + GPU de 10 núcleos)",
          "RAM: 16 GB de memoria unificada",
          "Almacenamiento: 512 GB de almacenamiento SSD",
          "Licencia Endpoint Sophos (1 año)",
          "Lector DNIe",
          "Hub USB-C",
          "Etiqueta obligatoria de Red.es",
          "Tapa de privacidad para la cámara",
        ],
      },
      MacBookAir15: {
        characteristics: [
          "Procesador: Chip M3 (CPU de 8 núcleos + GPU de 10 núcleos)",
          "RAM: 16 GB de memoria unificada",
          "Almacenamiento: 512 GB de almacenamiento SSD",
          "Licencia Endpoint Sophos (1 año)",
          "Lector DNIe",
          "Hub USB-C",
          "Etiqueta obligatoria de Red.es",
          "Tapa de privacidad para la cámara",
        ],
      },
      MacBookPro14: {
        characteristics: [
          "Procesador: Chip M4 (CPU de 10 núcleos + GPU de 10 núcleos)",
          "RAM: 16 GB de memoria unificada",
          "Almacenamiento: 512 GB de almacenamiento SSD",
          "Licencia Endpoint Sophos (1 año)",
          "Lector DNIe",
          "Hub USB-C",
          "Etiqueta obligatoria de Red.es",
          "Tapa de privacidad para la cámara",
        ],
      },
      MacBookPro16: {
        characteristics: [
          "Procesador: Chip M4 (CPU de 10 núcleos + GPU de 10 núcleos)",
          "RAM: 16 GB de memoria unificada",
          "Almacenamiento: 512 GB de almacenamiento SSD",
          "Licencia Endpoint Sophos (1 año)",
          "Lector DNIe",
          "Hub USB-C",
          "Etiqueta obligatoria de Red.es",
          "Tapa de privacidad para la cámara",
        ],
      },
    },
    samsung:{
      GalaxyBook415: {  
        characteristics: [
          "Procesador: Intel® Core™5 Processador 120U (5.0 GHz 12 MB)",
          "RAM: 16 GB de memoria",
          "Almacenamiento: 512 GB NVMe SSD",
          "Intel® Graphics",
          "Pantalla 15.6” FHD Anti - Reflejo",
          "Slim & Thin Design con RJ45 Lan Port",
          "Lector de huella",
        ],
      },
      GalaxyBook4Pro14:{
        characteristics: [
          "Procesador: Intel® Core™ Ultra 7 Processador 155H (4.8 GHz 24 MB)",
          "RAM: 32 GB de memoria",
          "Almacenamiento: 512 GB NVMe SSD",
          "Intel® Arc™ Graphics",
          "Pantalla 14.0” WQXGA + Dynamic AMOLED 2x, Anti - Reflejo",
          "Touch Screen Panel & Vision Booster",
        ],
      }
    },
    hp: {
      ZHP_ZbookPowerG11: {
        characteristics: [
          "USB Type-A con velocidad de señal de 5Gbps (Carga)",
          "HDMI 2.1",
          "Combo de auriculares/micrófono",
          "2 Thunderbolt™ 4 con USB Type-C con velocidad de señal de 40 Gbps",
          "Seguridad: Bitdefender",
          "Tarjeta inalámbrica Realtek WI-FI 6E",
        ],
      },
      HPProOne440G9: {
        characteristics: [
          "Procesador: Intel® Core™ i5-14500T (hasta 4.8 GHz de frecuencia máxima con Turbo, 24 MB de caché L3, 14 núcleos, 20 hilos)",
          "Memoria RAM: 16 GB",
          "Almacenamiento: 512 GB",
          "Gráficos: Intel UHD 770 Graphics",
          "Seguridad: Bitdefender",
        ],
      },
      SobremesaHPProSmall400G9_MonitorHP_E24mvG4: {
        characteristics: [
          "Procesador: Intel® Core™ i3-14100 (hasta 4.7 GHz de frecuencia máxima con Turbo, 12 MB de caché L3, 4 núcleos, 8 hilos)",
          "Memoria RAM: 16 GB",
          "Almacenamiento: 512 GB",
          "Gráficos: Intel UHD 730 Graphics",
          "Seguridad: Bitdefender",
        ],
      },
      HPEliteBook665G11: {
        description: "Descripción del HP EliteBook 665 G11.",
      },
    },
  };

  // 🛠️ Check if baseModel & model exist, otherwise show default message
  const content =
    productData[baseModel]?.[model] || { description: "Modelo no encontrado." };

  return (
    <div className="bg-black my-4 mx-5 lg:mx-10 text-white rounded-[40px] md:rounded-[50px]">
      <div className="flex flex-col md:flex-row px-[20px] py-[40px] justify-between gap-8 lg:gap-6">
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-[48px] uppercase font-normal">
            CARACTERÍSTICAS Y<br />ESPECIFICACIONES<br />PRINCIPALES
          </h2>
        </div>
        <div className="md:w-1/2 text-[20px] lg:text-[24px]">
          <p className="text-[#9A9A9A]">{content.description}</p>

          {/* Render characteristics if available */}
          {content.characteristics && content.characteristics.length > 0 && (
            <ul className="list-disc pl-5 mt-4 space-y-2">
              {content.characteristics.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
