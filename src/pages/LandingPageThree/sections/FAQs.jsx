import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const getFaqs = (type) => {
  const brandFaqs = {
    apple: [
      {
        question: "¿La subvención cubre toda la compra del Apple?",
        answer: "La subvención del Kit Digital cubre hasta 1.000€ del coste del equipo Apple. El resto del importe deberá ser abonado por el cliente."
      },
      {
        question: "¿Qué modelos de Apple están disponibles?",
        answer: "Disponemos de toda la gama de MacBook Air y MacBook Pro, así como iMacs. La disponibilidad específica puede variar según el momento."
      },
      {
        question: "¿Incluye el soporte técnico de Apple?",
        answer: "Sí, todos los equipos incluyen la garantía oficial de Apple y el soporte técnico estándar de Apple durante un año."
      },
    ],
    samsung: [
      {
        question: "¿La subvención cubre toda la compra?",
        answer: "La subvención cubre hasta 1.000 €; el resto del coste correrá a cargo del cliente."
      },
      {
        question: "¿Qué sucede si se agota el modelo Samsung?",
        answer: "La alta disponibilidad de equipos Samsung hace muy improbable el agotamiento del modelo. En caso excepcional, se contactará para evaluar una alternativa con características similares."
      },
      {
        question: "¿Cuáles son las características distintivas de los equipos Samsung?",
        answer: "Los equipos Samsung destacan por su innovación, durabilidad y rendimiento, diseñados para cumplir con las exigencias de los entornos profesionales."
      },
      {
        question: "¿Existen plazos de entrega específicos?",
        answer: "No se pueden asegurar plazos exactos. Una vez que se obtenga el alta del Kit Digital o se formalice la categoría de 'Puesto de Trabajo Seguro', el equipo llegará a la brevedad."
      },
    ],
    hp: [
      {
        question: "¿La subvención cubre toda la compra?",
        answer: "La subvención cubre hasta 1.000 €; el resto del coste correrá a cargo del cliente."
      },
      {
        question: "¿Qué sucede si se agota el modelo HP?",
        answer: "La alta disponibilidad de equipos HP hace muy poco probable que se agote el modelo. En caso excepcional, se contactará para evaluar una alternativa con características similares."
      },
      {
        question: "¿Existen plazos de entrega específicos?",
        answer: "No se pueden asegurar plazos exactos. Una vez se obtenga el alta del Kit Digital o se formalice la categoría 'Puesto de Trabajo Seguro', el equipo llegará a la brevedad."
      },
      {
        question: "¿Qué modelos HP están disponibles?",
        answer: "La oferta incluye el Zbook Power G11, HP ProOne 440 G9, la solución de Sobremesa HP Pro Small 400 G9 con Monitor HP E24mv G4 y HP EliteBook 665 G11, para adaptarse a diferentes necesidades."
      },
    ]
  };

  return brandFaqs[type] || brandFaqs.apple;
};


export default function FAQSection({ type = 'apple' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = getFaqs(type);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto py-18 px-8 bg-black text-white min-h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <p className="text-justify text-[#9A9A9A]">Sobre {type.charAt(0).toUpperCase() + type.slice(1)} & Genera </p>
        <h2
          className="text-[24px] md:text-[40px] mb-12 capitalize text-left text-white">
          Preguntas Frecuentes
        </h2>
      </motion.div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-2 rounded-2xl p-4 shadow-md transition-all duration-300 ${openIndex === index ? "bg-white text-black" : "bg-black border-white"}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium"
            >
              {faq.question}
              {openIndex === index ? <FaMinus className="transition-transform duration-300" /> : <FaPlus className="transition-transform duration-300" />}
            </button>
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                height: openIndex === index ? "auto" : 0,
                marginTop: openIndex === index ? 16 : 0,
                marginBottom: openIndex === index ? 12 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {faq.answer}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
