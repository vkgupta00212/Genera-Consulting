import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "¿Puedo combinar esta subvención con otras ayudas?", answer: "En la mayoría de los casos, sí, siempre que no se solapen las mismas partidas de gasto." },
  { question: "¿Cuándo se cobra la subvención?", answer: "Cubre hasta 1.000€. El resto corre a cargo del cliente." },
  { question: "¿Hay límite de fechas?", answer: "Cubre hasta 1.000€. El resto corre a cargo del cliente." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto py-18 px-8 bg-black text-white min-h-fit">
        <motion.div
        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
        whileInView={{ opacity: 1, y: 0, }} // Fade in and move up
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: false, amount: 0.5 }} // Animate every time it appears
      >


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
              marginTop: openIndex === index ? 16 : 0, // Adds spacing when open
              marginBottom: openIndex === index ? 12 : 0, // Adds spacing when open
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Slow and smooth
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
