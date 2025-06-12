import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView hook
import genera from "../../../assets/Genera-logo.svg";
import { BsArrowRight } from "react-icons/bs";

const ContactForm = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" }); // Animation triggers when section is in view

  return (
    <div ref={sectionRef} className="contact-bg w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="py-16 px-6 md:px-16 lg:px-8 w-full"
      >
        <div className="w-full flex flex-col md:flex-row items-start gap-10">
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
            className="md:w-1/2 lg:w-1/3 text-left mt-8 uppercase"
          >
            <motion.h2 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl lg:text-4xl text-gray-900"
            >
           Inicia tu Presencia Online Hoy
            </motion.h2>
            <p className="text-gray-600 mt-4 mb-18 md:mb-0">
              Completa el siguiente formulario y descubre cómo {" "}
              <span className="font-bold">GENERA</span> Digital puede ayudarte a crecer.
            </p>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} 
            className="md:w-1/2 bg-white rounded-4xl p-8 w-full ml-auto"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="border p-3 rounded-lg w-full" />
                <input type="text" placeholder="Apellido" className="border p-3 rounded-lg w-full" />
              </div>
              <input type="email" placeholder="Correo" className="border p-3 rounded-lg w-full" />

              <div className="grid grid-cols-3 gap-4">
                <select className="border p-3 rounded-lg w-full">
                  <option>ESP 🇪🇸</option>
                  <option>USA 🇺🇸</option>
                  <option>FR 🇫🇷</option>
                </select>
                <input type="text" placeholder="+34 123 456 789" className="border p-3 rounded-lg col-span-2 w-full" />
              </div>

              <input type="text" placeholder="Tu empresa" className="border p-3 rounded-lg w-full" />

              <div className="flex items-center gap-2 ml-3 mt-24 mb-8 md:text-sm text-xs">
                <input type="checkbox" id="terms" className="w-5 h-5" />
                <label htmlFor="terms" className="text-gray-700">
                  Acepto las <span className="font-bold">Condiciones y Términos</span>
                </label>
              </div>
              
              {/* Button Animation */}
              <div className="mt-1 md:mt-3 overflow-hidden"> 
              <motion.button
                  initial={{ x: 200, opacity: 0 }} // Starts off-screen
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }} 
                  transition={{ duration: 0.9, ease: "easeOut", type: "spring", stiffness: 200, damping: 15 }} // Faster & snappier bounce
               
                className="btn-swipe contact-btn w-fit cursor-pointer relative overflow-hidden flex items-center gap-3 bg-black text-white 
                 md:px-10 px-10 py-5 pl-15 rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                  border-black hover:text-black hover:pl-0 hover:pr-16"
              >
                <span className="absolute left-4 arrow-icon">
                  <BsArrowRight className="relative transition-transform duration-500 ease-in-out md:h-10 lg:w-10 h-8 w-8 " />
                </span>
                <span className="pl-4 lg:text-lg lg:pl-8 text-[0.6em] md:text-[0.6em]">Quiero Mi Web Subvencionada</span>
              </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 30 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }} 
        className="bg-black text-white py-8 w-full rounded-t-3xl"
      >
        <div className="flex flex-col items-center text-center">
          {/* Logo Section */}
          <div className="mb-4">
            <img src={genera} alt="Genera Logo" className="h-20 mb-5" />
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ContactForm;
