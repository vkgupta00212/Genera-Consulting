import React, { useEffect, useRef, useState } from "react";
import "./workwithus.css";
import { motion } from "framer-motion";
import bgOne from "../../../assets/bg_one.jpeg";

const WorkWithUs = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const content = {
        title: "¿Por qué confiar en Genera Digital para tu Kit Digital?",
        benefits: [
            {
                number: "01",
                title: "Certificados",
                description: "Somos Agentes Digitalizadores Oficiales, autorizados por el Gobierno de España.",
                image: bgOne,
            },
            {
                number: "02",
                title: "Tramitación",
                description: "Tramitamos el alta de manera ágil y gratuita.",
                image: bgOne,
            },
            {
                number: "03",
                title: "Asesoría",
                description: "Ofrecemos asesoría personalizada para escoger la mejor categoría según tu bono y necesidades.",
                image: bgOne,
            },
            {
                number: "04",
                title: "Profesionales",
                description: "Equipo técnico especializado para cada solución digital.",
                image: bgOne,
            }
        ]
    };

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
                        {content.title}
                    </motion.h2>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/3 relative">
                <div ref={containerRef} className="h-[500px] md:h-auto lg:h-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200 px-4 space-y-6">
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
                            className="w-full md:w-[300px] lg:w-[600px] h-[40vh] lg:h-[60vh] md:h-[30vh] min-w-[200px] md:mt-8 flex flex-col justify-between transition-transform duration-500 ease-out text-white p-6 rounded-2xl shadow-lg"
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