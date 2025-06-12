import React from 'react'

const ethicalCommitments = [
  {
    id: 1,
    title: "PRIVACIDADY SEGURIDAD",
    description:
      "Cumplimos con los estándares más altos de confidencialidad y salvaguarda de información.",
  },
  {
    id: 2,
    title: "TRANSPARENCIA",
    description:
      "Mantenemos una comunicación clara en todas las fases de los proyectos, construyendo relaciones de confianza a largo plazo.",
  },
  {
    id: 3,
    title: "RESPONSABILIDAD SOCIAL",
    description:
      "Aportamos valor a nuestro entorno y asumimos un rol activo en la conservación del medio ambiente.",
  },
];


const Banner2 = () => {
  return (
    <div className='py-[80px] bg-black px-[20px] md:px-[40px]'>

      <h1 className='text-white text-[32px] uppercase font-normal md:text-[64px] md:tracking-wide'>
        Compromiso Ético
      </h1>

      {/* mobile */}
      <p className='md:hidden text-[20px] text-white w-[335px] uppercase my-2'>
        La protección de datos, la transparencia con el usuario y la sostenibilidad no son solo exigencias del mercado, sino también pilares fundamentales de Genera. Nos enfocamos en:
      </p>

      {/* web */}
      <p className='hidden md:block text-[20px] text-[#9A9A9A] w-[620px]  my-2'>
        La protección de datos, la transparencia con el usuario y la sostenibilidad no son solo exigencias del mercado, sino también pilares fundamentales de Genera. Nos enfocamos en:
      </p>



      <div className="my-[80px] flex flex-col lg:flex-row gap-4">
        {ethicalCommitments.map((ethical, i) => (
          <div
            key={i}
            className="border border-white text-white rounded-[30px] py-[40px] px-[35px] flex flex-col flex-1 min-h-[300px]  gap-10 md:gap-[40px]"
          >
            {/* Heading - Ensuring consistent alignment */}
            <h1 className="uppercase tracking-wide text-[24px] md:text-[32px] self-start">
              {ethical.title.split(" ").length === 2 ? (
                <>
                  {ethical.title.split(" ")[0]} <br /> {ethical.title.split(" ")[1]}
                </>
              ) : (
                <>
                  {ethical.title} <br /> {<div className='text-black'>Hello</div>}
                </>

              )}
            </h1>

            {/* Paragraph - Ensuring consistent axis alignment */}
            <p className="text-[20px] self-start">
              {ethical.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Banner2
