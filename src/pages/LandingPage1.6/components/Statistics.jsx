import React from 'react';

const statisticsData = [
  {
    title: ["Incremento", "del 60%"],
    description: ["en seguidores de", "Instagram en 3 meses."],
    gradient: "bg-gradient-to-r from-[#F11157] to-[#F5AB26] bg-clip-text text-transparent",
    dotColor: "bg-[#F11157]",
  },
  {
    title: ["Aumento del", "40% en reservas"],
    description: ["tras la campaña", "en Facebook."],
    gradient: "bg-gradient-to-r from-[#9981DE] to-[#FCA0BA] bg-clip-text text-transparent",
    dotColor: "bg-[#9981DE]",
  },
  {
    title: ["Engagement"],
    description: ["triplicado en redes sociales", "con contenido de calidad."],
    gradient: "bg-gradient-to-r from-[#6ADC7E] to-[#F5AB26] bg-clip-text text-transparent",
    dotColor: "bg-[#6ADC7E]",
    mobileTitle: "98%",
    mobileDescription: ["De satisfacción", "*según estadísticas internas."],
  },
];

const Statistics = () => {
  return (
    <section className="w-full bg-black py-20 relative">
      <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-20 px-6 md:px-10 relative">
        {statisticsData.map((stat, index) => (
          <div key={index} className="relative flex flex-col items-center text-center w-full max-w-[350px]">
            <h3 className={`${stat.gradient} font-bold text-3xl md:text-4xl`}>
              {(stat.mobileTitle && index === 2 ? [stat.mobileTitle] : stat.title).map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <p className="text-[#9a9a9a] text-lg md:text-xl mt-2">
              {(stat.mobileDescription && index === 2 ? stat.mobileDescription : stat.description).map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
            {/* Vertical Line for Mobile */}
            {index < statisticsData.length - 1 && (
              <div className="md:hidden w-[2px] h-[92px] bg-white mt-6"></div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom line (shorter & centered) */}
      <div className="relative mt-10 flex justify-center">
        <div className="absolute h-[2px] bg-gray-600 md:w-[60%]"></div>

        {/* Dots (only visible on desktop) */}
        <div className="hidden md:flex absolute w-[60%] justify-between bottom-[-8px]">
          {statisticsData.map((stat, index) => (
            <div key={index} className={`w-4 h-4 rounded-full ${stat.dotColor}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
