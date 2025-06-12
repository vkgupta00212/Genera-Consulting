import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    text: "La aventura de Genera comienza con la ambición de integrar la consultoría y el desarrollo tecnológico en un solo lugar, ofreciendo no solo servicios digitales, sino también la capacidad de crear e innovar productos propios.",
  },
  {
    id: 2,
    text: "En este recorrido, destaca la fusión con HeadBlue, una agencia de marketing en Mataró, que aportó talento y experiencia. Esta sinergia dio lugar a Genera Digital y elevó aún más la calidad de nuestros servicios y la satisfacción de los clientes.",
  },
  {
    id: 3,
    text: "En el último año, hemos crecido un 400% en recursos, inversión y equipo gracias a la confianza de muchas pymes y autónomos. Con 6 nuevos softwares previstos para 2026, nos consolidamos como referente en transformación digital.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {},
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 }
  },
};

const Feature = () => {
  return (
    <div className="bg-black text-white py-[80px] px-6 md:px-16">
      {/* Optionally animate the heading */}
      <motion.h2
        className="text-start md:text-center text-[40px] md:text-[64px] md:tracking-wide font-normal mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }} // removed once: true
        transition={{ duration: 1 }}
      >
        EXPLORANDO NUEVOS HORIZONTES
      </motion.h2>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-center w-full relative">
        {/* Straight Line - Full Width */}
        <div className="relative w-full flex justify-center mb-10">
          <div className="absolute top-1/2 w-full h-[2px] bg-[#525252]"></div>

          {/* Dots - Positioned Exactly in the Middle of the Cards Over the Line */}
          <div className="absolute -top-[10px] flex w-full justify-between px-[15%]">
            {features.map((_, index) => (
              <div key={index} className="w-5 h-5 bg-[#525252] rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Feature Cards Container */}
        <motion.div
          className="flex justify-center w-full gap-2 rounded-[30px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // removed once: true
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-[#141414] md:py-[60px] px-[20px] md:px-[30px] rounded-[30px] text-start flex items-center justify-center text-[16px] md:text-xl font-medium"
              variants={cardVariants}
            >
              {feature.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center relative">
        {/* Vertical Line (Ends at Last Dot) */}
        <div
          className="absolute top-0 left-1/2 w-[1px] bg-[#525252]"
          style={{ height: `calc(100% - 50px - 50px)` }}
        ></div>

        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="relative w-full max-w-md mb-[100px] flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }} // removed once: true
            transition={{ duration: 0.5 }}
          >
            {/* Feature Card */}
            <div className="bg-[#141414] py-[40px] px-[20px] rounded-[30px] text-[16px] font-[400] text-start">
              {feature.text}
            </div>

            {/* Single Dot Below Each Card */}
            <div className="w-4 h-4 bg-[#525252] rounded-full mt-2 relative"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
