import React from 'react';
import InsideImage from '../../../assets/In_1.svg';

const processSteps = [
  { number: '01', title: 'Análisis de la marca', description: 'Definición de la estrategia de contenido.' },
  { number: '02', title: 'Diseño de publicaciones', description: 'Acordes a la identidad del hotel.' },
  { number: '03', title: 'Planificación y programación', description: 'Planificación mensual de posts y stories.' },
  { number: '04', title: 'Publicidad segmentada', description: 'En Facebook e Instagram para atraer al público objetivo.' },
  { number: '05', title: 'Informe mensual', description: 'De resultados y acciones de mejora.' }
];

const ProcessSection = () => {
  return (
    <div className="sm:mx-[41px] px-[20px] py-24 ">
      <h2 className="text-black text-[32px] sm:text-[40px] font-normal mb-12">PROCESO</h2>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-row gap-6 items-stretch h-[793px]">
        {/* Image Section */}
        <div className="w-1/2 rounded-[50px] overflow-hidden flex">
          <img loading='lazy' src={InsideImage} alt="Inside View" className="w-full object-cover" />
        </div>

        {/* Steps Section */}
        <div className="w-1/2 bg-black text-white rounded-[50px] p-[50px] flex flex-col justify-center">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 p-6 border border-white rounded-[30px] mb-4 last:mb-0">
              <span className="text-5xl font-semibold">{step.number}</span>
              <div className='mx-3'>
                <h3 className="text-[28px] font-semibold">{step.title}</h3>
                <p className="text-xl font-normal text-[#9A9A9A]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex lg:hidden flex-col items-center gap-8">
        <div className="w-full max-w-[600px] rounded-[40px] flex justify-center overflow-hidden">
          <img loading='lazy' src={InsideImage} alt="Inside View" className="w-full object-cover" />
        </div>
        <div className="w-full max-w-[600px] bg-black text-white rounded-[40px] p-8 flex flex-col gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-row items-start gap-6 p-6 border border-white rounded-[30px]">
              <span className="text-[40px] font-semibold">{step.number}</span>
              <div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-base text-[#9A9A9A] font-normal">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-6 items-center">
        <div className="w-full rounded-[40px] flex justify-center ">
          <img src={InsideImage} alt="Inside View" className="w-[336px] h-[351px]" />
        </div>
        <div className="w-[336px] bg-black text-white rounded-[40px] p-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-row items-start gap-5 py-[30px] px-[20px] border border-white rounded-[30px] mb-4 last:mb-0">
              <span className="text-[40px] font-semibold">{step.number}</span>
              <div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-base text-[#9A9A9A] font-normal">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;