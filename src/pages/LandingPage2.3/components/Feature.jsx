import React from 'react'
import logo001 from '../../../assets/logo001.svg'
import a1 from '../../../assets/a1.svg'
import p2 from '../../../assets/p002.svg'
import p4 from '../../../assets/p003.svg'
import h1 from '../../../assets/h1.svg'
import h2 from '../../../assets/h2.svg'
import { BsArrowRight } from 'react-icons/bs'


const Feature = () => {
    return (
        <div className='py-[100px] px-[20px] md:px-[40px] border-t-1 border-b-1'>

            <div className='flex gap-2 justify-center items-center'>
                <img loading='lazy' src={logo001} alt="" className='h-[80px] w-[80px] md:h-[125px] md:w-[125px]' />
                <span className='text-[32px] sm:text-5xl bg-gradient-to-r from-[#9B35E2] to-[#E7479E] text-transparent bg-clip-text'>
                    Memorae
                </span>
            </div>


            <div className='px-[20px] py-[30px] max-w-[940px] mx-auto items-center'>
                <p className='text-xl sm:text-[36px] font-normal uppercase text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla lorem iaculis convallis lacinia. Nam tincidunt laoreet laoreet.
                </p>
            </div>

            <div className='flex justify-center mt-2'>
                {/* <button className='flex gap-5 justify-center items-center text-lg font-bold rounded-[50px] py-[15px] px-[30px] border-1'>
                    <img loading='lazy' src={a1} alt="" />
                    <span>CONOCE MEMORAE</span>
                </button> */}

                <button className='group flex justify-center items-center gap-5 bg-white hover:bg-black text-black hover:text-white py-[15px] px-[30px] border rounded-[50px] text-xl font-bold transition-all duration-500 ease-in-out'>
                    <div className="transition-transform duration-500 ease-in-out group-hover:translate-x-55">
                        <BsArrowRight className="h-[25px] w-[25px] font-bold" />
                    </div >
                    <div className='transition-transform duration-500 ease-in-out uppercase group-hover:-translate-x-12'>
                    CONOCE MEMORAE
                    </div>
                </button>
            </div>

            <div className='py-[80px]'>
                <img loading='lazy' src={p2} alt="" className='h-full w-full bg-cover hidden sm:block' />
                <img loading='lazy' src={p4} alt="" className='sm:hidden h-full w-full bg-cover' />
            </div>

            <div className='py-[60px] '>
                <p className='max-w-[940px] mx-auto text-xl sm:text-[24px] font-normal'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla lorem iaculis convallis lacinia. Nam tincidunt laoreet laoreet. Fusce ligula enim, viverra sed turpis non, lobortis ultrices sem. Integer quis ultrices sapien. Nulla nec lobortis justo. Suspendisse euismod, sapien et ornare vulputate, ipsum neque elementum quam, feugiat ultricies ligula mauris eget sapien. Integer tempus augue vel semper consectetur.
                </p>
            </div>

            <div className='py-[60px] grid grid-cols-1 gap-2 lg:grid-cols-2'>
                <div>
                    <img loading='lazy' src={h1} alt="" className='h-full w-full bg-cover' />
                </div>

                <div>
                    <img loading='lazy' src={h2} alt="" className='h-full w-full bg-cover' />
                </div>
            </div>
        </div>
    )
}

export default Feature
