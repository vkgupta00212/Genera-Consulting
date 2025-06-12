import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";


export default function HeroSection({ type = 'apple' }) {
    const [animate, setAnimate] = useState(false);

    const brandContent = {
        apple: {
            title: "Apple & Kit Digital",
            cta: "Solicitar Mi Apple Subvencionado",
            description: "Consigue tu equipo Apple subvencionado y da un salto de calidad en tu negocio."
        },
        samsung: {
            title: "Samsung & Kit Digital",
            cta: "Solicitar Mi Samsung Subvencionado",
            description: "Consigue tu equipo Samsung subvencionado y potencia tu negocio con tecnología de vanguardia."
        },
        hp: {
            title: "HP & Kit Digital",
            cta: "Solicitar mi HP Subvencionado",
            description: "Consigue tu equipo HP subvencionado y eleva la productividad de tu empresa"
        }
    };

    const content = brandContent[type] || brandContent.apple;

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 500); // Delay animation for smooth entry
    }, []);

    return (
        <section className="md:m-[2rem] relative px-6 md:px-20 py-10 md:py-20 rounded-[50px] bg-cover bg-center hero-section-three">
            
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=" text-white "
            >

                <h1 className="text-4xl lg:text-[56px] md:text-6xl md:mt-4 font-semibold leading-tight mb-2 uppercase">
                    {content.title}
                </h1>
            </motion.div>


            <div className="mt-8 md:mt-34 flex justify-end overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:max-w-4xl bg-white/20 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start 
                    md:items-center gap-4 backdrop-blur-md"
                >
                    <div className="max-w-[350px]">
                        <p className="text-[20px] md:text-[24px] text-white flex-1 tracking-wide">
                            {content.description}
                        </p>
                    </div>
                    <div className="md:ml-auto mt-4 md:mt-0 ">
                        <button className="btn-swipe hero-cta-third-btn w-fit pr-6 cursor-pointer relative overflow-hidden flex items-center 
                        gap-3 bg-white text-black 
                         rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                         border-white hover:text-white  ">
                            <span className="absolute left-4 arrow-icon">
                                <BsArrowRight
                                    className="arrow  relative transition-transform duration-500 ease-in-out group-hover:translate-x-2 
                                                w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1 md:pr-6 lg:pr-0"
                                />
                            </span>
                            <span className="cta-third-text uppercase">{content.cta}</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
