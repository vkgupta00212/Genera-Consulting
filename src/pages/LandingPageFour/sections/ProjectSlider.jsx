import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageOne from "../../../assets/landing_page_four_card_two.png";
import imageTwo from "../../../assets/landing_page_four_card_one.png";

const sliderData = [
  {
    image: imageOne,
    title: "Portfolio Visual",
    description: "Fotografía y Video Profesional Nicolas Cabrera Gil",
    link: "https://nicolascabreragil.com/"
  },
  {
    image: imageTwo,
    title: "Experiencias Inolvidables",
    description: "Marry me in Barcelona ERJOKI NAUS, S.L",
    link: "https://marrymeinbarcelona.com/" 
  },
  {
    image: imageOne,
    title: "Transformación Nutricional ",
    description: " Salud y Sabor Digital Marta Arzúa",
    link: "https://martarzuanutricion.com/" 
  },
  {
    image: imageTwo,
    title: "Reviviendo Clásicos",
    description: "Innovación Arcade con FPGA MIKI SAITO",
    link: "https://jotego.digital/"
  },
  {
    image: imageTwo,
    title: "Estrategias Digitales que Elevan tu Marca",
    description: "Team Galaga",
    link: "https://galagaagency.digital/"
  },
];

const ProjectSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (sliderRef.current) {
        if (e.deltaY > 0) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel);

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    draggable: true,
    swipe: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-1%",
    responsive: [
      // ... (keep your existing responsive settings)
    ],
  };

  const handleSlideClick = (link) => {
    if (link) {
      window.open(link, "_blank"); // Opens in new tab
      // Alternatively: window.location.href = link; // Opens in same tab
    }
  };

  return (
    <div className="mx-auto project-slider h-[70vh] lg:h-[100vh] py-20 overflow-hidden">
      <h2 className="text-2xl md:text-4xl uppercase mb-4 md:mb-10 lg:mb-12 lg:pl-4">Casos de Éxito</h2>
      <Slider {...settings} ref={sliderRef}>
        {sliderData.map((item, index) => (
          <div key={index} className="px-3 py-12">
            <div
              onClick={() => handleSlideClick(item.link)}
              className="relative group rounded-4xl overflow-hidden shadow-lg sm:w-[180px] sm:h-[180px] w-auto md:w-[280px] md:h-[370px]
               h-[260px] cursor-pointer 
              transition-all duration-500 hover:-translate-y-0 border border-black
              md:hover:scale-125 hover:scale-115"
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
                <div
                  className="absolute bottom-5 left-5 text-white text-xl font-semibold transition-opacity duration-500 
      group-hover:opacity-0"
                >
                  {item.title}
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 w-full py-0 md:py-2 md:h-[190px] h-[150px] bg-white px-2 md:px-6 opacity-0 transition-all duration-500 
    group-hover:opacity-100 flex flex-col justify-center items-start"
              >
                <h2 className="font-semibold text-sm sm:text-[0.8em] mt-1 xl:mt-2 md:text-xl">{item.title}</h2>
                <p className="text-gray-600 sm:text-xs text-[0.6em] md:text-sm mt-1 md:mt-2 md:pb-2">{item.description}</p>
                {/* Optional: Add a visible link/button */}
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-600 hover:underline text-xs md:text-sm"
                  onClick={(e) => e.stopPropagation()} // Prevent triggering the parent div's click
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;