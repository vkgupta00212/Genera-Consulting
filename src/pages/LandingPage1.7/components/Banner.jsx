import React from 'react'
import Frame190 from '../../../assets/Frame190.png'
import Image from '../../../assets/image.png'

const Banner = () => {
  return (
    <div className='bg-black text-white py-[80px] px-[20px] md:px-[40px]'>
      {/* mobile */}
      <div className='md:hidden'>

        <div>
          <h1 className='font-normal uppercase text-[36px]'>  La Cara   </h1>
          <h1 className='font-normal uppercase text-[36px]'> Humana de la </h1>
          <h1 className='font-normal uppercase text-[36px]'> Innovación </h1>
        </div>

        <div className='mt-[50px]'>
          <img src={Frame190} alt="" className='h-full w-full ' />
        </div>

        <div className='mt-[30px]'>
          <p className='text-[16px] text-[#9A9A9A]'>
            En un entorno donde la tecnología parece ocuparlo todo, el factor humano resulta clave. Nuestro equipo multidisciplinar —ingenieros, desarrolladores, consultores, diseñadores, project managers y otros perfiles— trabaja de forma coordinada para dar vida a cada iniciativa.
          </p>

          <p className='text-[16px] text-[#9A9A9A] my-[50px]'>
            Aun contando con herramientas digitales poderosas y análisis de datos precisos, necesitamos la sensibilidad y la experiencia de profesionales que comprendan, revisen y expliquen cada paso a nuestros clientes. Próximamente compartiremos imágenes de nuestro equipo para que conozcas al motor humano detrás de cada proyecto.
          </p>
        </div>

      </div>


      {/* web */}

      <div className='hidden md:block'>

        <div>
          <img src={Image} alt="" className='h-full w-full' />
        </div>

        <div className='mt-[30px] max-w-[1400px]'>
          <h1 className='text-[67px] tracking-wide font-normal uppercase '>
            La Cara Humana de la Innovación
          </h1>

          <div className='mt-[30px]  flex justify-start gap-x-[130px] '>
            <p className='text-[20px] font-normal text-[#9A9A9A] leading-[100%] w-[560px]'>
              En un entorno donde la tecnología parece ocuparlo todo, el factor humano resulta clave. Nuestro equipo multidisciplinar —ingenieros, desarrolladores, consultores, diseñadores, project managers y otros perfiles— trabaja de forma coordinada para dar vida a cada iniciativa.
            </p>

            <p className='text-[20px] font-normal text-[#9A9A9A] leading-[100%] w-[560px]'>
              Aun contando con herramientas digitales poderosas y análisis de datos precisos, necesitamos la sensibilidad y la experiencia de profesionales que comprendan, revisen y expliquen cada paso a nuestros clientes. Próximamente compartiremos imágenes de nuestro equipo para que conozcas al motor humano detrás de cada proyecto.
            </p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Banner
