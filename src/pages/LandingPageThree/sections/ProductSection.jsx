import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import macOne from "../../../assets/mac_one.png";
import macTwo from "../../../assets/mac_two.png";
import macThree from "../../../assets/mac_three.png";
import macFour from "../../../assets/mac_four.png";
import { useNavigate } from "react-router-dom";

const getProducts = (type) => {
  const brandProducts = {
    apple: [
      {
        id: "MacBookAir13",
        name: "MacBook Air de 13\"",
        image: macOne,
        description: "MacBook Air de 13\", Chip M2 de Apple, 8 GB RAM, 256 GB SSD, macOS, Magic Keyboard con Touch ID, Pantalla Retina",
      },
      {
        id: "MacBookAir15",
        name: "MacBook Air de 15\"",
        image: macTwo,
        description: "MacBook Air de 15\", Chip M2 de Apple, 8 GB RAM, 512 GB SSD, macOS, Magic Keyboard con Touch ID, Pantalla Retina",
      },
      {
        id: "MacBookPro14",
        name: "MacBook Pro de 14\"",
        image: macThree,
        description: "MacBook Pro de 14\", Chip M2 Pro, 16 GB RAM, 512 GB SSD, macOS, Pantalla Liquid Retina XDR",
      },
      {
        id: "MacBookPro16",
        name: "MacBook Pro de 16\"",
        image: macFour,
        description: "MacBook Pro de 16\", Chip M2 Max, 32 GB RAM, 1 TB SSD, macOS, Pantalla Liquid Retina XDR",
      },
    ],
    samsung: [
      {
        id: "GalaxyBook415",
        name: "Galaxy Book4 15",
        image: macOne,
        description: "Galaxy Book4 15\", Intel Core Ultra 7, 16 GB RAM, 512 GB SSD, Windows 11, Pantalla AMOLED",
      },
      {
        id: "GalaxyBook4Pro14",
        name: "Galaxy Book4 Pro 14",
        image: macTwo,
        description: "Galaxy Book4 Pro 14\", Intel Core Ultra 7, 16 GB RAM, 1 TB SSD, Windows 11, Pantalla Dynamic AMOLED 2X",
      },
      // {
      //   id: "GalaxyBook415",  // Repeated to maintain 4 items grid layout
      //   name: "Galaxy Book4 15",
      //   image: macThree,
      //   description: "Galaxy Book4 15\", Intel Core Ultra 5, 16 GB RAM, 512 GB SSD, Windows 11, Pantalla AMOLED",
      // },
      // {
      //   id: "GalaxyBook4Pro14",  // Repeated to maintain 4 items grid layout
      //   name: "Galaxy Book4 Pro 14",
      //   image: macFour,
      //   description: "Galaxy Book4 Pro 14\", Intel Core Ultra 7, 32 GB RAM, 1 TB SSD, Windows 11, Pantalla Dynamic AMOLED 2X",
      // },
    ],
    hp: [
      {
        id: "ZHP-ZbookPowerG11",
        name: "Z by HP – Zbook Power G11",
        image: macOne,
        description: "Z by HP Zbook Power G11, Intel Core i9, NVIDIA RTX A2000, 32 GB RAM, 1 TB SSD, Windows 11 Pro",
      },
      {
        id: "HPProOne440G9",
        name: "HP ProOne 440 G9",
        image: macTwo,
        description: "HP ProOne 440 G9, All-in-One, Intel Core i7, 16 GB RAM, 512 GB SSD, Windows 11 Pro, Pantalla 23.8\" FHD",
      },
      {
        id: "SobremesaHPProSmall400G9+MonitorHP+E24mvG4",
        name: "Sobremesa HP Pro Small 400 G9 + Monitor HP E24mv G4",
        image: macThree,
        description: "HP Pro Small 400 G9, Intel Core i5, 16 GB RAM, 512 GB SSD, Windows 11 Pro + Monitor HP E24mv G4 23.8\" FHD",
      },
      {
        id: "HPEliteBook665G11",
        name: "HP EliteBook 665 G11",
        image: macFour,
        description: "HP EliteBook 665 G11, AMD Ryzen 7, 16 GB RAM, 512 GB SSD, Windows 11 Pro, Pantalla 15.6\" FHD",
      },
    ]
  };

  return brandProducts[type] || brandProducts.apple;
};

const ProductSection = ({ type = 'apple' }) => {
  const products = getProducts(type);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`${product.id}`);
  };

  // Slick settings for mobile view
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl ml-4 md:text-5xl font-light md:px-6 text-left mb-16">MODELOS</h2>

      {/* Mobile View (Horizontal Scroll) */}
      <div className="block md:hidden px-4">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div onClick={() => handleProductClick(product)} key={index} className="p-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border transition-all duration-500 hover:bg-black hover:text-white">
                <div className="overflow-hidden rounded-lg mb-8">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop View (Grid Layout) */}
      <div className="hidden md:grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {products.map((product, index) => (
          <div onClick={() => handleProductClick(product)} key={index} className="bg-white p-6 rounded-2xl shadow-md border transition-all duration-500 hover:bg-black hover:scale-105 hover:text-white">
            <div className="overflow-hidden rounded-lg mb-12 mt-12 md:mb-24">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110" />
            </div>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm mt-4 text-[#969696]">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
