import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ServicesSection() {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once per page load
    threshold: 0.5, // Triggers when 50% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      const animateCount = (setState, target) => {
        let start = 0;
        const increment = target / 100;
        const interval = setInterval(() => {
          start += increment;
          if (start >= target) {
            setState(target);
            clearInterval(interval);
          } else {
            setState(Math.floor(start));
          }
        }, 20);
      };

      animateCount(setClients, 2000);
      animateCount(setProjects, 5000);
      animateCount(setSatisfaction, 98);
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-white py-10 px-4">
      <h2 className="md:text-[40px] text-2xl mb-2 py-3.5 ml-6 md:block hidden">SERVICIOS PRINCIPALES</h2>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center px-10 py-10 mx-auto">

        {/* Clients */}
        <div className="text-center">
          <h3 className="text-7xl md:text-[85px] text-[40px] font-bold bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
            +{clients}
          </h3>
          <p className="text-gray-500 md:text-[32px] text-[20px] text-xl mt-2">
            Clientes han confiado <br /> en nosotros.
          </p>
        </div>

        {/* Mobile Divider */}
        <div className="w-0.5 h-16 bg-gray-300 my-4 md:hidden"></div>

        {/* Projects */}
        <div className="text-center">
          <h3 className="text-7xl md:text-[85px] text-[40px] font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            +{projects}
          </h3>
          <p className="text-gray-500 md:text-[32px]  text-[20px] text-xl mt-2">
            Proyectos desarrollados <br /> con éxito.
          </p>
        </div>

        {/* Mobile Divider */}
        <div className="w-0.5 h-16 bg-gray-300 my-4 md:hidden"></div>

        {/* Satisfaction */}
        <div className="text-center">
          <h3 className="text-7xl md:text-[85px] text-[40px] font-bold bg-gradient-to-r from-[#6ADC7E] to-[#F5AB26] text-transparent bg-clip-text">
            {satisfaction}%
          </h3>
          <p className="text-[#525252] md:text-[32px]  text-[20px] font-light text-xl mt-2">
            De satisfacción 
          </p>
            <span className="text-sm text-[#525252] mt-0">*según estadísticas internas.</span>
        </div>
      </div>

      {/* Line with Dots (Only for Desktop) */}
      <div className="relative mt-6 w-full max-w-3xl mx-auto hidden md:block">
        <div className="w-full h-0.5 bg-gray-300"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    </section>
  );
}
