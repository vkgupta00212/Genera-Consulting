import React, { useState } from 'react';
import plus from '../../../assets/plus.svg';
import negative from '../../../assets/negative.svg';


const Faq = () => {
  // Track the index of the currently expanded FAQ item (or null if none)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const Data = [
    {
      question: "¿Trabajáis exclusivamente con pymes o también con grandes empresas?",
      answer: "Aunque gestionamos el Kit Digital como Agentes Digitalizadores, no todos nuestros servicios están subvencionados. Siempre buscamos la opción más beneficiosa para cada cliente."

    },
    {
      question: "¿Cómo se estructura el proceso de consultoría?",
      answer: "Aunque gestionamos el Kit Digital como Agentes Digitalizadores, no todos nuestros servicios están subvencionados. Siempre buscamos la opción más beneficiosa para cada cliente."
    },
    {
      question: "¿Trabajáis exclusivamente con pymes o también con grandes empresas?",
      answer: "Aunque gestionamos el Kit Digital como Agentes Digitalizadores, no todos nuestros servicios están subvencionados. Siempre buscamos la opción más beneficiosa para cada cliente."

    },
    {
      question: "¿Qué tipo de empresas pueden beneficiarse de estos servicios?",
      answer: "Aunque gestionamos el Kit Digital como Agentes Digitalizadores, no todos nuestros servicios están subvencionados. Siempre buscamos la opción más beneficiosa para cada cliente."
    },
    {
      question: "¿Cómo se garantiza la confidencialidad y seguridad de la información?",
      answer: "Aunque gestionamos el Kit Digital como Agentes Digitalizadores, no todos nuestros servicios están subvencionados. Siempre buscamos la opción más beneficiosa para cada cliente."

    },
    {
      question: "¿Cómo se mide el éxito de un proyecto de consultoría?",
      answer: "Aunque gestionamos el Kit Digital como Agentes Digitalizadores, no todos nuestros servicios están subvencionados. Siempre buscamos la opción más beneficiosa para cada cliente."
    },
  ]


  return (
    <div className='px-[20px] md:px-[40px] py-[80px] md:py-[100px] bg-black'>
      <div>
        <h1 className='text-[24px] md:text-[64px] font-medium leading-[100%] uppercase text-white'>
          preguntas frecuentes
        </h1>
      </div>

      <div className='py-[50px] flex flex-col gap-2'>
        {Data.map((data, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div
              key={i}
              className={`rounded-[20px] border-2 cursor-pointer transition-all duration-300 
                          ${isExpanded ? 'bg-white' : 'bg-black'} border-white`}
              onClick={() => toggleFAQ(i)}
            >
              <div
                className={`flex flex-row justify-between py-[25px] px-[30px] 
                            ${isExpanded ? 'text-black' : 'text-white'}`}
              >
                <p className='text-[20px] font-medium'>{data.question}</p>
                <img src={isExpanded ? negative : plus} alt="" />
              </div>
              {isExpanded && (
                <div className={`px-[30px] pb-[25px] ${isExpanded ? 'text-black' : 'text-white'}`}>
                  <p className='text-[16px] text-[#525252]'>{data.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
