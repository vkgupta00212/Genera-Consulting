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
    <footer className="relative w-full md:rounded-t-[50px] bg-black overflow-hidden mt-10 py-3.5">
      <div className="flex flex-col items-center justify-between h-[164px]">
        <img className="w-[204px] h-[84px]" alt="Genera logo" src={Logo} />

        {/* Links Container */}
        <div className="grid grid-cols-2 md:flex items-center justify-end md:justify-center gap-4 md:gap-8 mb-4">
          {footerLinks.map((link, index) => {
            // For mobile: even indexes (col 1) left aligned, odd indexes (col 2) right aligned.
            const mobileAlignment = index % 2 === 0 ? "text-left" : "text-right";
            return (
              <button
                key={index}
                className={`text-[#d9d9d9] text-sm [font-family:'Myriad_Pro-Regular',Helvetica] hover:underline ${mobileAlignment} md:text-left`}
              >
                {link}
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
