import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import { BsArrowRight } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";


export default function HeroSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 500); // Delay animation for smooth entry
    }, []);

    return (
        <section className="m-[1rem] md:m-[2rem] relative px-6 md:px-20 py-28 rounded-4xl bg-cover bg-center hero-section-two">
                    <motion.div
                          initial={{ opacity: 0, scale: 1.2 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        className=" text-white md:block hidden"
                    >
                        <h1 className="text-3xl md:text-[64px]  font-semibold leading-tight mb-2 uppercase">
                        Kit Digital
                        </h1>
                        <p className="text-sm md:text-[24px] font-semibold uppercase leading-tight">
                        soluciones subvencionadas
                        </p>
                    </motion.div>
                    <motion.div
                          initial={{ opacity: 0, scale: 1.2 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        className=" text-white md:hidden block"
                    >
                        
                        <h1 className="text-3xl md:text-6xl mt-[-2em] font-semibold leading-tight mb-2 uppercase">
                        Kit Digital y Soluciones Tecnológicas
                        </h1>
                    </motion.div>
                   

            <div className="mt-8 md:mt-34 flex justify-end overflow-hidden"> 
                <motion.div
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                     className="w-full lg:max-w-5xl bg-white/20 p-4 md:p-8 rounded-[30px] flex flex-col md:flex-row items-start md:mt-34
                    md:items-center backdrop-blur-md"
                  >
                    <div className="max-w-[450px]">
                        <p className="text-sm md:text-[24px] text-white flex-1 tracking-wide">
                        Aprovecha las ayudas del Gobierno de España y digitaliza tu negocio con expertos certificados
                        </p>
                    </div>
                    <div className="md:ml-auto mt-4 md:mt-0 ">
                        {/* <button className="btn-swipe hero-cta-second-btn w-fit pr-6 cursor-pointer relative overflow-hidden flex items-center 
                        gap-3 bg-white text-black 
                         rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                         border-white hover:text-white  ">
                            <span className="absolute left-4 arrow-icon">
                                <BsArrowRight
                                    className="arrow  relative transition-transform duration-500 ease-in-out group-hover:translate-x-2 
                                                w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1 md:pr-6 lg:pr-0"
                                />
                            </span>
                            <span className="cta-second-text uppercase">Empieza tu solicitud hoy mismo</span>
                        </button> */}
                    </div>
                     <div className="md:ml-auto mt-4 md:mt-0 ">
                                            <button  className="btn-swipe hero-cta-second-btn w-fit pr-6 cursor-pointer relative overflow-hidden flex items-center 
                                            gap-3 bg-white text-black  lg:text-[16px]
                                             rounded-[50px] text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                                             border-white hover:text-white  ">
                                                    <span className="absolute left-4 lg:left-5 arrow-icon lg:bottom-2">
                                                     <MdArrowForward  size={45} className="hero-arrow-icon" />
                                                        {/* <img src={arrowBtn} alt="" /> */}
                                                        {/* <img src={arrowBtnRight} alt="" /> */}
                                                    </span>
                                                    <span className="cta-third-text uppercase">Empieza tu solicitud hoy mismo</span>
                                                </button>
                                            </div>
                </motion.div>
            </div>
        </section>
    );
}
