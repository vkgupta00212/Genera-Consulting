import { useState } from "react";
import { motion } from "framer-motion";

const accordionData = [
  {
    title: "¿Ofrecéis subvenciones para todos vuestros servicios?",
    content:
      "Aunque gestionamos el Kit Digital como Agentes Digitalizadores, no todos nuestros servicios están subvencionados. Siempre buscamos la opción más beneficiosa para cada cliente",
  },
  {
    title: "¿Trabajáis exclusivamente con pymes o también con grandes empresas?",
    content:
      "Atendemos a cualquier empresa que necesite digitalizar sus procesos: desde autónomos y microempresas hasta grandes corporaciones.",
  },
  {
    title: "¿Cómo empiezo a trabajar con vosotros?",
    content:
      "Depende de la complejidad y el alcance. Algunos proyectos se completan en pocas semanas, mientras que otros pueden llevar varios meses de desarrollo y testeo.",
  },
  {
    title: "¿Cuánto tarda, por lo general, un proyecto de digitalización?",
    content:
      "Depende de la complejidad y el alcance. Algunos proyectos se completan en pocas semanas, mientras que otros pueden llevar varios meses de desarrollo y testeo.",
  },
  {
    title: "¿Puedo optar a varias soluciones digitales a la vez (p.ej., web y redes sociales)?",
    content: "Sí. Si cuentas con un bono Kit Digital y el saldo disponible es suficiente, puedes implementar varias soluciones dentro del programa. En caso de que la subvención no cubra todas tus necesidades, ofrecemos también servicios fuera del Kit Digital para complementar tu proyecto. Nuestro equipo te ayudará a priorizar y encontrar la mejor combinación según tus objetivos y presupuesto",
  },
];

const rightAccordionData = [
 
  {
    title: "¿Qué sucede si mi solicitud de subvención (Kit Digital) no es aprobada?",
    content: "Podemos seguir adelante con los servicios que necesites bajo un modelo de financiación privada, sin subvención. Estudiaremos la forma más conveniente de ajustar el proyecto a tu presupuesto.",
  },
  {
    title: "¿Ofrecéis formación para usar las nuevas herramientas o tecnologías que implementáis?",
    content: "Sí. Siempre que sea necesario, proporcionamos una capacitación básica al finalizar cada proyecto para que puedas aprovechar al máximo la solución implantada.",
  },
  {
    title: "¿Qué diferencia a Genera Digital de otras empresas de servicios digitales?",
    content: "Nuestro enfoque integral, la experiencia con más de 50 profesionales y la cercanía en el trato hacen que cada proyecto sea verdaderamente personalizado.",
  },
  {
    title: "¿En qué zonas o países ofrecéis vuestros servicios?",
    content: "Si bien estamos ubicados en España, gran parte de nuestros servicios pueden implementarse de forma remota, lo que nos permite llegar a clientes de distintos países.",
  },
  {
    title: "¿Cómo manejáis la confidencialidad y la protección de datos de mis proyectos?",
    content: "Cumplimos con la normativa vigente de protección de datos y contamos con protocolos de seguridad para garantizar que toda la información se mantenga segura y confidencial.",
  },
];

export default function MultiColumnAccordion() {
  const [openLeftIndex, setOpenLeftIndex] = useState(null);
  const [openRightIndex, setOpenRightIndex] = useState(null);

  const toggleAccordion = (index, isLeft) => {
    if (isLeft) {
      setOpenRightIndex(null); // Close any open right section
      setOpenLeftIndex(openLeftIndex === index ? null : index); // Toggle left
    } else {
      setOpenLeftIndex(null); // Close any open left section
      setOpenRightIndex(openRightIndex === index ? null : index); // Toggle right
    }
  };

  return (
    <div className="bg-black px-6 mt-24 py-22">
      <h2 className="text-[24px] md:text-[40px] mb-12 uppercase text-left text-white">
        Preguntas Frecuentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 w-full">
        {[accordionData, rightAccordionData].map((data, sectionIndex) => (
          <div key={sectionIndex}>
            {data.map((item, index) => {
              const isLeft = sectionIndex === 0;
              const isOpen = isLeft ? openLeftIndex === index : openRightIndex === index;

              return (
                <div
                  key={index}
                  className="border mb-2  border-white rounded-2xl overflow-hidden transition-all duration-700 ease-in-out"
                >
                  <button
                    onClick={() => toggleAccordion(index, isLeft)}
                    className={`w-full text-left px-4 flex justify-between items-center transition-all duration-500 ease-in-out py-6 
                      ${isOpen ? "bg-white text-black rounded-t-2xl pb-1" : "bg-black text-white rounded-2xl"}`}
                  >
                    {item.title}
                    <span className="text-2xl cursor-pointer">{isOpen ? "−" : "+"}</span>
                  </button>

                  {/* Smooth Animated Content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      height: isOpen ? "auto" : 0,
                      marginTop: isOpen ? 0 : 0,
                      marginBottom: isOpen ? 0 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white text-black py-3 px-3 rounded-b-2xl">
                      <p>{item.content}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
