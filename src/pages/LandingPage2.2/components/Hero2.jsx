import React from 'react'
import HeroGif from '../../../assets/hero.gif'

const Hero2 = () => {
  return (
    <div className='bg-[#E5E5E5] px-[20px] md:px-[40px]'>

      <div className='bg-white w-full rounded-[30px] grid grid-cols-1 lg:grid-cols-2 px-[25px] md:px-[60px] py-[30px] '>

        <div className='md:max-w-[460px] mx-auto lg:mx-0 '>
          <h1 className='text-[32px] md:text-[48px] uppercase'>Un Mundo de Oportunidades</h1>
          <p className='text-[16px] py-[40px] text-[#4B4B4B]  '>En Genera Lab no existen límites para la imaginación. Cada proyecto es un lienzo en blanco donde el equipo de visionarios, ingenieros, diseñadores y consultores trabajan en sinergia para construir soluciones tecnológicas de vanguardia. Desde la creación de software disruptivo hasta el desarrollo de plataformas inteligentes, todo se gesta en un entorno lleno de energía creativa y dedicación absoluta a la calidad.</p>
        </div>

        <div className='sm:max-w-[474px] sm:h-[450px] mx-auto  '>
          <img src={HeroGif} alt="" className='bg-transparent h-full w-full bg-cover' />
        </div>
      </div>

    </div>
  )
}

export default Hero2
