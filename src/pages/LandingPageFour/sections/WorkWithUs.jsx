import React, { useEffect, useRef, useState } from "react";
import "./workwithus.css";
import { motion } from "framer-motion";
import bgOne from "../../../assets/bg_one.jpeg";

const WorkWithUs = ({ type = 'apple' }) => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const brandContent = {
        apple: {
            title: " ¿Por qué pedir un sitio web de Kit Digital con Genera?",
            benefits: [
                {
                    number: "01",
                    title: "Ahorro",
                    description: "subvención de hasta 2.000€ para la creación o mejora de tu página."
                },
                {
                    number: "02",
                    title: "Profesionalidad",
                    description: "diseño moderno y responsive."
                },
                {
                    number: "03",
                    title: "Rapidez",
                    description: " nuestro equipo técnico implementa la web en tiempo récord."
                }
            ]
        },
        samsung: {
            title: "¿Por Qué Pedir un Ordenador Samsung con Kit Digital?",
            benefits: [
                {
                    number: "01",
                    title: "Rendimiento",
                    description: "Equipos diseñados para ofrecer un rendimiento excepcional en aplicaciones profesionales.",
                    image: bgOne,
                },
                {
                    number: "02",
                    title: "Innovación",
                    description: "Incorporan las últimas tecnologías que potencian la productividad y facilitan la multitarea.",
                    image: bgOne,
                },
                {
                    number: "03",
                    title: "Soporte y Garantía",
                    description: "Acceso a soporte técnico y garantías oficiales de Samsung que aseguran la fiabilidad del dispositivo.",
                    image: bgOne,
                },
                {
                    number: "04",
                    title: "Subvención",
                    description: "Disminución significativa del coste de adquisición con una ayuda de 1.000 €.",
                    image: bgOne,
                }
            ]
        },
        hp: {
            title: "¿Por qué pedir un ordenador HP con Kit Digital?",
            benefits: [
                {
                    number: "01",
                    title: "Rendimiento Empresarial",
                    description: "Los equipos HP están diseñados para ofrecer un rendimiento excepcional en entornos profesionales y soportar aplicaciones de alta demanda."
                },
                {
                    number: "02",
                    title: "Confiabilidad",
                    description: "Incorporan las últimas tecnologías que optimizan procesos y elevan la productividad, asegurando resultados sólidos."
                },
                {
                    number: "03",
                    title: "Amplia Gama de Opciones",
                    description: "Una diversa selección de modelos permite adaptarse a las distintas necesidades y perfiles de uso en la empresa."
                },
                {
                    number: "04",
                    title: "Subvención Atractiva",
                    description: "Con una ayuda de hasta 1.000 €, se reduce significativamente el coste de actualización tecnológica, facilitando la transformación digital."
                }
            ]
        }
    };


    const content = brandContent[type] || brandContent.apple;

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const cards = containerRef.current.children;
            let indexToActivate = null;

            Array.from(cards).forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const middleScreen = window.innerHeight / 2;

                if (rect.top < middleScreen && rect.bottom > middleScreen) {
                    indexToActivate = index;
                }
            });

            setActiveIndex(indexToActivate);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-white text-black mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-full lg:w-full md:sticky md:top-20 min-h-[10vh] flex items-center md:items-start">
                <div className="w-full lg:w-2/3 lg:ml-4 md:w-1/2 sticky top-0 md:h-screen min-h-[10vh] flex items-center service-title">
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-2xl sm:text-xl pl-4 lg:pl-0 md:text-4xl md:pl-6 font-light leading-tight uppercase"
                    >
                        {content.title} <br />
                    </motion.h2>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/3 relative">
                {/* Scrollable Container */}
                <div ref={containerRef}
                    className="h-[500px] md:h-auto lg:h-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200 px-4 space-y-6"
                >
                    {content.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            onViewportEnter={() => setActiveIndex(index)}
                            initial="hidden"
                            animate={activeIndex === index ? "visible" : "hidden"}
                            exit="hidden"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            variants={{
                                hidden: { filter: "brightness(0.9)", opacity: 0.7 },
                                visible: { filter: "brightness(1)", opacity: 1 },
                            }}
                            style={{
                                backgroundImage: `url(${benefit.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            className={`w-full md:w-[300px] lg:w-[600px] h-[40vh] lg:h-[60vh] md:h-[30vh] min-w-[200px] md:mt-8
                        flex flex-col justify-between transition-transform duration-500 ease-out 
                        text-white p-6 rounded-2xl shadow-lg`}
                        >
                            <h2 className="text-5xl font-bold">{benefit.number}</h2>
                            <div className="card-content">
                                <h3 className="text-2xl font-semibold mt-2">{benefit.title}</h3>
                                <p className="text-sm mt-2">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}


                </div>
            </div>

        </div>
    );
};

export default WorkWithUs;


