import React from 'react'
import c1 from '../../../assets/logo.png';
import a1 from '../../../assets/a1.svg'
import logo001 from '../../../assets/logo001.svg'
import { BsArrowRight } from 'react-icons/bs'

const Detail = () => {
    return (
        <div className='bg-[#E5E5E5] px-[20px] md:px-[40px] py-[100px]'>

            <div className='flex justify-center items-center'>
                <h1 className='text-[32px] md:text-[48px] uppercase leading-[100%] tracking-wide' >Nuestros productos</h1>
            </div>

            <div className='my-[50px] flex flex-col w-full gap-2 text-black'>

                <div className='bg-white flex flex-col gap-14 md:gap-10 lg:gap-0 lg:flex-row justify-between items-center rounded-[30px] py-[36px] px-[20px]'>
                    <div>
                        <img src={c1} alt="" />
                    </div>

                    {/* <button className='flex gap-2  w-[320px] md:w-[340px] justify-center items-center text-[14px] md:text-[16px] uppercase font-bold rounded-[50px] py-[15px] px-[30px] border-1'>
                        <img loading='lazy' src={a1} alt="" />
                        <span>CONOCE genera platform</span>
                    </button> */}
                    <button className='group flex  w-[320px] md:w-[360px] justify-start items-center gap-2 bg-white hover:bg-black text-black hover:text-white text-[14px] md:text-[16px] uppercase font-bold rounded-[50px] py-[15px] px-[30px] border-1 transition-all duration-500 ease-in-out'>
                        <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-62">
                            <BsArrowRight className="h-[40px] w-[40px] " />
                        </span >
                        <span className='transition-transform duration-500 ease-in-out group-hover:-translate-x-12'>
                            CONOCE genera platform
                        </span>
                    </button>


                </div>

                <div className='bg-white flex flex-col gap-14 md:gap-10 lg:gap-0 lg:flex-row justify-between items-center rounded-[30px] py-[36px] px-[20px]'>
                    <div className='flex gap-1 justify-center items-center'>
                        <img loading='lazy' src={logo001} alt="" className='h-[70px] w-[70px] ' />
                        <span className='text-[28px]  bg-gradient-to-r from-[#9B35E2] to-[#E7479E] text-transparent bg-clip-text'>
                            Memorae
                        </span>
                    </div>

                    {/* <button className='flex gap-3 w-[320px] md:w-[340px] justify-start items-center text-[14px] md:text-[16px] uppercase font-bold rounded-[50px] py-[15px] px-[30px] border-1'>
                        <img loading='lazy' src={a1} alt="" />
                        <span>CONOCE MEMORAE</span>
                    </button> */}

                    <button className='group flex  w-[320px] md:w-[360px] justify-start items-center gap-2 bg-white hover:bg-black text-black hover:text-white text-[14px] md:text-[16px] uppercase font-bold rounded-[50px] py-[15px] px-[30px] border-1 transition-all duration-500 ease-in-out'>
                        <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-62">
                            <BsArrowRight className="h-[40px] w-[40px] " />
                        </span >
                        <span className='transition-transform duration-500 ease-in-out group-hover:-translate-x-12'>
                            CONOCE MEMORAE
                        </span>
                    </button>

                </div>

                <div className='bg-white flex flex-col gap-14 md:gap-10 lg:gap-0 lg:flex-row justify-between items-center rounded-[30px] py-[36px] px-[20px]'>
                    <div>
                        <span className='text-[32px] uppercase leading-[100%]'>próximos proyectos</span>
                    </div>
                    {/* 
                    <button className='flex gap-2  w-[320px] md:w-[340px] justify-center items-center text-[14px] md:text-[16px] uppercase font-bold rounded-[50px] py-[15px] px-[30px] border-1'>
                        <img loading='lazy' src={a1} alt="" />
                        <span>MANTENTE INFORMADO </span>
                    </button> */}

                    <button className='group flex  w-[320px] md:w-[360px] justify-start items-center gap-2 bg-white hover:bg-black text-black hover:text-white text-[14px] md:text-[16px] uppercase font-bold rounded-[50px] py-[15px] px-[30px] border-1 transition-all duration-500 ease-in-out'>
                        <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-62">
                            <BsArrowRight className="h-[40px] w-[40px] " />
                        </span >
                        <span className='transition-transform duration-500 ease-in-out group-hover:-translate-x-12'>
                            MANTENTE INFORMADO
                        </span>
                    </button>

                </div>


            </div>

        </div>
    )
}

export default Detail
