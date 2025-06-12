import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import t1 from '../../../assets/t1.svg';
import t2 from '../../../assets/t2.svg';

const processSteps = [
  { number: '01', title: 'Análisis Integral', description: 'Se evalúa el estado actual de la organización para definir objetivos claros.' },
  { number: '02', title: 'Planificación Personalizada', description: 'Se diseña un roadmap que integra consultoría y ejecución.' },
  { number: '03', title: 'Implementación y Seguimiento', description: 'Se acompaña cada fase para optimizar la estrategia y maximizar el retorno de inversión.' },
];

const Details = () => {
  const ref = useRef(null);
  // Use custom offset: the scroll progress starts when the component's center reaches the bottom of the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 100%", "end 100%"]
  });

  // Map scroll progress from 0 to 0.1:
  // At progress 0: white container, black text, and cards bg #EEEEEE.
  // At progress 0.1: black container, white text, and cards bg #111111.
  const containerBg = useTransform(scrollYProgress, [0, 0.1], ['#ffffff', '#000000']);
  const textColor = useTransform(scrollYProgress, [0, 0.1], ['#000000', '#ffffff']);
  const cardBg = useTransform(scrollYProgress, [0, 0.1], ['#EEEEEE', '#111111']);

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: containerBg }}
      className='px-[20px] md:px-[40px] py-[100px]'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0'>
        {/* Left Image Section */}
        <div className='lg:hidden'>
          <img src={t2} alt="" className='h-full w-full object-cover rounded-[30px]' />
        </div>
        <div className='hidden lg:block h-[820px]'>
          <img src={t1} alt="" className='w-full h-full object-cover rounded-[30px]' />
        </div>

        {/* Text & Cards Section */}
        <motion.div style={{ color: textColor }} className='pt-[67px]'>
          <div className='lg:px-[40px]'>
            <motion.h1 style={{ color: textColor }} className='text-[40px] md:text-[64px] font-medium leading-[100%] uppercase'>
              Metodología
            </motion.h1>
            <motion.p style={{ color: textColor }} className='text-[20px] max-w-[310px] md:max-w-[600px] md:text-[24px] font-medium leading-[100%] uppercase py-[20px]'>
              El proceso se fundamenta en un enfoque estructurado que garantiza resultados
            </motion.p>
          </div>

          <div className='flex flex-col md:gap-2 my-3 px-[10px]'>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                style={{ backgroundColor: cardBg, color: textColor }}
                className='px-[40px] py-[35px] rounded-[30px] my-2 flex flex-col lg:flex-row gap-[30px] lg:gap-[20px]'
              >
                <div className='text-[64px] uppercase leading-[100%]'>
                  {step.number}
                </div>
                <div className='flex flex-col gap-[20px]'>
                  <motion.h1 style={{ color: textColor }} className='text-[24px] font-medium leading-[100%]'>
                    {step.title}
                  </motion.h1>
                  <motion.p style={{ color: textColor }} className='text-[20px] max-w-[440px]'>
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Details;
