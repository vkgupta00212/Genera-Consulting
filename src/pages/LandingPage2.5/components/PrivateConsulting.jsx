import Ellipse6 from "../../../assets/Ellipse 6.svg"
import Ellipse8 from "../../../assets/Ellipse8.svg"
import Message from "../../../assets/messageIcon.svg"
import HeartBeat from "../../../assets/heartbeat.svg"
import Diamond from "../../../assets/diamond.svg"

export const PrivateConsulting = () => {
  return (

    <section className="px-[20px] md:px-[40px] py-[96px]">

      <div className="relative bg-[#111111] text-white overflow-hidden px-[20px] md:px-[60px] py-[80px] rounded-[30px]">
        {/* Ellipse in the background, anchored top-right */}
        <img
          src={Ellipse6}
          alt="Ellipse Background"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />

        <img
          src={Ellipse8}
          alt="Ellipse Background"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* Foreground content */}
        <div className="relative z-10  mx-auto">
          <h2 className="text-[32px] md:text-4xl font-semibold">
            ¿POR QUÉ ELEGIR <br />
            PRIVATE CONSULTING?
          </h2>

          {/* Three glassmorphic cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[80px]">
            {/* Card 1 */}
            <div className="rounded-[30px] border border-[#1E1E1E] bg-transparent backdrop-blur-md p-[40px] flex flex-col gap-[30px]">
  <img src={Message} className="h-[60px] w-[60px]" alt="Message Icon" />
  <p className="leading-[100%] text-[24px] mt-2">
    Private Consulting se distingue por un acompañamiento integral que
    va más allá de la consultoría tradicional.
  </p>
</div>


            {/* Card 2 */}
            <div className="rounded-[30px] border border-[#1E1E1E] bg-transparent backdrop-blur-md p-[40px] flex flex-col gap-[30px]">
              <img src={HeartBeat} className="h-[60px] w-[60px]" alt="Message Icon" />
              <p className="leading-[100%] text-[24px] mt-2">
              Diagnóstico riguroso, estrategias personalizadas y análisis de
              datos para soluciones prácticas y escalables.
              </p>
            </div>


            {/* Card 3 */}
            <div className="rounded-[30px] border border-[#1E1E1E] bg-transparent backdrop-blur-md p-[40px] flex flex-col gap-[30px]">
              <img src={Diamond} className="h-[60px] w-[60px]" alt="Message Icon" />
              <p className="leading-[100%] text-[24px] mt-2">
              Enfoque premium para resolver desafíos complejos con impacto
              duradero en transformación digital y crecimiento sostenible.
              </p>
            </div>
           
          </div>
        </div>
      </div>

    </section>
  )
}
