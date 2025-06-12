import React from 'react'
import Logo from '../../../assets/Logo_1.svg'
import Frame from '../../../assets/Frame_1.svg'
import Union from '../../../assets/Union_1.svg'

const Navbar = () => {
  return (
    <header className="h-[110px] sticky top-0  sm:h-[92px] z-50 bg-white border-b border-[#e6e6e6] flex flex-col justify-end sm:justify-center">
      <div className='flex items-center justify-between  px-2.5 sm:px-10'>

        <div className='flex items-center justify-center'>
          <img loading='lazy' src={Logo} alt="Logo Image" className='w-[130px] h-[53.29px] sm:h-[66px] sm:w-[161px]' />
        </div>

        <div className='flex items-center gap-6 sm:gap-[30px] pr-4 sm:pr-10 '>
          <img loading='lazy' src={Union} alt="Union" className='w-[31.88px] h-[31.88px] sm:w-10 sm:h-10' />
          <img loading='lazy' src={Frame} alt="" className='w-[24.85px] h-[19.33px] sm:w-[31px] sm:h-[24.11px]' />
        </div>
      </div>
    </header>
  )
}

export default Navbar
