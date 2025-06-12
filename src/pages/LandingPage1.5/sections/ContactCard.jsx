import React, { useState,useRef } from 'react'
import Input from './Input'
import Arrow1 from '../../../assets/arrow1.png'
import Spain from '../../../assets/spain.svg'
import Down from '../../../assets/down.svg'
import { BsArrowRight } from 'react-icons/bs';
import { button } from 'framer-motion/client'
import { motion, useInView } from "framer-motion"; 

const ContactCard = ({buttonText}) => {
const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  return (
    <div className='max:w-[335px] h-[639px] sm:w-[610px] sm:h-[670px] rounded-[30px] shadow-2xl sm:rounded-b-[50px] bg-white  sm:px-[54px] mx-auto mt-4 px-4'>

      <div className='pt-[70px] flex flex-col gap-2 '>

        <div className='flex flex-col sm:flex-row gap-2'>
          <Input placeholder={"Nombre"} />
          <Input placeholder={"Apellido"} />
        </div>

        <div>
          <Input placeholder={"Correo"} />
        </div>

        <div className='flex gap-1'>

          <div className='flex justify-center items-center gap-2 sm:gap-4 border-2 rounded-2xl px-[17px] py-2'>

            <div className='flex justify-center items-center gap-1'>
              <p className='text-[16px] uppercase'>ESP</p>
              <img src={Spain} alt="" className='h-4 w-4' />
            </div>

            <img src={Down} alt="" className='h-4 w-4' />
          </div>

          <Input placeholder={"+34 123 456 789"} />
        </div>

        <div>
          <Input placeholder={"Tu empresa"} />
        </div>

        <div className='pt-[90px] items-center '>
          <input type='checkbox' className='ring-2 rounded-full pr-2' />
          <span>{" "} Accepto las <span className=' font-semibold'>Condiciones y Términos</span> </span>
        </div>

        <div className='pt-[20px]'>
          {/* <button className='flex justify-center items-center  gap-[4px] sm:gap-[14px] bg-black text-white py-[12.79px] px-[25.59px] border rounded-4xl text-[10px] sm:text-[14px] font-bold'>
            <span>
              <img src={Arrow1} alt="" className='h-[19.36px] w-[19.36px]' />
            </span>
            Solicitar Asesoría en Redes Sociales
          </button> */}
       <button className="btn-swipe hero-cta-first-btn w-fit pr-6 cursor-pointer relative overflow-hidden flex items-center 
                        gap-3 bg-black text-white 
                         rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-transparent border-1
                         border-black hover:text-black  ">
                                <span className="absolute left-4 arrow-icon">
                                    <BsArrowRight
                                        className="arrow  relative transition-transform duration-500 ease-in-out group-hover:translate-x-2 
                                                w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1 md:pr-6 lg:pr-0"
                                    />
                                </span>
                                <span className="cta-third-text uppercase">{buttonText}</span>
                            </button>
        </div>
      </div>

    </div>
  )
}

export default ContactCard

