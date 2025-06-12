import React from 'react'
import Frame990 from '../../../assets/Frame990.svg'

const Feature = () => {
  return (
    <div className='bg-[#E5E5E5] pl-[20px] md:pl-[40px] py-[40px]'>

      <div className='grid grid-cols-1 lg:grid-cols-3 lg:relative'>

        <div className='lg:col-span-1'>
          <h1 className='text-[32px] md:text-[48px] uppercase tracking-wide'>Soluciones a <br /> Retos Reales</h1>
          <p className='text-[16px] md:text-lg py-[20px]'>Las ideas cobran forma cuando se enfocan en problemas concretos. Por eso, nuestro objetivo principal es detectar oportunidades y diseñar herramientas que impulsen la competitividad de nuestros clientes. Cada prototipo, cada línea de código y cada prueba de producto se orienta a mejorar la eficiencia, facilitar procesos y generar un impacto tangible en el mercado.</p>
        </div>

        <div className=' lg:col-span-2 lg:absolute lg:-top-80 lg:right-0 z-10'>
          <img src={Frame990} alt="" className='w-full h-full' />
        </div>

      </div>
    </div>
  )
}

export default Feature
