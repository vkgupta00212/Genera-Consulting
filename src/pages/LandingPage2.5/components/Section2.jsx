import React from 'react'

const Section2 = () => {
  return (
    <section className="bg-[#111111] py-[100px] px-[20px] md:px-[40px] ">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column: Title */}
      <div className="">
        <h2 className="text-3xl md:text-4xl font-semibold uppercase leading-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFDBF] via-[#F8DA79] to-[#C19C45] ">INTEGRACIÓN DE </span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFDBF] via-[#F8DA79] to-[#C19C45] ">TECNOLOGÍA PROPIA </span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFDBF] via-[#F8DA79] to-[#C19C45] ">Y ANÁLISIS BIG DATA</span>
        </h2>
      </div> 

       <div className="max-w-[675px] mt-10 lg:mt-0">
        <p className="text-white text-xl md:text-[24px] leading-[100%]">
          Software desarrollado por Genero Lab que emplea Big Data para un
          análisis avanzado de datos, proporcionando insights precisos
          validados por consultores sénior. La combinación de tecnología de
          punta y asesoría experta permite un nivel de personalización y
          competitividad.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Section2
