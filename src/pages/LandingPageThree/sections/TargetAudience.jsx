import React from "react";
import targetAudience from '../../../assets/laptop_two.png';
import targetAudienceMobile from '../../../assets/laptop_img_two.png';

const TargetAudience = ({ type = 'apple' }) => {
    const brandContent = {
        apple: {
            description: `Pymes y autónomos en búsqueda de productividad y calidad en sus herramientas de trabajo.<br/><br/>Empresas que desean renovar su flota tecnológica con Apple.`
        },
        samsung: {
            description: `Esta ayuda está orientada a pymes, microempresas y autónomos en España que buscan modernizar sus puestos de trabajo con equipos de alta tecnología,<br/><br/>fortaleciendo su competitividad y capacidad de respuesta en el entorno digital.`
        },
        hp: {
            description: `Esta ayuda está orientada a pymes, microempresas y autónomos en España que buscan modernizar sus puestos de trabajo mediante la adquisición de equipos HP subvencionados,<br/><br/>elevando la competitividad y eficiencia operativa.`
        }
    };

    const content = brandContent[type] || brandContent.apple;

    return (
        <div className="bg-black py-16 flex justify-center">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start py-4 px-4 md:py-12 md:px-16">
                <div className="w-full md:w-1/2">
                    <h2 className="text-[24px] md:text-[40px] mb-14 capitalize text-white">¿A quién va dirigido?</h2>
                    <img
                        src={targetAudience}
                        alt="Laptop"
                        className="hidden md:block rounded-2xl w-full"
                    />
                    <img
                        src={targetAudienceMobile}
                        alt="Mobile View"
                        className="block md:hidden rounded-2xl w-full"
                    />
                </div>

                <div className="w-full md:w-1/2 mt-12 md:mt-36 md:pl-10">
                    <p 
                        className="text-gray-400 font-light text-2xl leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: content.description }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default TargetAudience;