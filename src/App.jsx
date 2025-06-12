import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPageOne from './pages/LandigPageOne/LandingPageOne'
import LandingPageTwo from './pages/LandingPageTwo/LandingPageTwo'
import LandingPageThree from './pages/LandingPageThree/LandingPageThree'
import LandingPageFour from './pages/LandingPageFour/LandingPageFour'
import { Proto5Phase2 } from './pages/LandingPage2.5/Prototype5Phase2'
import { Prototype8 } from './pages/LandingPage1.8/Prototype8Phase1'
import { Proto1Phase2 } from './pages/LandingPage2.1/Prototype1Phase2'
import Prototype2 from './pages/LandingPage2.2/Prototype2'
import Prototype3 from './pages/LandingPage2.3/Prototype3'
import Prototype4 from './pages/LandingPage2.4/Prototype4'
import Prototype5 from './pages/LandingPage1.5/Prototype5'
import Prototype6 from './pages/LandingPage1.6/Prototype6'
import Prototype7 from './pages/LandingPage1.7/Prototype7'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Proto1Phase2 />} />
          <Route path="/digital" element={<LandingPageOne />} />
          <Route path="/digital/ordenadores" element={<LandingPageTwo />} />
          {/* Apple */}
          <Route path="/digital/ordenadores/apple" element={<LandingPageThree type='apple' />} />
          <Route path="/digital/ordenadores/apple/MacBookAir13" element={<Prototype5 baseModel='apple' model='MacBookAir13' />} />
          <Route path="/digital/ordenadores/apple/MacBookAir15" element={<Prototype5 baseModel='apple' model='MacBookAir15' />} />
          <Route path="/digital/ordenadores/apple/MacBookPro14" element={<Prototype5 baseModel='apple' model='MacBookPro14' />} />
          <Route path="/digital/ordenadores/apple/MacBookPro16" element={<Prototype5 baseModel='apple' model='MacBookPro16' />} />

          {/* Samsung */}
          <Route path="/digital/ordenadores/samsung" element={<LandingPageThree type='samsung' />} />
          <Route path="/digital/ordenadores/samsung/GalaxyBook415" element={<Prototype5 baseModel='samsung' model='GalaxyBook415' />} />
          <Route path="/digital/ordenadores/samsung/GalaxyBook4Pro14" element={<Prototype5 baseModel='samsung' model='GalaxyBook4Pro14' />} />

          {/* HP */}
          <Route path="/digital/ordenadores/hp" element={<LandingPageThree type='hp' />} />
          <Route path="/digital/ordenadores/hp/ZHP-ZbookPowerG11" element={<Prototype5 baseModel='hp' model='ZHP_ZbookPowerG11' />} />
          <Route path="/digital/ordenadores/hp/HPProOne440G9" element={<Prototype5 baseModel='hp' model='HPProOne440G9' />} />
          <Route path="/digital/ordenadores/hp/SobremesaHPProSmall400G9+MonitorHP+E24mvG4" element={<Prototype5 baseModel='hp' model='SobremesaHPProSmall400G9_MonitorHP_E24mvG4' />} />
          <Route path="/digital/ordenadores/hp/HPEliteBook665G11" element={<Prototype5 baseModel='hp' model='HPEliteBook665G11' />} />

          {/* kitdigital */}
          <Route path="/digital/kitdigital" element={<LandingPageTwo />} />
          <Route path="/digital/kitdigital/sitioweb" element={<LandingPageFour />} />
          <Route path="/digital/kitdigital/sitioweb/PortfolioVisual" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/sitioweb/ExperienciasInolvidables" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/sitioweb/TransformaciónNutricional" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/sitioweb/Reviviendo+Clásicos" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/sitioweb/PotenciatuMarca" element={<Prototype6 />} />

          {/* Presencia */}
          <Route path="/digital/PresenciaAvanzadaInternet" element={<LandingPageFour />} />

          {/* Comercio electrónico */}
          <Route path="/digital/comercioelectrónico" element={<LandingPageFour />} />

          <Route path="/digital/kitdigital/comercioelectrónico/casodeexito-modaplayera" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/comercioelectrónico/casodeexito-iluminandoelHogar" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/comercioelectrónico/casodeexito-Destellosenmoviemiento" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/comercioelectrónico/casodeexito-saboresbrillantes" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/comercioelectrónico" element={<Prototype6 />} />

          {/* redessociales */}
          <Route path="/digital/kitdigital/redessociales" element={<LandingPageFour />} />
          <Route path="/digital/kitdigital/redessociales/casodeexito1" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/redessociales/casodeexito2" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/redessociales/casodeexito3" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/redessociales/casodeexito4" element={<Prototype6 />} />
          <Route path="/digital/kitdigital/redessociales/casodeexito5" element={<Prototype6 />} />

          {/* gestióndeclientes */}
          <Route path="/digital/kitdigital/gestióndeclientes" element={<LandingPageFour />} />
          <Route path="/digital/kitdigital/gestióndeprocesos" element={<LandingPageFour />} />

          {/* Serviciosdigitales */}
          <Route path="/digital/Serviciosdigitales" element={<LandingPageTwo />} />
          {/* Serviciosdigitales/solucionesweb */}
          <Route path="/digital/Serviciosdigitales/solucionesweb" element={<LandingPageFour />} />

          {/* Serviciosdigitales/solucionesseo */}
          <Route path="/digital/Serviciosdigitales/solucionesseo" element={<LandingPageFour />} />

          {/* Serviciosdigitales/solucionesredessociales */}
          <Route path="/digital/Serviciosdigitales/solucionesredessociales" element={<LandingPageFour />} />

          {/* consulting */}
          <Route path="/consulting" element={<Prototype4 />} />

          {/* consulting/privateconsulting */}
          <Route path="/consulting/privateconsulting" element={<Proto5Phase2 />} />

          {/* lab */}
          <Route path="/lab" element={<Prototype2 />} />
          {/* lab/nuestrosproductos */}
          <Route path="/lab/nuestrosproductos" element={<Prototype3 />} />

          {/* nosotros */}
          <Route path="/nosotros" element={<Prototype7 />} />

          {/* contcto */}
          <Route path="/contcto" element={<Prototype8 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
