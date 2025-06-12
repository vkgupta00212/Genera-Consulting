import React from 'react'
import { motion } from 'framer-motion'
import ContactCard1 from '../sections/ContactCard1'

const Contact = () => {
  return (
    <motion.div 
      className='px-10 flex flex-col lg:flex-row pb-[100px]'
      // Set initial background and text colors
      initial={{ backgroundColor: "#000", color: "#fff" }}
      // Animate to white background and black text when in view
      whileInView={{ backgroundColor: "#fff", color: "#000" }}
      // Trigger when 50% of the component is visible; animate every time it enters the viewport
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-[40px] lg:pt-[100px] lg:w-1/2">
        <h2 className="[font-family:'Campton-Book',Helvetica] font-normal text-[24px] sm:text-[40px] uppercase md:text-center lg:text-left lg:w-[631px]">
          Conocer cómo una consultoría <br /> especializada puede transformar procesos y resultados.
        </h2>
      </div>
      <div className='lg:w-1/2 mt-4'>
        <ContactCard1 />
      </div>
    </motion.div>
  )
}

export default Contact
