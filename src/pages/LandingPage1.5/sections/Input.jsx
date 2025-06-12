import React from 'react'

const Input = ({ placeholder }) => {
  return (
    <input className='border-2 border-black rounded-[15px] p-[15px] w-full' type="text" placeholder={placeholder} />
  )
}

export default Input
