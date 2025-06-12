export const BenefitsAndFeatures = () => {
  return (
    <section className="bg-black text-white py-[100px] px-[20px] md:px-[40px]">
      <div className=" mx-auto">
        {/* Title */}
        <h2 className="text-[32px] md:text-4xl font-semibold uppercase leading-[100%] ">
          BENEFICIOS Y CARACTERÍSTICAS
        </h2>
        <p className="text-xl md:text-[24px] uppercase leading-[100%] font-normal my-[30px] lg:max-w-1/2 ">
          PRIVATE CONSULTING <br className="lg:hidden" /> OFRECE VENTAJAS <br className="lg:hidden" /> EXCLUSIVAS QUE DESTACAN  <br className="lg:hidden" /> SU ENFOQUE PREMIUM
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 my-[80px] gap-6">
          {/* Card 1 */}
          <div className="px-[40px] py-[35px] flex flex-col md:flex-row gap-[30px] rounded-[30px] shadow-lg
            bg-[radial-gradient(ellipse_at_10%_50%,_rgba(221,187,95,0.25),_#111111_70%)] ">
            <h1 className="text-[64px] uppercase font-medium leading-[100%] text-[#DDBB5F]">01</h1>
            <div className="flex flex-col gap-[20px]">
              <h3 className=" text-[24px] uppercase font-semibold">
                ASESORÍA <br className="md:hidden"/> EXCLUSIVA Y CONFIDENCIAL
              </h3>
              <p className=" text-[20px] font-normal text-[#9A9A9A] leading-[100%]">
                Entorno seguro, garantizando la máxima discreción en el manejo de
                información sensible.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="px-[40px] py-[35px] flex flex-col md:flex-row gap-[30px] rounded-[30px] shadow-md
            bg-[radial-gradient(ellipse_at_10%_50%,_rgba(221,187,95,0.25),_#111111_70%)]">
            <h1 className="text-[64px] uppercase font-medium leading-[100%] text-[#DDBB5F]">02</h1>
            <div className="flex flex-col gap-[20px]">
              <h3 className=" text-[24px] uppercase font-semibold">
                SOLUCIONES A MEDIDA
              </h3>
              <p className=" text-[20px] font-normal text-[#9A9A9A] leading-[100%]">
                Cada propuesta se adapta a las necesidades específicas de la
                organización, utilizando datos y análisis avanzados.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="px-[40px] py-[35px] flex flex-col md:flex-row gap-[30px] rounded-[30px] shadow-md
            bg-[radial-gradient(ellipse_at_10%_50%,_rgba(221,187,95,0.25),_#111111_70%)]">
            <h1 className="text-[64px] uppercase font-medium leading-[100%] text-[#DDBB5F]">03</h1>
            <div className="flex flex-col gap-[20px]">
              <h3 className=" text-[24px] uppercase font-semibold">
                EXPERIENCIA DE <br className="md:hidden"/> ALTO NIVEL
              </h3>
              <p className=" text-[20px] font-normal text-[#9A9A9A] leading-[100%]">
                Equipo de consultores con amplia trayectoria y certificaciones
                reconocidas aseguran resultados efectivos.
              </p>
            </div>
          </div>

             {/* Card 4 */}
             <div className="px-[40px] py-[35px] flex flex-col md:flex-row gap-[30px] rounded-[30px] shadow-md
            bg-[radial-gradient(ellipse_at_10%_50%,_rgba(221,187,95,0.25),_#111111_70%)]">
            <h1 className="text-[64px] uppercase font-medium leading-[100%] text-[#DDBB5F]">04</h1>
            <div className="flex flex-col gap-[20px]">
              <h3 className=" text-[24px] uppercase font-semibold">
              INNOVACIÓN APLICADA
              </h3>
              <p className=" text-[20px] font-normal text-[#9A9A9A] leading-[100%]">
              La utilización de inteligencia artificial, analítica avanzada y
              enfoques full-stack protege cada fase del proceso y la data
              estratégica.
              </p>
            </div>
          </div>


        </div>
        
        </div>
   
    </section>
  )
}
