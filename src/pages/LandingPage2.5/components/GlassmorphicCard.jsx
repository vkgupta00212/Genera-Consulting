"use client"

const cardData = [
  {
    title: "DIAGNÓSTICO PROFUNDO",
    icon: (
      <svg
        width="207"
        height="121"
        viewBox="0 0 207 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 63.9892H46.7924L75.4941 12L117.242 109L151.51 45.4964H207"
          stroke="white"
          strokeWidth="10"
        />
      </svg>
    ),
    bgIcon: (
      <svg
        width="207"
        height="121"
        viewBox="0 0 207 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 63.9892H46.7924L75.4941 12L117.242 109L151.51 45.4964H207"
          stroke="#FDFDBF"
          strokeWidth="10"
        />
      </svg>
    ),
    description:
      "Análisis exhaustivo del entorno y los procesos de la organización para detectar oportunidades de mejora y desafíos críticos, permitiendo una toma de decisiones estratégica y fundamentada.",
  },
  {
    title: "DISEÑO DE ESTRATEGIAS",
    icon: (
      <svg
        width="143"
        height="177"
        viewBox="0 0 143 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.478 83.5C107.09 83.5 76.627 47.211 76.627 0H66.627L66.3733 2.60452e-05C66.3733 47.211 35.9103 83.5 0.522462 83.5L0.522461 93.5C0.522518 93.5 0.522576 93.5 0.522634 93.5C35.9104 93.5 66.3734 129.789 66.3734 177L66.6272 177L76.3734 177L76.6272 177C76.6272 129.789 107.09 93.5 142.478 93.5V83.5L142.478 83.5ZM25.1804 88.5C46.7612 79.4147 63.6204 58.734 71.5001 32.9811C79.3799 58.734 96.2392 79.4148 117.82 88.5C96.2393 97.5853 79.3801 118.266 71.5003 144.019C63.6205 118.266 46.7613 97.5852 25.1804 88.5Z"
          fill="white"
        />
      </svg>
    ),
    bgIcon: (
      <svg
        width="143"
        height="177"
        viewBox="0 0 143 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.478 83.5C107.09 83.5 76.627 47.211 76.627 0H66.627L66.3733 2.60452e-05C66.3733 47.211 35.9103 83.5 0.522462 83.5L0.522461 93.5C0.522518 93.5 0.522576 93.5 0.522634 93.5C35.9104 93.5 66.3734 129.789 66.3734 177L66.6272 177L76.3734 177L76.6272 177C76.6272 129.789 107.09 93.5 142.478 93.5V83.5L142.478 83.5ZM25.1804 88.5C46.7612 79.4147 63.6204 58.734 71.5001 32.9811C79.3799 58.734 96.2392 79.4148 117.82 88.5C96.2393 97.5853 79.3801 118.266 71.5003 144.019C63.6205 118.266 46.7613 97.5852 25.1804 88.5Z"
          fill="#C19C45"
        />
      </svg>
    ),
    description:
      "Roadmap estratégico que diseña e integra soluciones personalizadas, asegurando alineación con la visión, objetivos y necesidades específicas de cada cliente.",
  },
  {
    title: "IMPLEMENTACIÓN Y SEGUIMIENTO",
    icon: (
      <svg
        width="275"
        height="178"
        viewBox="0 0 275 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666666 156C0.666666 167.782 10.2179 177.333 22 177.333C33.7821 177.333 43.3333 167.782 43.3333 156C43.3333 144.218 33.7821 134.667 22 134.667C10.2179 134.667 0.666666 144.218 0.666666 156ZM180.489 97.4523L181.149 101.397L180.489 97.4523ZM231.667 22C231.667 33.7821 241.218 43.3333 253 43.3333C264.782 43.3333 274.333 33.7821 274.333 22C274.333 10.2179 264.782 0.666666 253 0.666666C241.218 0.666666 231.667 10.2179 231.667 22ZM25.2521 158.329C27.4631 155.241 29.6588 152.344 31.8416 149.625L25.6028 144.617C23.3232 147.457 21.0392 150.471 18.7479 153.671L25.2521 158.329ZM46.4509 133.787C52.1428 128.511 57.7846 124.295 63.4232 120.906L59.3019 114.05C53.1642 117.739 47.0844 122.292 41.0129 127.919L46.4509 133.787ZM82.7297 112.207C89.5256 110.05 96.4739 108.672 103.686 107.739L102.66 99.8049C95.1043 100.782 87.6693 102.246 80.3092 104.582L82.7297 112.207ZM125.47 105.973C132.509 105.622 140.001 105.355 147.642 104.919L147.186 96.9319C139.539 97.3683 132.308 97.6216 125.071 97.9829L125.47 105.973ZM169.988 103.004C173.637 102.56 177.356 102.032 181.149 101.397L179.828 93.5072C176.163 94.1208 172.563 94.6318 169.023 95.0624L169.988 103.004ZM181.149 101.397C184.446 100.845 187.617 100.153 190.666 99.3321L188.586 91.607C185.791 92.3594 182.873 92.9974 179.828 93.5072L181.149 101.397ZM208.879 92.2895C214.954 89.1363 220.344 85.4259 225.107 81.3573L219.911 75.2744C215.59 78.9651 210.704 82.3287 205.194 85.1891L208.879 92.2895ZM238.468 67.1113C242.586 61.6451 245.912 55.9827 248.554 50.4532L241.335 47.0044C238.902 52.0979 235.846 57.296 232.078 62.2975L238.468 67.1113ZM255.181 32.1538C256.06 28.6378 256.648 25.3607 256.975 22.4467L249.025 21.5533C248.741 24.084 248.221 27.0108 247.42 30.2138L255.181 32.1538Z"
          fill="white"
        />
      </svg>
    ),
    bgIcon: (
      <svg
        width="275"
        height="178"
        viewBox="0 0 275 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666666 156C0.666666 167.782 10.2179 177.333 22 177.333C33.7821 177.333 43.3333 167.782 43.3333 156C43.3333 144.218 33.7821 134.667 22 134.667C10.2179 134.667 0.666666 144.218 0.666666 156ZM180.489 97.4523L181.149 101.397L180.489 97.4523ZM231.667 22C231.667 33.7821 241.218 43.3333 253 43.3333C264.782 43.3333 274.333 33.7821 274.333 22C274.333 10.2179 264.782 0.666666 253 0.666666C241.218 0.666666 231.667 10.2179 231.667 22ZM25.2521 158.329C27.4631 155.241 29.6588 152.344 31.8416 149.625L25.6028 144.617C23.3232 147.457 21.0392 150.471 18.7479 153.671L25.2521 158.329ZM46.4509 133.787C52.1428 128.511 57.7846 124.295 63.4232 120.906L59.3019 114.05C53.1642 117.739 47.0844 122.292 41.0129 127.919L46.4509 133.787ZM82.7297 112.207C89.5256 110.05 96.4739 108.672 103.686 107.739L102.66 99.8049C95.1043 100.782 87.6693 102.246 80.3092 104.582L82.7297 112.207ZM125.47 105.973C132.509 105.622 140.001 105.355 147.642 104.919L147.186 96.9319C139.539 97.3683 132.308 97.6216 125.071 97.9829L125.47 105.973ZM169.988 103.004C173.637 102.56 177.356 102.032 181.149 101.397L179.828 93.5072C176.163 94.1208 172.563 94.6318 169.023 95.0624L169.988 103.004ZM181.149 101.397C184.446 100.845 187.617 100.153 190.666 99.3321L188.586 91.607C185.791 92.3594 182.873 92.9974 179.828 93.5072L181.149 101.397ZM208.879 92.2895C214.954 89.1363 220.344 85.4259 225.107 81.3573L219.911 75.2744C215.59 78.9651 210.704 82.3287 205.194 85.1891L208.879 92.2895ZM238.468 67.1113C242.586 61.6451 245.912 55.9827 248.554 50.4532L241.335 47.0044C238.902 52.0979 235.846 57.296 232.078 62.2975L238.468 67.1113ZM255.181 32.1538C256.06 28.6378 256.648 25.3607 256.975 22.4467L249.025 21.5533C248.741 24.084 248.221 27.0108 247.42 30.2138L255.181 32.1538Z"
          fill="#DDBB5F"
        />
      </svg>
    ),
    description:
      "Acompañamiento continuo en cada fase del proceso, con ajustes y optimizaciones estratégicas para garantizar resultados sostenibles y de alto impacto.",
  },
]

export const GlassmorphicCards = () => {
  return (
    <div className="py-[100px] px-[20px] md:px-[40px]">
        <p className="text-white flex justify-center text-[32px] md:text-[36px] font-semibold uppercase ">Nuestro Enfoque</p>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-auto my-[80px]">
  {cardData.map((card, index) => (
    <div key={index} className="relative w-full bg-[#111111] h-[710px] rounded-[30px]">
      {/* Full card backdrop layer with moderate blur */}
      {/* <div className="absolute inset-0 bg-black/10 border-1 rounded-[30px] z-0"></div> */}

      {/* Main glass card container with dark background */}
      <div className="relative h-full w-full rounded-[30px] overflow-hidden flex flex-col  gap-20 p-8 bg-black/10 border border-black/30 z-10">
        {/* Background blurred icon */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute flex items-center justify-center blur-[18px] opacity-90">
            <div className="transform scale-[2] blur-xs opacity-90">{card.bgIcon}</div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Title */}
          <h2 className="text-white text-[32px] md:text-[40px] font-bold text-center mb-12">
            {card.title}
          </h2>

          {/* Icon */}
          <div className="flex-grow flex items-center justify-center">
            {card.icon}
          </div>

          {/* Description */}
          <div className="mt-8">
            <p className="text-[#9A9A9A] max-w-[367px] md:mx-auto lg:mx-0 text-[16px] md:text-xl">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>




    
    </div>
  )
}
