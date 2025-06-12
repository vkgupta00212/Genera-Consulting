import React from 'react'
import BackgroundImage from '../../../assets/Frame194.svg'
import smallBackgroundImage from '../../../assets/smallBackground.jpeg'

const HeroBelow = () => {
  return (
    <div className="bg-black px-[20px] md:px-[71px] py-[20px] border-2 relative">
      {/* Image Container */}
      <div className="py-[20px] w-[335px] mx-auto md:w-full h-[772px] md:h-full relative">
        <img
          src={BackgroundImage}
          alt="Background"
          className="hidden lg:block w-full h-full object-cover"
        />

        <img
          src={smallBackgroundImage}
          alt="Small Background"
          className="w-full h-full grayscale opacity-70 object-cover rounded-[30px] lg:hidden"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex justify-center items-center px-[21px] md:px-[40px] lg:px-[70px] text-white text-center">
          <p className="text-xl md:text-2xl lg:text-[32px] tracking-wide font-medium max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
            Genera es un hub tecnológico de vanguardia dedicado a empoderar a empresas de todos los tamaños mediante soluciones innovadoras en tres grandes áreas: <b>Digital, Consulting y Labs</b>. A través de tecnologías avanzadas y software sofisticado, diseñamos herramientas que mejoran la toma de decisiones, agilizan las operaciones y generan un impacto económico real para nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBelow
