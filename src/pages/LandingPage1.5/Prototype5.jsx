import React from 'react'
import Navbar from './components/Navbar'
import SecondaryNavigation from './components/SecondaryNavigation'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Models from './components/Models'
import Footer from './components/Footer'
import Contact from './components/Contact'
                                                      
function Prototype5({ baseModel, model }) {
  return (
    <>
      <Navbar />
      <SecondaryNavigation />
      <Hero baseModel={baseModel} model={model} />
      <Banner baseModel={baseModel} model={model} />
      <Models baseModel={baseModel} model={model} />
      <Contact />
      <Footer />
    </>
  )
}

export default Prototype5
