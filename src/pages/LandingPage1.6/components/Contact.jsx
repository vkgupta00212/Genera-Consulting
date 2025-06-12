import React from 'react'
import ContactCard from '../../../pages/LandingPage1.5/sections/ContactCard'

const Contact = () => {
  return (
    <div className='px-10 flex flex-col lg:flex-row mb-10 '>

      <div className="pt-[40px] lg:pt-[100px] lg:w-1/2">
        <h2 className="lg:w-[631px] [font-family:'Campton-Book',Helvetica] font-normal text-black text-[24px] sm:text-[40px]">
          ¿QUIERES RESULTADOS SIMILARES PARA TU NEGOCIO?
        </h2>
        <p className="lg:w-[477px] mt-5 [font-family:'Campton-Book',Helvetica] font-normal text-neutral-600 text-[16px] sm:text-xl">
          En Genera Digital te ayudamos a conquistar las redes y multiplicar
          tus oportunidades de venta.
        </p>
      </div>

      <div className='lg:w-1/2 mt-4'>
        <ContactCard />
      </div>

    </div>
  )
}

export default Contact
