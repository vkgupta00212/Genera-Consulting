import { BsArrowRight } from "react-icons/bs";
import logoDesktop from "../../../assets/Genera-logo-dark.svg";
import logoMobile from "../../../assets/Genera-logo.svg";
import IAButton from "../../../components/IAButton";
import arrowBtn from "../../../assets/arrow_btn.svg";
import arrowBtnRight from "../../../assets/arrow_btn_white.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import Header from "../components/Header";

export default function HeroSection() {
   
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };


    return (
        <div>
            <section className="relative md:px-0 px-4 md:py-0 md:pb-18 py-8 rounded-b-[50px] bg-cover bg-center hero-section">
                <div className="md:block hidden">
                <Header  />
                </div>
                <header className="w-full md:hidden bg-transparent md:bg-transparent md:hover:bg-white flex justify-between items-center px-0 py-4 md:px-8 mb-14">
                    <img src={logoMobile} alt="Genera Logo" className=" md:hidden w-[160px]" />
                    {/* <img src={logoDesktop} alt="Genera Logo" className="  md:block w-[160px]" /> */}

                    <IAButton color='white'  />
                </header>

                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className=" text-white md:px-8 md:py-2"
                >
                    <p className="text-sm lg:text-[24px] lg:mb-6 text-white uppercase font-semibold leading-7 mb-6 md:mb-2 md:mt-12">
                        HAS LLEGADO A GENERA DIGITAL
                    </p>
                    <h1 className="text-[32px] lg:text-[56px] font-semibold leading-tight mb-2 uppercase">
                        Tu socio clave para la <br />  transformación digital.
                    </h1>

                </motion.div>


                <div className="mt-8 md:mt-34 flex justify-end overflow-hidden md:px-12 md:py-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full py-12 max-w-4xl bg-white/20 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-4 backdrop-blur-md"
                    >
                        <div className="max-w-[300px]">
                            <p className="text-md md:text-lg text-white flex-1 tracking-wide">
                                Estamos aquí para impulsar tu empresa hacia un futuro digital, más
                                dinámico y competitivo.
                            </p>
                        </div>
                        <div className="md:ml-auto mt-4 md:mt-0 ">
                        <button onClick={() => handleNavigate('/digital/kitdigital')} className="btn-swipe mx-auto hero-cta-first-btn w-fit pr-6 cursor-pointer relative overflow-hidden flex items-center 
                        gap-3 bg-white text-black  lg:text-[16px]
                         rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                         border-white hover:text-white  ">
                                <span className="absolute left-4 lg:left-5 arrow-icon lg:bottom-2">
                                 <MdArrowForward  size={45} className="hero-arrow-icon" />
                                    {/* <img src={arrowBtn} alt="" /> */}
                                    {/* <img src={arrowBtnRight} alt="" /> */}
                                </span>
                                <span className="cta-third-text uppercase">Comienza tu Transformación</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}