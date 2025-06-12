import React from "react";
import Logo from "../../../assets/logoDark.png";

const Footer = () => {
  // Footer links data for easy maintenance
  const footerLinks = [
    "Política de Privacidad",
    "Política de Cookies",
    "Términos y Condiciones",
    "Aviso Legal",
  ];

  return (
    <footer className="relative w-full bg-black overflow-hidden py-3.5">
      <div className="flex flex-col items-center justify-between h-[164px]">
        <img className="w-[204px] h-[84px]" alt="Genera logo" src={Logo} />

        {/* Links Container - Grid for Mobile, Flex for Desktop */}
        <div className="grid grid-cols-2 md:flex items-center justify-center gap-4 md:gap-8 mb-4">
          {footerLinks.map((link, index) => (
            <button
              key={index}
              className="text-[#d9d9d9] text-sm [font-family:'Myriad_Pro-Regular',Helvetica] hover:underline text-center md:text-left"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
