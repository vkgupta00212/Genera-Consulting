"use client"

import React, { useState } from "react"

export const Body = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    help: "",
    message: "",
    terms: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, terms: e.target.checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission
  }

  return (
    <div className="relative  px-[20px] py-[100px] md:px-[40px] text-white">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black z-[-2]" />

      {/* Radial gradient in the bottom-right corner */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#e81d73_0%,_transparent_60%)] z-[-1]" />

      {/* Main container with max width */}
      <div className="relative max-w-[2000px] mx-auto gap-12">
        {/* Heading & Intro */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ¿LISTO PARA  <br className="md:hidden" />DAR EL <br className=" md:block" /> SIGUIENTE <br className="md:hidden"/> PASO?
        </h1>
        <p className="text-[#9A9A9A] mb-8">
          Para pedir información sobre Servicios de Consultoría <br className="hidden md:block" /> o Servicios Digitales.{" "}
          <a href="#" className="underline text-white">
            Consultar cada página.
          </a>
        </p>

        {/* Two-column grid: form on the left, contact info on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM COLUMN */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 01: Nombre */}
            <div className="rounded-[30px] border border-white p-5">
              <label htmlFor="name" className="flex gap-2 md:gap-4 items-center text-xl md:text-[32px] font-medium mb-2 ">
                <span className="font-semibold text-[24px] md:text-[36px]">01</span> ¿Cuál es tu nombre?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                required
              />
            </div>

            {/* 02: Correo electrónico */}
            <div className="rounded-[30px] border border-white p-5">
              <label htmlFor="email" className="flex gap-2 md:gap-4 text-xl md:text-[32px] font-medium mb-2">
                <span className="font-semibold text-[24px] md:text-[36px]">02</span> ¿Cuál es tu correo electrónico?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                required
              />
            </div>

            {/* 03: ¿En qué podemos ayudarte? */}
            <div className="rounded-[30px] border border-white p-5">
              <label htmlFor="help" className="flex gap-2  md:gap-4 text-xl md:text-[32px] font-medium mb-2">
                <span className="font-semibold text-[24px] md:text-[36px]">03</span> ¿En qué podemos ayudarte?
              </label>
              <input
                type="text"
                id="help"
                name="help"
                value={formData.help}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                required
              />
            </div>

            {/* 04: Mensaje */}
            <div className="rounded-[30px] border border-white p-5">
              <label htmlFor="message" className="flex gap-2 md:gap-4 items-center text-xl md:text-[32px] font-medium mb-2">
                <span className="font-semibold text-[24px] md:text-[36px]">04</span> Déjanos tu mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent focus:outline-none"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleCheckboxChange}
                className="appearance-none h-5 w-5 md:h-[26px] md:w-[26px] border-2 border-white rounded-[6px] bg-transparent focus:outline-none"
              />

              <label htmlFor="terms" className="text-sm md:text-[20px] ">
                Acepto las{" "}
                <a href="#" className="font-semibold">
                  Condiciones y Términos
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-black rounded-[64px] md:rounded-[72px] px-[40px] py-[20px] md:px-[46px]  md:py-[24px] font-bold flex justify-between items-center gap-[26px] md:gap-[32px] hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 md:h-[48px] md:w-[48px]"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <span className="text-xl md:text-[25px] font-bold">HABLEMOS</span>
            </button>
          </form>

          {/* CONTACT INFO COLUMN */}
          <div className="flex justify-center mt-10 lg:mt-0">
            <div className="space-y-[50px]">
              <section>
                <h3 className="text-[24px] font-normal leading-[100%] mb-[30px]">Datos de contacto</h3>
                <ul className="space-y-1 text-[#9A9A9A] text-xl px-4">
                  <li>info@genera.com</li>
                  <li>+34 123 45 65 78</li>
                </ul>
              </section>

              <section>
                <h3 className="text-[24px] font-normal leading-[100%] mb-[30px]">Detalles de la empresa</h3>
                <ul className="space-y-2 text-[#9A9A9A] text-xl px-4">
                  <li>Torre d'Ara Av. Cabrera 36, Planta Baja</li>
                  <li>08302 Mataró, Barcelona</li>
                  <li className="mt-4">Lunes a Viernes de 8.00h a 16.00h</li>
                </ul>
              </section>

              <section>
                <h3 className="text-[24px] font-normal leading-[100%] mb-[30px]">Redes sociales</h3>
                <ul className="space-y-2 text-[#9A9A9A] text-xl px-4">
                  {["Linkedin", "Instagram", "Youtube", "Facebook"].map((network) => (
                    <li key={network}>
                      <a href="#" className="hover:underline">
                        {network}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
