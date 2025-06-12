import React from 'react'
import HeroImage from '../../../assets/HeroImage.svg'
import HeroSmall from '../../../assets/Hero2.svg'
import p01 from '../../../assets/p01.svg'
import p02 from '../../../assets/p02.svg'

const Hero2 = () => {
  return (
    <div className='py-[70px] px-[20px] md:px-[40px]'>
      <img loading='lazy' src={HeroImage} alt="" className='h-full w-full bg-cover hidden sm:block' />
      <img loading='lazy' src={HeroSmall} alt="" className='sm:hidden h-full w-full bg-cover' />


      <div className='py-[80px] '>
        <p className='max-w-[940px] mx-auto text-xl sm:text-[24px] font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla lorem iaculis convallis lacinia. Nam tincidunt laoreet laoreet. Fusce ligula enim, viverra sed turpis non, lobortis ultrices sem. Integer quis ultrices sapien. Nulla nec lobortis justo. Suspendisse euismod, sapien et ornare vulputate, ipsum neque elementum quam, feugiat ultricies ligula mauris eget sapien. Integer tempus augue vel semper consectetur.
        </p>
      </div>

      <div className='py-[60px] grid grid-cols-1 gap-2 lg:grid-cols-2'>
        <div>
          <img loading='lazy' src={p01} alt="" className='h-full w-full bg-cover' />
        </div>

        <div>
          <img loading='lazy' src={p02} alt="" className='h-full w-full bg-cover' />
        </div>
      </div>
    </div>
  )
}

export default Hero2
