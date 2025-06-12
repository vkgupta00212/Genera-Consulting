import React from 'react'
import { motion } from 'framer-motion'
import Arrow1 from '../../../assets/arrow1.png'
import Spain from '../../../assets/spain.svg'
import Down from '../../../assets/hey.svg'
import Input2 from './Input2'
import { BsArrowRight } from 'react-icons/bs'

const ContactCard1 = () => {
  return (
    <motion.div 
      initial={{ backgroundColor: "#111111", color: "#fff" }}
      whileInView={{ backgroundColor: "#D9D9D9", color: "#000" }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className='max:w-[335px] h-[650px] sm:w-[610px] sm:h-[680px] rounded-[30px] shadow-2xl sm:rounded-b-[50px] sm:px-[54px] mx-auto mt-4 px-4'
    >
      <div className='pt-[70px] flex flex-col gap-2'>
        <div className='flex flex-col sm:flex-row gap-2'>
          <Input2 placeholder={"Nombre"} />
          <Input2 placeholder={"Apellido"} />
        </div>

        <div>
          <Input2 placeholder={"Correo"} />
        </div>

        <div className='flex gap-1'>
          <div className='flex justify-center items-center gap-2 sm:gap-4 border border-[#1E1E1E] rounded-2xl px-[17px] py-2'>
            <div className='flex justify-center items-center gap-1'>
              <p className='text-[16px] uppercase text-[#9A9A9A]'>ESP</p>
              <img src={Spain} alt="" className='h-4 w-4' />
            </div>
            <img src={Down} alt="" className='h-4 w-4' />
          </div>

          <Input2 placeholder={"+34 123 456 789"} />
        </div>

        <div>
          <Input2 placeholder={"Tu empresa"} />
        </div>

        <div className='pt-[90px] flex items-center'>
          <input type='checkbox' className='bg-transparent rounded-full pr-2' />
          <span>{" "} Accepto las <span className='font-semibold'>Condiciones y Términos</span></span>
        </div>

        <div className='pt-[20px]'>
          {/* <button className='flex justify-center items-center gap-[4px] sm:gap-[14px] bg-transparent text-black py-[12.79px] px-[25.59px] border rounded-4xl text-[10px] sm:text-[14px] font-bold'>
            <span>
              <img src={Arrow1} alt="" className='h-[19.36px] w-[19.36px]' />
            </span>
            comienza tu transformación
          </button> */}
                  <button className='group flex justify-center items-center gap-[4px] m:gap-[14px] bg-transparent hover:bg-black text-black hover:text-white py-[12.79px]  px-[25.59px] border rounded-4xl text-[10px] sm:text-[14px] font-bold transition-all duration-500 ease-in-out'>
                    <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-45 md:group-hover:translate-x-60">
                    <BsArrowRight className="h-[25px] w-[25px]" />
                    </span >
                    <span className='transition-transform duration-500 ease-in-out group-hover:-translate-x-8 uppercase'>
                    comienza tu transformación
                    </span>
                  </button>
          
        </div>
      </div>
    </motion.div>
  )
}

export default ContactCard1
