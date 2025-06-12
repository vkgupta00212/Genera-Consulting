"use client";
import React from "react";
import CrossIconAnimation from "./CrossIconAnimation";
import { useNavigate } from "react-router-dom";

const items = [
    { label: "HOME", id: "home", path: "/" },
    { label: "NOSOTROS", id: "nosotros", path: "/nosotros" },
    { label: "GENERA CONSULTING", id: "genera-consulting", path: "/consulting" },
    { label: "GENERA DIGITAL", id: "genera-digital", path: "/digital" },
    { label: "GENERA LAB", id: "genera-lab", path: "/lab" },
    { label: "CONTACTO", id: "contacto", path: "/contcto" }
];

const Sidenav = ({
    setIsSidenavOpen,
    isSidenavOpen,
    intialRenderForAnimation,
    setInitialRenderForAnimation,
}) => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
        setIsSidenavOpen(false);
        setInitialRenderForAnimation("close");
    };

    return (
        <div
            className={`fixed w-full md:w-full tab:w-full h-screen top-0 left-0 z-[100] bg-[#000000cc] ${intialRenderForAnimation == "open"
                ? "sidenavElement"
                : intialRenderForAnimation == "close"
                    ? "sidenavElementReverse "
                    : "hidden"
                } flex justify-end`}
        >
            <div
                className={`bg-white w-[90%] md:w-[40%] tab:w-[60%] h-screen overflow-y-auto ${isSidenavOpen ? "sidenavTransalteAnimation" : ""
                    } relative`}
            >
                {isSidenavOpen && (
                    <div
                        className="absolute top-[10%] right-[6%] cursor-pointer"
                        onClick={() => {
                            setIsSidenavOpen(false);
                            setInitialRenderForAnimation("close");
                        }}
                    >
                        <CrossIconAnimation />
                    </div>
                )}
                {isSidenavOpen && (
                    <div className="pr-[4%] h-full flex flex-col justify-center items-end">
                        <ul className={`text-[30px] font-medium w-full listItems`}>
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleClick(item.path)}
                                    className={`text-[#898989] hover:text-[#000] cursor-pointer transition-colors  font-campton-bold text-right mt-[20px] mr-[4%] ${isSidenavOpen ? "sidenavListAnimation" : "hidden"
                                        }`}
                                    style={{
                                        animationDelay: isSidenavOpen ? `${index * 0.5}s` : "0s",
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidenav;
