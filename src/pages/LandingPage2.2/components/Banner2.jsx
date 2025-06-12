import React from 'react'
import Man from '../../../assets/man.gif'

const Banner2 = () => {
  return (
    <div
      className='hidden lg:block bg-[#E5E5E5] px-[20px] md:px-[40px] lg:py-[80px]'

    >

      <div className='bg-black rounded-[30px] w-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${Man})`, // Fix: Use a template literal inside a string
          backgroundSize: "50% auto",
          backgroundRepeat: "no-repeat"

        }}>

        <div className='py-[207px] max-w-[828px] mx-auto'>
          <h1 className=' text-white text-[96px] leading-[100%] uppercase tracking-wide text-center '>
            Tecnologías <br />
            que Impulsan <br />
            el Futuro
          </h1>

          <p className='text-[22px] uppercase text-white  text-center leading-[100%] pt-[60px] px-[10px] lg:px-0'>
            En Genera Lab, la inteligencia artificial, la analítica avanzada y los desarrollos full-stack conviven con métodos ágiles de trabajo. Nuestro enfoque está siempre alineado con las últimas tendencias, pero sin olvidar el objetivo real: crear soluciones accesibles, escalables y con verdadero potencial de crecimiento.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Banner2
