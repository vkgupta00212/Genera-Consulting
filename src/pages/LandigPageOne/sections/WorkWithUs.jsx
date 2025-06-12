import React, { useRef, useState } from "react";
import "./workwithus.css";
import { motion, useInView } from "framer-motion";
import bgOne from  "../../../assets/bg_one.jpeg";
const WorkWithUs = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="bg-black text-white mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">

            <div className="w-full md:w-full md:sticky md:top-20 min-h-[10vh] flex items-center md:items-start">
                <div className="w-full lg:w-full sticky top-0 md:h-screen min-h-[10vh] flex items-center service-title">
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-2xl lg:text-[40px] sm:text-xl pl-4 md:pl-4 lg:pl-3 md:text-5xl font-light leading-tight"
                    >
                        ¿POR QUÉ TRABAJAR <br /> CON GENERA DIGITAL?
                    </motion.h2>
                </div>
            </div>
            <div ref={containerRef} className="md:block hidden w-full justify-center md:justify-end lg:w-full relative 
            overflow-hidden md:py-1 md:p-2 lg:mr-1 sm:justify-center lg:justify-center">
      <div className="md:grid md:grid-cols-1 gap-6">

        {/* Card 1 */}
        <motion.div
          onViewportEnter={() => setActiveIndex(0)}
          whileInView={{ opacity: 1, filter: "brightness(1)" }}
          initial={{ opacity: 0.4, filter: "brightness(0.75)" }}
          transition={{ duration: 0.2 }}
          className="work-with-card-one-first-bg mt-4 lg:w-[630px] md:w-[320px] h-[40vh] md:h-[30vh] 
          min-w-[200px] md:mt-8 lg:mt-12 lg:min-w-[450px] lg:max-w-[600px] lg:h-[400px] ml-auto mr-4 flex flex-col 
          justify-between text-white p-6 rounded-[30px] shadow-lg"
        >
          <h2 className="text-7xl font-bold">01</h2>
          <div className="card-content">
            <h3 className="text-3xl font-semibold mt-2">Resultados Garantizados</h3>
            <p className="text-sm mt-2">
              Implementamos estrategias efectivas para maximizar el impacto de cada solución.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          onViewportEnter={() => setActiveIndex(1)}
          whileInView={{ opacity: 1, filter: "brightness(1)" }}
          initial={{ opacity: 0.6, filter: "brightness(0.75)" }}
          transition={{ duration: 0.5 }}
          className="work-with-card-one-second-bg md:h-[30vh] mt-4 lg:w-[630px]  md:w-[320px] h-[40vh] min-w-[200px] lg:min-w-[450px] lg:max-w-[600px] lg:h-[400px] ml-auto mr-4 flex flex-col justify-between bg-black border border-gray-500 text-white p-6 rounded-[30px] shadow-lg"
        >
          <h2 className="text-7xl font-bold">02</h2>
          <div className="card-content">
            <h3 className="text-3xl font-semibold mt-2">Resultados Garantizados</h3>
            <p className="text-sm mt-2">
              Implementamos estrategias efectivas para maximizar el impacto de cada solución.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          onViewportEnter={() => setActiveIndex(2)}
          whileInView={{ opacity: 1, filter: "brightness(1)" }}
          initial={{ opacity: 0.6, filter: "brightness(0.75)" }}
          transition={{ duration: 0.5 }}
          className="work-with-card-one-third-bg md:h-[30vh] mt-4 lg:w-[630px]  md:w-[320px] h-[40vh] min-w-[200px] lg:min-w-[450px] lg:max-w-[600px] lg:h-[400px] ml-auto flex flex-col mr-4 justify-between bg-white text-white p-6 rounded-[30px] shadow-lg"
        >
          <h2 className="text-7xl font-bold">03</h2>
          <div className="card-content">
            <h3 className="text-3xl font-semibold mt-2">Resultados Garantizados</h3>
            <p className="text-sm mt-2">
              Implementamos estrategias efectivas para maximizar el impacto de cada solución.
            </p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          onViewportEnter={() => setActiveIndex(3)}
          whileInView={{ opacity: 1, filter: "brightness(1)" }}
          initial={{ opacity: 0.6, filter: "brightness(0.75)" }}
          transition={{ duration: 0.5 }}
          className="work-with-card-one-fourth-bg md:h-[30vh] mt-4 lg:w-[630px]  md:w-[320px] h-[40vh] min-w-[200px] lg:min-w-[450px] lg:max-w-[600px] lg:h-[400px] ml-auto mr-4 flex flex-col justify-between bg-black border border-gray-500 text-white 
          p-6 rounded-[30px] shadow-lg"
        >
          <h2 className="text-7xl font-bold">04</h2>
          <div className="card-content">
            <h3 className="text-3xl font-semibold mt-2">Resultados Garantizados</h3>
            <p className="text-sm mt-2">
              Implementamos estrategias efectivas para maximizar el impacto de cada solución.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
            {/* Cards Container */}
            <div className="w-full md:hidden block h-[60vh] md:h-[80vh] ml-6 md:ml-0 lg:h-[90vh] overflow-y-auto scrollbar-hide" ref={containerRef}>
                <div className="grid md:grid-cols-1 gap-6 mx-auto">

                    {/* Card 1 */}
                    <Card number="01" 
                     bgImage={bgOne}
                    title="Resultados Garantizados" text="Implementamos estrategias efectivas para maximizar el impacto de cada solución." />
                    
                    {/* Card 2 */}
                    <Card number="02" 
                     bgImage="/images/card2-mobile.jpg"
                    title="Innovación Constante" text="Nos mantenemos a la vanguardia con las últimas tecnologías para ofrecerte soluciones innovadoras." />

                    {/* Card 3 */}
                    <Card number="03" 
                     bgImage="/images/card2-mobile.jpg"
                    title="Soporte Dedicado" text="Brindamos asistencia y seguimiento continuo para garantizar el éxito de cada proyecto." />

                    {/* Card 4 */}
                    <Card number="04" 
                     bgImage="/images/card2-mobile.jpg"
                    title="Compromiso Total" text="Nos enfocamos en ofrecerte la mejor experiencia y resultados tangibles para tu negocio." />

                </div>
            </div>
        </div>
    );
};

const Card = ({ number, title, text, bgImage }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.3, scale: 0.1 }}
            animate={{
                opacity: isInView ? 1 : 0.3,
                scale: isInView ? 1 : 0.95,
                backgroundColor: isInView ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.3)"
            }}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="work-with-card p-6 rounded-lg flex justify-between flex-col"
        >
            <h2 className="text-7xl text-left font-bold">{number}</h2>
            <div className="card-content text-left">
                <h3 className="text-3xl mb-4 mt-2">{title}</h3>
                <p className="text-sm mt-2">{text}</p>
            </div>
        </motion.div>
    );
};

export default WorkWithUs;