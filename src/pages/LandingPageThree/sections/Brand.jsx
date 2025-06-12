import React from 'react'
import Marquee from '../components/Marquee'
const Brand = () => {
  return (
    <div>
      <div className='md:py-12 md:px-14 py-8 px-4'>
        <h2 className='md:text-5xl text-2xl'>Confían en Nosotros</h2>
      </div>
      <div className="container mx-auto w-full text-white flex justify-center items-center overflow-x-hidden">
        <Marquee />
      </div>
    </div>
  )
}

export default Brand
