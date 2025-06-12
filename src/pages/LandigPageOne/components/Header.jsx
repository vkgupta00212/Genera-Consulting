import React from 'react'
import { FiMenu } from "react-icons/fi"; 
import logo from "../../../assets/Genera-logo-dark.svg";
import logoTwo from "../../../assets/I.A_logo.svg";
import IAButton from '../../../components/IAButton';
import logoDesktop from "../../../assets/Genera-logo-dark.svg";
import logoMobile from "../../../assets/Genera-logo.svg";
const Header = () => {
  return (
    <div>
          <header className=" w-full desktop-header bg-white flex justify-between items-center py-10 md:px-16 px-4 hover:bg-transparent">
              <img src={logoDesktop} alt="Genera Logo" className="h-10 md:h-12 header-logo-desktop" />
              <img src={logoMobile} alt="Genera Logo" className="h-10 md:h-12 header-logo-mobile" />
              <div className="flex items-center gap-6 header-ia-black-btn">
          
              <IAButton 
                color="black" 
                className="header-ia-white-btn"
              />
          
            </div>
            <div className="flex items-center gap-6 header-ia-white-btn">
            
              <IAButton 
                color="white" 
                className=""
              />
          
            </div>
            </header>
    </div>
  )
}

export default Header
