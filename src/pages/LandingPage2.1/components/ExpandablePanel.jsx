import React, { useState, useEffect } from "react";
import ArrowUp from "../../../assets/ArrowUp.svg";
import ArrowUpWhite from "../../../assets/ArrowUpWhite.svg";
import digitalActive from "../../../assets/digital.svg";
import labActive from "../../../assets/lab.svg";
import consultingActive from "../../../assets/consulting.svg";
import labActiveMobile from "../../../assets/lab-mobile.svg";
import consultingActiveMobile from "../../../assets/consulting-mobile.svg";
import digitalInactive from "../../../assets/digital-inactive.svg";
import labInactive from "../../../assets/lab-inactive.svg";
import consultingInactive from "../../../assets/consulting-inactive.svg";
import labInactiveMobile from "../../../assets/lab-inactive-mobile.svg";
import consultingInactiveMobile from "../../../assets/consulting-inactive-mobile.svg";
import GroupLogo from "../../../assets/Group.svg";
import GroupBlackLogo from "../../../assets/GroupBlack.svg";
import ArrowRight from "../../../assets/Arr.svg";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function ExpandablePanels() {
  // Treat devices with width below 1280px (tablets and smaller) as mobile.
  const [activePanel, setActivePanel] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle active panel (or reset if clicked again)
  const handlePanelClick = (panelId) => {
    setActivePanel((prev) => (prev === panelId ? null : panelId));
  };

  // Return appropriate flex classes based solely on mobile logic.
  // Removing the md: classes ensures that if isMobile is true, the mobile layout is always used.
  const getPanelClasses = (panelId) => {
    const base =
      "relative flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat rounded-2xl";
    const flexClass =
      activePanel === null
        ? "flex-1"
        : activePanel === panelId
        ? "flex-[10]"
        : "flex-[1]";
    return `${base} ${flexClass}`;
  };

  const handleButtonClick = (url) => {
    navigate(url);
  };

  // Determine background images based on active panel and device size.
  const getBackgroundImage = (panelId) => {
    const activeImages = isMobile
      ? {
          digital: `url(${digitalActive})`,
          lab: `url(${labActiveMobile})`,
          consulting: `url(${consultingActiveMobile})`,
        }
      : {
          digital: `url(${digitalActive})`,
          lab: `url(${labActive})`,
          consulting: `url(${consultingActive})`,
        };

    const inactiveImages = isMobile
      ? {
          digital: `url(${digitalInactive})`,
          lab: `url(${labInactiveMobile})`,
          consulting: `url(${consultingInactiveMobile})`,
        }
      : {
          digital: `url(${digitalInactive})`,
          lab: `url(${labInactive})`,
          consulting: `url(${consultingInactive})`,
        };

    if (activePanel === null) {
      return activeImages[panelId] || "";
    } else if (activePanel === panelId) {
      return activeImages[panelId] || "";
    } else {
      return inactiveImages[panelId] || "";
    }
  };

  // Arrow rotation logic for the active panel.
  const getArrowClasses = (panelId) => {
    return `absolute top-2 md:top-4  right-4 w-10 h-10 transition-transform duration-300 ${
      activePanel === panelId ? "rotate-180" : ""
    }`;
  };

  return (
    <div
      className={`w-full h-screen flex ${
        isMobile ? "flex-col" : "flex-row"
      } gap-4 p-4 overflow-hidden`}
    >
      {/* DIGITAL Panel */}
      <div
        className={getPanelClasses("digital")}
        style={{ backgroundImage: getBackgroundImage("digital") }}
        onClick={() => handlePanelClick("digital")}
      >
        <div className={getArrowClasses("digital")}>
          <img src={ArrowUpWhite} alt="Arrow Up White" />
        </div>

        {activePanel === "digital" && (
          <div
            className={`relative flex ${
              isMobile ? "flex-col" : "flex-row"
            } w-full h-full px-12 py-8 text-white`}
          >
            <div className={getArrowClasses("digital")}>
              <img src={ArrowUpWhite} alt="Arrow Up White" />
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full h-full pt-[65px] gap-[50px]">
              <div className="flex justify-center items-center gap-3">
                <img
                  src={GroupLogo}
                  alt="GeneraDigital Logo"
                  className="h-16 w-auto md:h-[124px]"
                />
                <h2 className="text-4xl md:text-6xl font-light ">
                  <strong className="font-medium">Genera</strong>Digital
                </h2>
              </div>
              <div className="flex-1 flex flex-col items-end justify-center ">
                <div className="max-w-md mx-auto mt-0">
                  <p className="mb-6 leading-[100%] text-[15px] md:text-[20px] text-left">
                    Desde la gestión de ayudas como el Kit Digital hasta
                    servicios de marketing y automatización, te acompañamos a
                    liderar el cambio en tu sector.¡Descubre cómo podemos
                    revolucionar juntos tu negocio!
                  </p>
                  <button
                    onClick={() => handleButtonClick("/digital")}
                    className="btn-swipe  w-72 contact-btn right-swipe md:w-fit h-16 md:pr-6 cursor-pointer relative overflow-hidden flex justify-center items-center gap-3 bg-transparent text-white 
                                 md:pl-15 py-3 px-1 pl-1
                                 rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-white border-1
                                 border-white hover:text-black hover:lg:pl-4 "
                  >
                    <span className="absolute left-4 arrow-icon">
                      <BsArrowRight
                        className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-1
                                                          w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1"
                      />
                    </span>
                    <span className="md:text-xl pl-8 text-[0.9em] px-7 capitalize">
                      Comienza tu transformación
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePanel === null && (
          <h2 className="text-4xl font-normal text-white absolute drop-shadow-md">
            Digital
          </h2>
        )}
      </div>

      {/* LAB Panel */}
      <div
        className={getPanelClasses("lab")}
        style={{ backgroundImage: getBackgroundImage("lab") }}
        onClick={() => handlePanelClick("lab")}
      >
        <div className={getArrowClasses("lab")}>
          <img src={ArrowUp} alt="Arrow Up" />
        </div>

        {activePanel === "lab" && (
          <div
            className={`relative flex ${
              isMobile ? "flex-col pt-[65px]" : "flex-row"
            } w-full h-full px-6 py-4 `}
          >
            <div className="mb-4 flex items-center gap-4">
              <img
                src={GroupBlackLogo}
                alt="GeneraDigital Logo"
                className="h-16 w-16"
              />
              <h2 className="text-4xl md:text-6xl font-light ">
                <strong className="font-medium">Genera</strong>Lab
              </h2>
            </div>
            <div className="flex-1 flex flex-col items-end justify-center">
              <div className="max-w-md mx-auto mt-0">
                <p className="mb-6 leading-[100%] text-[15px] md:text-[20px] text-left">
                  Desde la gestión de ayudas como el Kit Digital hasta servicios
                  de marketing y automatización, te acompañamos a liderar el
                  cambio en tu sector.¡Descubre cómo podemos revolucionar juntos
                  tu negocio!
                </p>
                <button
                  onClick={() => handleButtonClick("/lab")}
                  className="btn-swipe  w-72 contact-btn right-swipe md:w-fit h-16 md:pr-6 cursor-pointer relative overflow-hidden flex justify-center items-center gap-3 bg-black text-white 
                                 md:pl-15 py-3 px-1 pl-1
                                 rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-white border-1
                                 border-white hover:text-black hover:lg:pl-4 "
                >
                  <span className="absolute left-4 arrow-icon">
                    <BsArrowRight
                      className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-1
                                                          w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1"
                    />
                  </span>
                  <span className="md:text-xl pl-8 text-[0.9em] px-7 capitalize">
                    Comienza tu transformación
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activePanel === null && (
          <h2 className="text-4xl font-normal text-black absolute drop-shadow-md">
            Lab
          </h2>
        )}
      </div>

      {/* CONSULTING Panel */}
      <div
        className={getPanelClasses("consulting")}
        style={{ backgroundImage: getBackgroundImage("consulting") }}
        onClick={() => handlePanelClick("consulting")}
      >
        <div className={getArrowClasses("consulting")}>
          <img src={ArrowUpWhite} alt="Arrow Up White" />
        </div>

        {activePanel === "consulting" && (
          <div
            className={`relative flex ${
              isMobile ? "flex-col pt-[65px]" : "flex-row"
            } w-full h-full px-6 py-4 text-white`}
          >
            <div className="mb-4 flex items-center gap-4 ">
              <img
                src={GroupLogo}
                alt="GeneraDigital Logo"
                className="h-20 w-20 xl:mb-10 "
              />
              <h2 className="text-[27px] md:text-6xl font-light xl:mb-10">
                <strong className="font-bold">Genera</strong>Consulting
              </h2>
            </div>
            <div className="flex-1 flex flex-col items-end justify-center">
              <div className="max-w-md mx-auto mt-0">
                <p className="mb-6 leading-[100%] text-[15px] md:text-[20px] text-left">
                  Desde la gestión de ayudas como el Kit Digital hasta servicios
                  de marketing y automatización, te acompañamos a liderar el
                  cambio en tu sector.¡Descubre cómo podemos revolucionar juntos
                  tu negocio!
                </p>
                <button
                  onClick={() => handleButtonClick("/consulting")}
                  className="btn-swipe  w-72 contact-btn right-swipe md:w-fit h-16 md:pr-6 cursor-pointer relative overflow-hidden flex justify-center items-center gap-3 bg-black text-white 
                                 md:pl-15 py-3 px-1 pl-1
                                 rounded-full text-sm font-bold transition-all duration-500 ease-in-out hover:bg-white border-1
                                 border-white hover:text-black hover:lg:pl-4 "
                >
                  <span className="absolute left-4 arrow-icon">
                    <BsArrowRight
                      className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-1
                                                          w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 pr-1"
                    />
                  </span>
                  <span className="md:text-xl pl-8 text-[0.9em] px-7 capitalize">
                    Comienza tu transformación
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activePanel === null && (
          <h2 className="text-4xl font-normal text-white absolute drop-shadow-md">
            Consulting
          </h2>
        )}
      </div>
    </div>
  );
}
