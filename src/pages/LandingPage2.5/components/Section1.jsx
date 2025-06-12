export const Section1 = () => {


    return(
        <div className="bg-black px-[20px] md:px-[40px]">
             <div className=" flex justify-center ">
      {/* 
        A div is used instead of a span so we can apply
        max-width more cleanly and keep the text together.
      */}
      <div className="w-full text-white text-4xl text-left bg-[#111111] py-[100px] px-[10px] rounded-[30px]">
        {/* Preserve line breaks exactly as in your screenshot */}
        <span className="hidden md:block">
         <p className="flex justify-center">Servicio exclusivo de Genera Consulting para organizaciones </p> 
          <p className="flex justify-center">que buscan personalización y confidencialidad. Consultores </p>
          <p className="flex justify-center">sénior y metodologías avanzadas para estrategias </p>
          <p className="flex justify-center">adaptadas a proyectos de alto impacto.</p>
        </span>

        <p className="text-white text-center leading-[100%] tracking-wide font-medium text-2xl md:hidden ">
        Servicio exclusivo de Genera Consulting para organizaciones que buscan personalización y confidencialidad. Consultores sénior y metodologías avanzadas para estrategias adaptadas a proyectos de alto impacto.
        </p>
      </div>
    </div>


        <div>
            
        </div>
        </div>
    )
}