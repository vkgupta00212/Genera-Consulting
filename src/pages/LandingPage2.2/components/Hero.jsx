import React from 'react'
import Frame87 from '../../../assets/Frame87.svg'
import Frame164 from '../../../assets/Frame164.svg'

const Hero = () => {
  return (
    <>
      <style jsx>{`
        .hero-bg {
          background-image: url(${Frame164});
        }
        @media (min-width: 768px) {
          .hero-bg {
            background-image: url(${Frame87});
          }
        }
      `}</style>
      <div
        className="hero-bg bg-[#E5E5E5] py-[33px] md:py-[70px] px-[20px] md:px-[40px] mt-1 lg:h-[871px] bg-cover bg-center overflow-x-hidden"
      >
        {/* desktop view */}
        <div className="grid grid-cols-1 gap-[90px] lg:gap-0 lg:grid-cols-2 h-full py-8">
          <div className="lg:h-full md:overflow-visible overflow-hidden">
            <h1 className="text-[35px] md:text-[90px] uppercase tracking-wide leading-[100%] md:leading-[98px] md:break-normal break-words">
              Donde la
              <span className="font-semibold block">Innovación</span>
              Explota en
              <span className="font-semibold block tracking-wider lg:tracking-widest">Posibilidades</span>
            </h1>
          </div>

          <div className="flex flex-col justify-end ">
            <p className="text-[16px] text-[#4B4B4B] md:text-[24px] font-normal max-w-[625px]">
              Imagina un espacio donde las ideas se convierten en soluciones que transforman la realidad.
              Eso es Genera Lab: un laboratorio de innovación y creatividad que nace con el propósito de
              reinventar el presente y diseñar el futuro. Aquí las grandes ideas se materializan en productos
              y servicios listos para resolver necesidades reales de empresas y personas.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
