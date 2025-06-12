import React from 'react';
import F01 from '../../../assets/F01.svg';
import F02 from '../../../assets/F02.svg';
import F03 from '../../../assets/F03.svg';

const processSteps = [
  { number: '01', title: 'Acompañamiento Total', description: 'No se limita a asesorar, sino que se acompaña en la implementación y seguimiento', image: F01 },
  { number: '02', title: 'Expertise Multidisciplinar', description: 'No se limita a asesorar, sino que se acompaña en la implementación y seguimiento', image: F02 },
  { number: '03', title: 'Innovación Aplicada', description: 'Se utilizan herramientas avanzadas –como inteligencia artificial, analítica y desarrollos full-stack– para optimizar procesos y reducir costes.', image: F03 },
];

const Feature = () => {
  return (
    <div className='bg-black py-[100px] px-[20px] md:px-[40px] text-white'>

      {/* Heading Section */}
      <div>
        <h1 className='hidden md:block text-[64px] font-medium leading-[100%] uppercase text-center'>
          Ventaja Estratégica
        </h1>
        <h1 className='md:hidden text-[40px] font-medium leading-[100%] uppercase text-start'>
          Metodología
        </h1>
      </div>

      {/* Subheading */}
      <div>
        <p className='md:hidden text-[20px] py-[28px] font-medium leading-[100%] uppercase text-start'>
          Modelo integral que une conocimiento sectorial y tecnología de vanguardia
        </p>
        <p className='hidden md:block py-[28px] text-[32px] font-medium leading-[100%] uppercase text-center md:max-w-[904px] mx-auto'>
          Modelo integral que une conocimiento <br /> sectorial y tecnología de vanguardia
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {processSteps.map((step, i) => (
          <div key={i} className='bg-[#111111] rounded-[30px] text-white px-[30px] md:px-[40px] pt-[80px] pb-[60px] flex flex-col'>

            {/* Image Section */}
            <div className='flex justify-center items-center'>
              <img src={step.image} alt="" className='w-[120px] h-[120px] md:w-[150px] md:h-[150px]' />
            </div>

            {/* Title + Description */}
            <div className='flex flex-col gap-[20px] mt-[60px] min-h-[150px]'>
              <h1 className='text-[20px] md:text-[24px] uppercase font-medium leading-[100%] text-start md:text-center lg:text-start md:mx-auto'>
                {step.title}
              </h1>
              <p className='text-[#9A9A9A] text-[16px] md:text-[20px] font-normal leading-[100%] max-w-[330px] text-start md:text-center lg:text-start md:mx-auto'>
                {step.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Feature;
