import React from 'react'
import r1 from '../../../assets/rect1.svg';
import r2 from '../../../assets/rect2.svg';

const Descriptive = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block w-full py-[38px] bg-black">
        <div className="relative w-[1101px] h-[305px] mx-auto">
          <p className="absolute w-[960px] top-[41px] left-[72px] font-['Campton-Regular',Helvetica] font-normal text-white text-[32px] text-center">
            Genera Consulting se especializa en impulsar la transformación
            digital. Con un equipo multidisciplinar, se fusionan experiencia
            y tecnología para diseñar estrategias personalizadas que generan
            resultados medibles y sostenibles en las organizaciones.
          </p>

          {/* Decorative Rectangles */}
          <img className="absolute w-[81px] h-[81px] top-0 left-0" src={r1} alt="Rectangle stroke" />
          <img className="absolute w-[81px] h-[81px] bottom-0 right-0" src={r2} alt="Rectangle stroke" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden py-[80px] px-[40px] bg-black relative">
        <p className="font-['Campton-Regular',Helvetica] font-normal text-white text-[24px] uppercase tracking-wide text-center">
          Genera Consulting se especializa en impulsar la transformación
          digital. Con un equipo multidisciplinar, se fusionan experiencia
          y tecnología para diseñar estrategias personalizadas que generan
          resultados medibles y sostenibles en las organizaciones.
        </p>

        {/* Decorative Rectangles */}
        <img className="absolute w-[60px] h-[60px] top-2 left-2" src={r1} alt="Rectangle stroke" />
        <img className="absolute w-[60px] h-[60px] bottom-2 right-2" src={r2} alt="Rectangle stroke" />
      </div>
    </>
  );
}

export default Descriptive;
