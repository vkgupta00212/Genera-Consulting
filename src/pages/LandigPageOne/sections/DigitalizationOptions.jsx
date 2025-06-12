import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick"; // Importing react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import bgImage from "../../../assets/slider_bg.jpeg";
import { useNavigate } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import generaCircleLogo from "../../../assets/GroupBlack.svg";

const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// React Slick settings for mobile slider
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: false,
  draggable: true,
  swipe: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,  // iPhone SE, iPhone 8, iPhone 7, iPhone 6
      settings: {
        slidesToShow: 0.9,  // Full-width slides
        centerMode: false,  // No side visibility for small screens
        arrows: false,
        centerMode: "true",
      },
    },
  ]
};

const DigitalCard = ({
  description,
  title,
  titleStyle = "",  // Default styles for title
  paragraphStyle = "text-sm text-white mt-4", // Default styles for paragraph
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  return (
    <div ref={ref} className="p-4">
      <motion.div
        initial={{
          opacity: 1,
          height: "340px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={isInView
          ? {
            opacity: 1,
            height: "340px",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

          }
          : {
            opacity: 0.8,
            height: "340px",
            filter: "brightness(0.5) contrast(1.2)",
          }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mobile-digital-card-width p-8 rounded-4xl shadow-lg  flex flex-col justify-end relative
        hover:border-gray-600 group hover:text-white group-hover:bg-opacity-80 transition-all duration-500"
      >
        <div className="flex items-center">
          <motion.div
            initial={{ rotate: 0, color: "#000" }}
            animate={isInView ? { rotate: 180, color: "#fff" } : { rotate: 0, color: "#000" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-6 right-6 md:p-10"
          >
            <FiArrowUpRight size={35} />
          </motion.div>
          <motion.h3
            initial={{ y: 260, opacity: 0, color: "#000000", fontSize: "5.5em" }}
            animate={isInView ? { y: 0, opacity: 1, color: "#ffffff", fontSize: "1.6em" } : { y: 260, opacity: 0.5, color: "#000000", fontSize: "2.5em" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`md:text-4xl mb-8 absolute top-8 ${titleStyle}`}
          >
            {title}
          </motion.h3>
        </div>


        <p className={`mt-4 text-white text-sm absolute top-20 pr-4 ${paragraphStyle}`}>{description}</p>
        <motion.button
          className="btn-swipe w-[180px] cursor-pointer relative overflow-hidden flex items-center gap-3 bg-white text-black 
                                    px-4 py-4 pl-15 rounded-full text-sm font-bold transition-all duration-500 ease-in-out 
                                    hover:bg-transparent border-1 border-white 
                                    mt-8 hover:text-white hover:pl-0 hover:pr-[5rem] hover:gap-8"
        >
          <span className="absolute left-4 arrow-icon">
            <MdArrowForward
              size={38}
              className="relative transition-transform duration-500 ease-in-out hero-arrow-icon"
            />
          </span>
          <span className="pl-2 uppercase lg:text-[14px] text-[0.7em]">¡Descubre más!</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default function DigitalizationOptions() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="relative md:block hidden">
        <div className="bg-white flex justify-between items-center mb-12 mt-12 mx-2 px-5 border-1 border-[#EEEEEE] py-2 rounded-[15px]">
          <div className="flex items-center gap-2">
            <div className=" rounded-full border-2 border-black flex items-center justify-center">
              <img src={generaCircleLogo} alt="" className="w-8 h-8" />
            </div>
          </div>

          <button onClick={() => handleNavigate('/digital/kitdigital')} className="btn-swipe hero-cta-first-btn w-fit pr-6 cursor-pointer relative overflow-hidden flex items-center 
                        gap-3 bg-black text-white lg:text-[16px]
                         rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                         hover:border-black hover:text-black  hover:border-1">
            <span className="absolute left-4 lg:left-5 arrow-icon lg:bottom-2">
              <MdArrowForward size={45} className="hero-arrow-icon" />
            </span>
            <span className="cta-third-text uppercase">Comienza tu Transformación</span>
          </button>
        </div>
      </div>
  
    <motion.section
      className="bg-cover bg-center p-6 mt-12 md:px-8 md:py-4 mb-12"
      initial="hidden"
      whileInView="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      viewport={{ once: false }}
    >
    

      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 6, bounce: 0.9, duration: 1.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="md:text-[40px] text-xl text-black mb-12 md:mt-0 mt-12 hidden md:block"
      >
        POSIBILIDADES DE DIGITALIZACIÓN
      </motion.h2>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 6, bounce: 0.9, duration: 1.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="md:text-5xl text-2xl pl-4 text-black mb-4 md:mt-0 mt-12 uppercase md:hidden block"
      >
        Servicios Principales
      </motion.h2>

      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* Cards */}
        <motion.div variants={cardVariants} className="digital-card-bg-one px-8 py-8 rounded-4xl shadow-lg min-h-[400px] flex flex-col justify-between relative border border-transparent md:border-black hover:border-gray-600 group hover:text-white transition-all duration-500">
          <FiArrowUpRight className="md:text-4xl lg:text-[55px] absolute top-8 right-4 text-black transition-transform duration-500 group-hover:rotate-180 group-hover:text-white" />
          <h3 className="digital-card-one-title md:text-2xl lg:text-[48px] text-black transition-all duration-500 
                         digital-card-one-title
                          group-hover:text-white">
            Kit Digital
          </h3>
          <p className="digital-card-one-text lg:text-lg md:text-sm mt-4 text-white text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[-50px]">
            Somos Agentes Digitalizadores autorizados. Te guiamos en cada paso para que accedas a las mejores soluciones tecnológicas de forma ágil y sin complicaciones.
          </p>
          <button onClick={() => handleNavigate('/digital/kitdigital')} className="btn-swipe  w-fit cursor-pointer relative overflow-hidden flex items-center gap-3 bg-white text-black 
                                    px-5 py-4 pl-15 rounded-full text-sm font-bold transition-all duration-500 ease-in-out 
                                    hover:bg-transparent border-1 border-white opacity-0 
                                    group-hover:opacity-100 group-hover:translate-y-[10px] hover:text-white hover:pl-4 hover:pr-3 hover:w-[210px]">
            <span className="absolute left-4 arrow-icon">
              <MdArrowForward size={25} className="relative transition-transform duration-500 ease-in-out" />
            </span>
            <span className="pl-1 uppercase">¡Descubre más!</span>
          </button>
        </motion.div>

        <motion.div variants={cardVariants} className="digital-card-bg-two px-8 py-8 rounded-4xl shadow-lg min-h-[400px] flex flex-col 
        justify-between relative border border-transparent md:border-black hover:bg-gray-900 hover:border-gray-600 group hover:text-white
         transition-all duration-500">
          <FiArrowUpRight className="md:text-4xl lg:text-[55px]  absolute top-8 right-3 hidden md:block text-black transition-transform duration-500 group-hover:rotate-180 group-hover:text-white" />
          <h3 className="md:text-2xl lg:text-[48px] text-black transition-all duration-500 
                         digital-card-two-title">
            Ordenadores
          </h3>
          <p className="lg:text-lg md:text-sm text-white text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[-50px]">
            Te guiamos en cada paso para que accedas a las mejores soluciones tecnológicas de forma ágil y sin complicaciones.
          </p>
          <button onClick={() => handleNavigate('/digital/ordenadores')} className="btn-swipe  w-fit cursor-pointer relative overflow-hidden flex items-center gap-3 bg-white text-black 
                                    px-5 py-4 pl-15 rounded-full text-sm font-bold transition-all duration-500 ease-in-out 
                                    hover:bg-transparent border-1 border-white opacity-0 
                                    group-hover:opacity-100 group-hover:translate-y-[10px] hover:text-white hover:pl-3 hover:pr-4 hover:w-[210px]">
            <span className="absolute left-4 arrow-icon">
              <MdArrowForward size={25} className="relative transition-transform duration-500 ease-in-out" />
            </span>
            <span className="pl-1 uppercase">¡Descubre más!</span>
          </button>
        </motion.div>

        <motion.div variants={cardVariants} className="digital-card-bg-three p-8 rounded-4xl shadow-lg min-h-[400px] flex flex-col justify-between relative border border-transparent md:border-black hover:bg-gray-900 hover:border-gray-600 group hover:text-white transition-all duration-500">
          <FiArrowUpRight className="md:text-4xl lg:text-[55px] absolute top-8 right-6 hidden md:block text-black transition-transform duration-500 group-hover:rotate-180 group-hover:text-white" />
          <h3 className="md:text-2xl lg:text-[48px] text-4xl text-black transition-all duration-500 
                        digital-card-three-title">
            Servicios <br /> Digitales
          </h3>
          <p className="lg:text-lg md:text-sm mt-4 md:mt-18 text-white text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[-50px]">
            Te guiamos en cada paso para que accedas a las mejores soluciones tecnológicas de forma ágil y sin complicaciones.
          </p>
          <button onClick={() => handleNavigate('/digital/Serviciosdigitales')} className="btn-swipe  w-fit mb-12 cursor-pointer relative overflow-hidden flex items-center gap-3 bg-white text-black 
                                    px-5 py-4 pl-15 rounded-full text-sm font-bold transition-all duration-500 ease-in-out 
                                    hover:bg-transparent border-1 border-white opacity-0 
                                    group-hover:opacity-100 group-hover:translate-y-[50px] hover:text-white  hover:pl-4 hover:pr-3 hover:w-[210px]">
            <span className="absolute left-4 arrow-icon">
              <MdArrowForward size={25} className="relative transition-transform duration-500 ease-in-out" />
            </span>
            <span className="pl-1 uppercase">¡Descubre más!</span>
          </button>
        </motion.div>
      </div>

      <div className="md:hidden">
        <Slider {...settings}>

          <DigitalCard
            title="Kit Digital"
            titleStyle="mobile-digital-card-title "
            description="Somos Agentes Digitalizadores autorizados. Te guiamos en cada paso para que accedas a las mejores soluciones tecnológicas de forma ágil y sin complicaciones."
          />
          <DigitalCard
            title="Ordenadores"
            titleStyle="mobile-digital-card-title top-10"
            description="Equipa tu negocio con la tecnología que realmente necesitas. Te ayudamos a encontrar la mejor solución informática para impulsar tu productividad."
          />
          <DigitalCard
            title={<>Servicios <br /> Digitales</>}
            description="Te ofrecemos un abanico de herramientas y estrategias digitales, desde la idea inicial hasta la implementación."
            titleStyle="text-[1.5em]"
            paragraphStyle="text-sm text-gray-300 top-28"
          />

        </Slider>
      </div>


    </motion.section>
    </>
  );
}