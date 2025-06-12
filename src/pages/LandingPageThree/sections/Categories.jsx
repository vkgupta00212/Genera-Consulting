import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
    { name: "Sitio web y presencia avanzada en internet" },
    { name: "Gestión de Procesos (ERP)" },
    { name: "Comercio electrónico o marketplace" },
    { name: "Ciberseguridad" },
    { name: "Redes Sociales" },
    { name: "BI & Analítica e IA asociada" },
    { name: "Gestión de Clientes (CRM)" },
    { name: "Puesto de Trabajo Seguro" },
];

const Categories = () => {
    return (
        <div className="bg-black text-white py-16">
            <div className=" w-full px-6 flex flex-col md:flex-row items-start">
                {/* Left Side - Title */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0 mr-auto">
                    <h2 className="text-4xl font-light">CATEGORÍAS <br /> PRINCIPALES</h2>
                </div>

                {/* Right Side - Categories Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 ml-auto">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group flex justify-between items-center border border-white rounded-3xl px-5 py-7 text-sm font-light cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            <span className="text-lg">{category.name}</span>
                            <span className="text-4xl transition-transform duration-300 group-hover:rotate-45">
                                <FiArrowUpRight />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
