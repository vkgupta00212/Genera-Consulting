import React from 'react'
import p1 from '../../../assets/01.gif'
import p2 from '../../../assets/02.gif'
import p3 from '../../../assets/03.gif'

const processCards = [
  {
    title: "CREAR",
    description:
      "Ponemos la innovación por delante. Partimos de la observación, las tendencias y las necesidades del día a día para generar ideas rompedoras.",
    backgroundImage: p1,
  },
  {
    title: "PROBAR",
    description:
      "Cuando el producto o servicio demuestra su potencial, lo optimizamos y lanzamos al mercado, asegurando un rendimiento sólido y una adaptación progresiva a diferentes contextos y sectores.",
    backgroundImage: p2,
  },
  {
    title: "ESCALAR",
    description:
      "Cuando el producto o servicio demuestra su potencial, lo optimizamos y lanzamos al mercado, asegurando un rendimiento sólido y una adaptación progresiva a diferentes contextos y sectores.",
    backgroundImage: p3,
  },
];


const Banner = () => {
  return (
    <div className='bg-[#E5E5E5] px-[20px] md:px-[40px] lg:py-[80px] flex flex-col lg:flex-row gap-2'>
      {
        processCards.map((card, i) => {
          return <div key={i} className='bg-white rounded-[30px] py-[40px] px-[25px] flex-1'>
            <img src={card.backgroundImage} alt="" className='pb-[40px]' />
            <div className=''>
              <h1 className='text-[32px] md:text-[48px] leading-[100%]'>{card.title}</h1>
              <p className='text-[16px] text-[#4B4B4B] leading-[100%] mt-4'>{card.description}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Banner
