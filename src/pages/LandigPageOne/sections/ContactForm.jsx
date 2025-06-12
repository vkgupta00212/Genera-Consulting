import React, { useRef,useState } from "react";
import { motion, useInView } from "framer-motion"; 
import genera from "../../../assets/Genera-logo.svg";
import { MdArrowForward } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; 



// const countryFlags = {
//   ES: esFlag,
//   US: usFlag,
//   FR: frFlag,
// };
const ContactForm = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" }); 
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("ES");

  // Phone state for Personal and Company
  const [personalPhone, setPersonalPhone] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [personalCountry, setPersonalCountry] = useState("ES");
  const [companyCountry, setCompanyCountry] = useState("ES");
  return (
    <div ref={sectionRef} className="contact-bg w-full">
    <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="py-16 px-6 md:px-16 lg:px-8 w-full"
      >
        <div className="w-full flex flex-col md:flex-row items-start md:gap-10">
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
            className="md:w-1/2 w-full lg:w-full text-left mt-4"
          >
            <motion.h2 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[24px] md:text-[40px] text-gray-900 uppercase md:w-full"
            >
              ¿Listo para Digitalizar tu Empresa?
            </motion.h2>
            <p className="text-gray-600 mt-4 mb-10 md:mb-0 md:w-lg">
              Completa el siguiente formulario y descubre cómo {" "}
              <span className="font-bold">GENERA</span> Digital puede ayudarte a crecer.
            </p>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} 
            className="md:w-full bg-white md:border-1 md:pt-20 pt-24 border-1 border-gray-100 rounded-[50px] 
            p-4 md:p-8 w-full ml-auto"
          >
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="border p-3 rounded-lg w-full" />
                <input type="text" placeholder="Apellido" className="border p-3 rounded-lg w-full" />
              </div>

              {/* Email Field */}
              <input type="email" placeholder="Correo" className="border p-3 rounded-lg w-full" />

              {/* Phone Numbers - Side by Side */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Personal Phone Number */}
                <div className="flex items-center border rounded-lg p-3 w-full">
                  <PhoneInput
                    international
                    defaultCountry={personalCountry.toLowerCase()}
                    value={personalPhone}
                    onChange={setPersonalPhone}
                    className="w-full border-none focus:outline-none"
                  />
                </div>

                {/* Company Phone Number */}
                <div className="flex items-center border rounded-lg p-3 w-full">
                  <PhoneInput
                    international
                    defaultCountry={companyCountry.toLowerCase()}
                    value={companyPhone}
                    onChange={setCompanyPhone}
                    className="w-full border-none focus:outline-none"
                  />
                </div>
              </div>

              {/* Company Name */}
              <input type="text" placeholder="Tu empresa" className="border p-3 rounded-lg w-full" />

              {/* Terms and Conditions */}
              <div className="flex items-center gap-2 ml-3 mt-4 mb-8 md:text-sm text-xs">
                <input type="checkbox" id="terms" className="w-5 h-5" />
                <label htmlFor="terms" className="text-gray-700 text-[14px] md:text-[16px]">
                  Acepto las <span className="font-bold">Condiciones y Términos</span>
                </label>
              </div>
              
              {/* Submit Button */}
              <div className="mt-1 md:mt-3 overflow-hidden"> 
                <motion.button
                  initial={{ x: 200, opacity: 0 }} 
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }} 
                  transition={{ duration: 0.9, ease: "easeOut", type: "spring", stiffness: 200, damping: 15 }} 
                  className="btn-swipe contact-btn w-fit cursor-pointer relative overflow-hidden flex items-center gap-3 bg-black text-white 
                  md:px-10 px-10 py-5 pl-15 rounded-[50px] text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                  border-black hover:text-black hover:pl-0 hover:pr-16"
                >
                  <span className="absolute left-4 arrow-icon">
                    <MdArrowForward className="relative transition-transform duration-500 ease-in-out md:h-10 lg:w-10 h-10 w-10" />
                  </span>
                  <span className="pl-4 lg:text-[14px] lg:pl-8 text-[11px] md:text-[14px] uppercase">
                    SOLICITAR ASESORÍA GRATIS
                  </span>
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
        className="bg-black text-white py-2 w-full rounded-t-[50px]"
      >
        <div className="flex flex-col items-center justify-around md:justify-around px-1 mb-4 md:px-4 md:text-center">
          {/* Logo Section */}
          <div className="mb-4">
            <img src={genera} alt="Genera Logo" className="h-20 mb-5" />
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-between md:justify-center gap-6 px-4 text-sm text-gray-300">
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
