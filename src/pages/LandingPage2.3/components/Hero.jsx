import React from 'react'
import a1 from '../../../assets/a1.svg'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='py-[60px]  px-[20px]'>

      <div className='flex justify-center items-center max-w-[550px] mx-auto'>
        <h1 className='text-[32px] sm:text-[48px] font-semibold uppercase tracking-normal leading-[100%]  text-center'>
          Platform Genera Consulting
        </h1>
      </div>


      <div className='hidden lg:block px-[20px] py-[40px] max-w-[904px] mx-auto items-center'>
        <p className='text-[36px] font-normal uppercase text-center leading-[100%] tracking-wider'>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Pellentesque fringilla <br />
          lorem iaculis convallis lacinia. Nam <br />
          tincidunt laoreet laoreet.
        </p>
      </div>

      <div className='lg:hidden px-[20px] py-[40px] max-w-[904px] mx-auto items-center'>
        <p className='text-xl sm:text-[36px] font-normal uppercase text-center'>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque fringilla
          lorem iaculis convallis lacinia. Nam
          tincidunt laoreet laoreet.
        </p>
      </div>

      <div className='flex justify-center mt-2'>
        {/* <button className='flex gap-2 justify-center items-center text-lg font-bold rounded-[50px] py-[15px] px-[30px] border-1'>
          <img loading='lazy' src={a1} alt="" />
          <span className='uppercase'>comienza</span>
        </button> */}


        <button className='group flex justify-center items-center gap-2 bg-white hover:bg-black text-black hover:text-white py-[15px] px-[30px] border rounded-[50px] text-xl font-bold transition-all duration-500 ease-in-out'>
          <div className="transition-transform duration-500 ease-in-out group-hover:translate-x-32">
          <BsArrowRight className="h-[25px] w-[25px] font-bold" />
          </div >
          <div className='transition-transform duration-500 ease-in-out uppercase group-hover:-translate-x-10'>
          comienza
          </div>
        </button>

      </div>

    </div>
  )
}

export default Hero
