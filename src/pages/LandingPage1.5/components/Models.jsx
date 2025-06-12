import React from 'react';
import i1 from '../../../assets/i_1.svg';
import i2 from '../../../assets/i_2.svg';
import i3 from '../../../assets/i_3.svg';
import i4 from '../../../assets/i_4.svg';

const modelData = {
  apple: {
    MacBookAir13: [
      {
        name: 'MacBook Air 15”',
        image: i1,
        description: 'Apple MacBook Air (2022), 13.6" Retina, Chip M2 de Apple, GPU 10 Núcleos, 8 GB, 512 GB SSD, macOS, Teclado Magic Keyboard Touch ID, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14”',
        image: i1,
        description: 'Apple MacBook Air (2022), 13.6" Retina, Chip M2 de Apple, GPU 10 Núcleos, 8 GB, 512 GB SSD, macOS, Teclado Magic Keyboard Touch ID, Gris Espacial',
      },
      {
        name: 'MacBook Pro 16”',
        image: i1,
        description: 'Apple MacBook Air (2023), 14" Retina, Chip M3 de Apple, GPU 10 Núcleos, 16 GB, 1 TB SSD, macOS, Teclado Magic Keyboard Touch ID, Gris Espacial',
      },
    ],
    MacBookPro14: [
      {
        name: 'MacBook Pro 13”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 15”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 16”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
    MacBookAir15: [
      {
        name: 'MacBook Air 15”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 16”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
    MacBookPro16: [
      {
        name: 'MacBook Air 13”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Air 15”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
  },
  hp:{
    ZHP_ZbookPowerG11: [
      {
        name: 'Galaxy Book4 15”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Air 13”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
    HPProOne440G9: [
      {
        name: 'Galaxy Book4 15',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Air 13”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
    SobremesaHPProSmall400G9_MonitorHP_E24mvG4: [
      {
        name: 'Galaxy Book4 15”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Air 13”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
    HPEliteBook665G11: [
      
    ],
  },
  samsung:{
    GalaxyBook415 : [
      {
        name: 'Galaxy Book4 Pro 14”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Air 13”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14””',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
    GalaxyBook4Pro14: [
      {
        name: 'Galaxy Book4 15',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Air 13”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M3 Max, 32GB RAM, 1TB SSD, macOS, Pantalla Liquid Retina XDR, Gris Espacial',
      },
      {
        name: 'MacBook Pro 14”',
        image: i2,
        description: 'Apple MacBook Pro 14” con Chip M2, 16GB RAM, 512GB SSD, macOS, Pantalla Liquid Retina XDR, Plata',
      },
    ],
  }
};

const Models = ({ baseModel = 'apple', model = 'MacBookAir13' }) => {
  const models =
  modelData[baseModel]?.[model] ||[{
    name: "Modelo no disponible",
    image: "",
    description: "No hay información disponible para este modelo.",
  }]

  return (
    <div className='px-5 lg:px-[40px] py-[80px]'>
      <div>
        <h1 className='text-3xl md:text-[40px] uppercase'>MODELOS</h1>
      </div>
   
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5'>
        {models.map((item, index) => (
          <div key={index} className='border-2 hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 rounded-[30px] py-[55px] px-[30px] text-center shadow-lg hover:shadow-sm'>
            <img loading='lazy' src={item.image} alt={item.name} className='mx-auto w-64 h-64 object-contain mb-4' />
            <h2 className='text-2xl font-medium text-start mt-14'>{item.name}</h2>
            <p className='text-[16px] text-[#525252] mt-2 text-start'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
