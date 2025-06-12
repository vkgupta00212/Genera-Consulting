import React from 'react';
import FooterImage from '../../../assets/Footer_logo.svg';

const Footer = () => {
  return (
    <footer className="w-full mt-[78px] bg-black rounded-[50px_50px_0px_0px] overflow-hidden flex flex-col items-center relative">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-600 to-green-500 z-[-1]"></div>
      <img loading='lazy' className="w-[204px] h-[84px] mt-3.5" alt="Genera logo" src={FooterImage} />

      {/* Grid for mobile, Flex for larger screens */}
      <div className="grid grid-cols-2 gap-x-8 text-center sm:flex sm:flex-nowrap sm:justify-between sm:w-[521px] mt-[36.5px]">
        <a href="#" className="font-normal text-[#d9d9d9] text-sm whitespace-nowrap">
          Política de Privacidad
        </a>
        <a href="#" className="font-normal text-[#d9d9d9] text-sm whitespace-nowrap">
          Política de Cookies
        </a>
        <a href="#" className="font-normal text-[#d9d9d9] text-sm whitespace-nowrap">
          Términos y Condiciones
        </a>
        <a href="#" className="font-normal text-[#d9d9d9] text-sm whitespace-nowrap">
          Aviso Legal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
