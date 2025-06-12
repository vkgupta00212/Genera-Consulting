import React from "react";
import targetAudienceMobile from '../../../assets/laptop_mobile_three.png'
import targetAudience from '../../../assets/laptop_three.png'
const TargetAudience = () => {
    return (
        <div className="bg-white py-16 flex justify-center">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start py-4 px-4 md:py-12 md:px-16">
                <div className="w-full md:w-1/2">
                    <h2 className="text-[24px] md:text-[40px] mb-14 capitalize text-black">¿A quién va dirigido?</h2>
                    <img
                        src={targetAudience}
                        alt="Laptop"
                        className="hidden md:block rounded-2xl w-full"
                    />

                    {/* Mobile Image */}
                    <img
                        src={targetAudienceMobile}
                        alt="Mobile View"
                        className="block md:hidden rounded-2xl w-full"
                    />
                </div>

                <div className="w-full md:w-1/2 mt-12 md:mt-36  md:pl-10">
                    <p className="text-gray-700 font-light text-2xl leading-relaxed">
                    Pequeñas y medianas empresas que no tengan web o que deseen renovar la que ya poseen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TargetAudience;
