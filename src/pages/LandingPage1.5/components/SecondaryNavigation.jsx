import React from 'react'
import Logo1 from '../../../assets/Logo_2.svg'
import { BsArrowRight } from 'react-icons/bs'

const SecondaryNavigation = () => {
  return (
    <div className="sm:flex  z-30 justify-between m-2 bg-white rounded-[15px] border border-[#eeeeee] px-2 sm:px-[30px] py-3">
      <div className='hidden sm:flex justify-center items-center'>
        <img src={Logo1} alt="Logo" className='w-[34px] h-[34.43px]' />
      </div>

      <div className='flex gap-2.5 justify-evenly sm:justify-between items-center '>
        
        <button className='group flex justify-center items-center gap-3 bg-white hover:bg-black text-black hover:text-white py-2.5 px-4 border rounded-4xl text-[9.94px] font-semibold transition-all duration-500 ease-in-out'>
          <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-22">
          <BsArrowRight className="h-[19.36px] w-[19.36px]" />
          </span >
          <span className='transition-transform duration-500 ease-in-out group-hover:-translate-x-8'>
          CONTÁCTANOS
          </span>
        </button>


        <button className="group flex justify-center items-center gap-3 bg-black hover:bg-white text-white hover:text-black py-2.5 px-4 border border-black rounded-4xl text-[9.94px] font-semibold transition-all duration-500 ease-in-out">
          <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-30">
            <BsArrowRight className="h-[19.36px] w-[19.36px]" />
          </span>
          <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-8">
            AGENDAR LLAMADA
          </span>
        </button>

      </div>
    </div>
  )
}

export default SecondaryNavigation
