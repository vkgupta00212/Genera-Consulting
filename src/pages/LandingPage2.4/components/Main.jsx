import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Arrow1 from '../../../assets/arrow1.png';
import Arrow2 from '../../../assets/BlackArrow.svg';
import { BsArrowRight } from 'react-icons/bs'

const Main = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 100%", "end 100%"] // transition starts when center hits bottom of viewport
  });

  // Use a small mapping range [0, 0.1] so the transition happens very fast.
  const containerBg = useTransform(scrollYProgress, [0, 0.1], ['#000000', '#ffffff']);
  const card1Bg = useTransform(scrollYProgress, [0, 0.1], ['#111111', '#EEEEEE']);
  const card2Bg = useTransform(scrollYProgress, [0, 0.1], ['#111111', '#F3EDE1']);
  const textColor = useTransform(scrollYProgress, [0, 0.1], ['#ffffff', '#000000']);

  // Manage arrow image change based on scroll progress.
  const [arrowSrc, setArrowSrc] = useState(Arrow1);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setArrowSrc(Arrow2);
    } else {
      setArrowSrc(Arrow1);
    }
  });

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: containerBg }}
      className="py-[100px] px-[20px] md:px-[40px]"
    >
      <div>
        <motion.h1
          style={{ color: textColor }}
          className="text-[40px] md:text-[64px] uppercase leading-[100%] font-medium text-center"
        >
          nuestras Soluciones
        </motion.h1>
      </div>

      <div className="mt-[40px] grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* First Card */}
        <motion.div
          style={{ backgroundColor: card1Bg }}
          className="py-[40px] md:py-[60px] rounded-[30px] px-[30px] md:px-[50px]"
        >
          <div>
            <motion.h1
              style={{ color: textColor }}
              className="text-[34px] md:text-[48px] font-medium leading-[100%] uppercase text-start"
            >
              Kit Consulting
            </motion.h1>
          </div>

          <div className="pt-[80px] pb-[60px]">
            <div className="block lg:hidden">
              <motion.h2
                style={{ color: textColor }}
                className="text-[20px] md:text-[24px] uppercase leading-[100%] font-normal"
              >
                Digitalización y <br /> Crecimiento
              </motion.h2>
            </div>
            <div className="hidden lg:block">
              <motion.h2
                style={{ color: textColor }}
                className="text-[20px] md:text-[24px] uppercase leading-[100%] font-normal"
              >
                Digitalización y Crecimiento
              </motion.h2>
            </div>
            <motion.p
              style={{ color: textColor }}
              className="text-[16px] max-w-[500px] md:text-[20px] py-[25px] font-normal leading-[100%] tracking-wider lg:tracking-normal"
            >
              Se accede a subvenciones de hasta 24.000 € para transformar negocios.
              Con Kit Consulting se gestionan todos los trámites, se implementan
              soluciones digitales y se acompaña en cada etapa, facilitando la
              modernización de procesos y el incremento de la competitividad. Más de
              1.500 pymes ya han dado el salto.
            </motion.p>
          </div>

          {/* <motion.button
            style={{
              backgroundColor: card1Bg,
              borderColor: textColor,
              color: textColor,
            }}
            className="flex justify-center items-center gap-[18px] py-[12.5px] md:py-[15px] px-[25px] md:px-[30px] border rounded-[41px] md:rounded-[50px] text-[14px] md:text-[16px] font-semibold"
          >
            <span>
              <img
                src={arrowSrc}
                alt=""
                className="h-[24px] md:h-[32px] w-[24px] md:w-[32px]"
              />
            </span>
            Conoce Kit Consulting
          </motion.button> */}

<motion.button 
  style={{
    borderColor: textColor,
    color: textColor,
  }}
  className="group flex justify-center items-center gap-[18px] bg-[var(--card1Bg)] hover:bg-white hover:text-black border hover:border-0 py-[12.5px] md:py-[15px] px-[25px] md:px-[30px] rounded-[41px] md:rounded-[50px] text-[14px] md:text-[16px] font-semibold transition-all duration-500 ease-in-out"
>
  <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-45">
    <BsArrowRight className="h-[24px] md:h-[32px] w-[24px] md:w-[32px]" />
  </span>
  <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-14">
    AGENDAR LLAMADA
  </span>
</motion.button>

        </motion.div>

        {/* Second Card */}
        <motion.div
          style={{ backgroundColor: card2Bg }}
          className="py-[40px] md:py-[60px] rounded-[30px] px-[30px] md:px-[50px]"
        >
          <div>
            <motion.h1
              style={{ color: '#A67437' }}
              className="text-[34px] md:text-[48px] font-medium leading-[100%] uppercase text-start"
            >
              Private Consulting
            </motion.h1>
          </div>

          <div className="pt-[80px] pb-[60px]">
            <motion.h2
              style={{ color: '#A67437' }}
              className="text-[20px] md:text-[24px] uppercase leading-[100%] font-normal"
            >
              Asesoría Premium
            </motion.h2>
            <motion.p
              style={{ color: textColor }}
              className="text-[16px] max-w-[500px] md:text-[20px] py-[25px] font-normal leading-[100%] tracking-wider lg:tracking-normal"
            >
              Para proyectos de alto impacto y necesidades específicas, se ofrece un
              servicio especializado que combina la experiencia de consultores sénior
              con metodologías avanzadas. Se obtienen soluciones personalizadas y
              confidenciales, adaptadas a la estrategia y objetivos de cada
              organización.
            </motion.p>
          </div>

          {/* <motion.button
            style={{
              backgroundColor: card2Bg,
              borderColor: textColor,
              color: textColor,
            }}
            className="flex justify-center items-center gap-[18px] py-[12.5px] md:py-[15px] px-[25px] md:px-[30px] border rounded-[41px] md:rounded-[50px] text-[14px] md:text-[16px] font-semibold"
          >
            <span>
              <img
                src={arrowSrc}
                alt=""
                className="h-[24px] md:h-[32px] w-[24px] md:w-[32px]"
              />
            </span>
            Conoce Private Consulting
          </motion.button> */}
          <motion.button 
  style={{
    borderColor: textColor,
    color: textColor,
  }}
  className="group flex justify-center items-center gap-[18px] bg-[var(--card1Bg)] hover:bg-white hover:text-black border hover:border-0 py-[12.5px] md:py-[15px] px-[25px] md:px-[30px] rounded-[41px] md:rounded-[50px] text-[14px] md:text-[16px] font-semibold transition-all duration-500 ease-in-out"
>
  <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-55">
    <BsArrowRight className="h-[24px] md:h-[32px] w-[24px] md:w-[32px]" />
  </span>
  <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-14">
  Conoce Private Consulting
  </span>
</motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Main;
