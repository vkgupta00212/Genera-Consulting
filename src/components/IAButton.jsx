import React from 'react';

import HamburgurToLeftArrow from './AnimatedMenuIcon'

const IAButton = ({ color = 'black' }) => {

    return (
        <>
            <div className='flex items-center gap-8'>
                {/* IA Button */}
                <div onClick={() => {
                    window.open('https://platform.generaconsulting.ai/', '_blank');
                }} className="relative group cursor-pointer w-10 h-10">
                    <div className="w-full h-full relative flex items-center justify-center">
                        {/* Top Left Corner */}
                        <div className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 ${color === 'black' ? 'border-black' : 'border-white'} transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full`}></div>
                        {/* Top Right Corner */}
                        <div className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 ${color === 'black' ? 'border-black' : 'border-white'} transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full`}></div>
                        {/* Bottom Left Corner */}
                        <div className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 ${color === 'black' ? 'border-black' : 'border-white'} transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full`}></div>
                        {/* Bottom Right Corner */}
                        <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 ${color === 'black' ? 'border-black' : 'border-white'} transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full`}></div>
                        {/* Text */}
                        <span className={`text-${color} text-sm font-medium tracking-[0.2em] relative z-10 transition-colors duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-${color}`}>
                            I.A
                        </span>
                    </div>
                </div>

                {/* Menu Icon */}
                <div className="flex items-center">
                    <HamburgurToLeftArrow color={color} />
                </div>
            </div>
        </>
    )
}

export default IAButton;