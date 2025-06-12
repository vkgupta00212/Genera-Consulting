import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 500); // Delay animation for smooth entry
    }, []);

    return (
        <section className="m-[2rem] relative px-6 md:px-10 py-18 md:py-20 rounded-4xl bg-cover bg-center hero-section-four">
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white"
            >
                <h1 className="text-3xl md:text-6xl font-semibold mt-4 leading-tight mb-2 uppercase">
                    Sitio Web y <br />Presencia Básica
                </h1>
            </motion.div>

            <div className="mt-8 md:mt-34 flex justify-end overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-4xl bg-white/20 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-4 backdrop-blur-md"
                >
                    <div className="max-w-[300px]">
                        <p className="text-sm lg:text-lg text-white flex-1 tracking-wide">
                            Aprovecha la subvención del Kit Digital y crea la base online que tu empresa necesita.<br/>
                            Solicita tu web ahora.
                        </p>
                    </div>
                    <div className="md:ml-auto mt-4 md:mt-0 ">
                        <button className="btn-swipe hero-cta-btn w-fit pr-6 cursor-pointer relative overflow-hidden flex items-center 
                        gap-3 bg-white text-black 
                         rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                         border-white hover:text-white  ">
                            <span className="absolute left-4 arrow-icon">
                                <BsArrowRight
                                    className="arrow  relative transition-transform duration-500 ease-in-out group-hover:translate-x-2 
                                                w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1 md:pr-6 lg:pr-0"
                                />
                            </span>
                            <span className="cta-text">Solicita tu web ahora</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
