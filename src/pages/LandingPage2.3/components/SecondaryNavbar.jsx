import React from 'react'

const navItems = [
  "Platform Genera Consulting",
  "Memorae",
  "Próximos lanzamientos",
]

const SecondaryNavbar = () => {
  return (
    <div
      className="w-full z-30 sticky top-[120px] md:top-[102px] mt-2 px-[10px] "
    >
      {/* Mobile: Only "Memorae" centered */}
      <div className="md:hidden flex justify-center bg-white border border-[#E6E6E6] rounded-[50px] py-[20px] px-[30px] ">
        <span className="[font-family:'Campton-Book',Helvetica] font-normal text-black text-xl tracking-[-0.60px] whitespace-nowrap">
          Memorae
        </span>
      </div>

      {/* Tablet & Desktop (md and up): All three nav items equally spaced */}
      <div className='hidden md:flex bg-white justify-between text-xl font-normal max-w-[863px] mx-auto border border-[#E6E6E6] rounded-[50px] py-[20px] px-[30px]'>
        {navItems.map((item, i) => (
          <h1 key={i}>{item}</h1>
        ))}
      </div>
    </div>
  )
}

export default SecondaryNavbar
