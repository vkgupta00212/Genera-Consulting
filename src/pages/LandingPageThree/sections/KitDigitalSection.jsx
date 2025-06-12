import React from "react";

const KitDigitalSection = ({ type = 'apple' }) => {
  const brandContent = {
    apple: {
      title: "Explicación de Apple & Kit Digital",
      description: "Apple es sinónimo de alto rendimiento, diseño elegante y un ecosistema robusto. A través del Kit Digital, podrás adquirir ordenadores Apple con un descuento de hasta 1.000€, permitiéndote renovar tu parque informático sin grandes inversiones."
    },
    samsung: {
      title: "Explicación de Samsung & Kit Digital",
      description: `Samsung se destaca por su innovación, versatilidad y rendimiento superior en entornos
profesionales. Con el Kit Digital, es posible acceder a equipos Samsung a un precio
reducido mediante una subvención de hasta 1.000 €, permitiendo actualizar la
infraestructura tecnológica con dispositivos modernos que elevan la eficiencia operativa y la
competitividad empresarial.`
    },
    hp: {
      title: " Explicación de HP",
      description: "HP es reconocido por su innovación, robustez y soluciones empresariales diseñadas para optimizar el rendimiento. Con el Kit Digital, puedes acceder a equipos HP a un coste reducido gracias a una subvención de hasta 1.000 €, lo que te permite renovar el parque tecnológico sin grandes inversiones."
    }
  };

  const content = brandContent[type] || brandContent.apple;

  return (
    <div className="w-fit m-[2rem] rounded-3xl bg-black py-22 px-6 md:px-12">
      <div className=" mx-auto flex flex-col md:flex-row items-start md:items-start justify-between">
        {/* Left - Title */}
        <h2 className="text-2xl mt-0 lg:text-4xl font-light text-white w-full lg:w-1/2 md:w-2/3  uppercase">
          {content.title} <br />con Kit Digital
        </h2>

        <p className="text-[#9A9A9A] text-lg w-full md:w-1/2 mt-12 md:mt-0">
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default KitDigitalSection;
