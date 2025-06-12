import HeroSmall from '../../../assets/Hero_s.svg'
import HeroLarge from '../../../assets/Hero_l.svg'
import React from 'react'

const Hero = () => {
    return (
        <div className='m-2 sm:mx-[41px]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                {/* Left Column - Title and Subtitle */}
                <div className='mt-7  col-span-1'>
                    <h1 className='hidden sm:block font-normal text-black text-[56px]'>
                        CASO DE EXITO
                    </h1>
                    <h2 className="sm:hidden mx-auto font-normal tracking-widest text-black text-[32px] uppercase max-w-[313px] text-start leading-none">
                        Hotel Boutique Monti-Sión
                    </h2>
                </div>

                {/* Right Column - Description */}
                <div className='mt-12 max-w-[309px] sm:max-w-[506px] mx-auto col-span-1'>
                    <h2 className='text-neutral-600 text-2xl sm:text-4xl text-left leading-none'>
                        Hotel Boutique Monti-Sión
                    </h2>
                    <p className='text-neutral-600 text-[16px] mt-6 sm:text-xl text-left'>
                        Un alojamiento rural con encanto que buscaba aumentar reservas y
                        visibilidad a través de redes sociales.
                    </p>
                </div>

            </div>

            {/* Image for Small Screens */}
            <div className='mt-6 mb-12 flex justify-center sm:hidden'>
                <img loading='lazy' src={HeroSmall} alt="Hero Small" />
            </div>

            {/* Image for Larger Screens */}
            <div className='hidden mt-6 mb-16 sm:block max-w-[1359px] mx-auto '>
                <img loading='lazy' src={HeroLarge} alt="Hero Large" className='rounded-[50px]' />
            </div>
        </div>
    )
}

export default Hero
