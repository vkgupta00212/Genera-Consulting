import React from 'react'
import Logo from '../../../assets/logo.png'

import Union from '../../../assets/Union.png'
import IAButton from '../../../components/IAButton'
const Navbar = () => {
  return (
    <header className="h-[110px] sm:h-[92px] z-50 bg-white border-b border-[#e6e6e6] flex flex-col justify-end sm:justify-center">
      <div className='flex items-center justify-between  px-2.5 sm:px-10'>

        <div className='flex items-center justify-center'>
          <img loading='lazy' src={Logo} alt="Logo Image" className='w-[160px]' />
        </div>

        <div className='flex items-center gap-6 sm:gap-[30px]'>
          <IAButton color='black' />

        </div>
      </div>
    </header>
  )
}

export default Navbar
