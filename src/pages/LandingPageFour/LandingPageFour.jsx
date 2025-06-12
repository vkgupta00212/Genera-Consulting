import React from 'react'
import HeroSection from './sections/HeroSection'
import TargetAudience from './sections/TargetAudience'
import KitDigitalSection from './sections/KitDigitalSection'
import ContactForm from './sections/ContactForm'
import FAQSection from './sections/FAQs'
import WorkWithUs from './sections/WorkWithUs'
import Header from './components/Header'
import HowItWorks from './sections/HowItWorks'
import SubsidyDetails from '../LandingPageTwo/sections/SubsidyDetails'
import Features from './sections/Features'
import ProjectSlider from './sections/ProjectSlider'

const LandingPageFour = () => {
  return (
    <div className='2xl:container mx-auto'>
            <Header />
      <HeroSection />
      <KitDigitalSection />
      <WorkWithUs />
      <Features />
      <TargetAudience />
      <HowItWorks />
      <ProjectSlider  />
       <FAQSection />
            <ContactForm />
    </div>
  )
}

export default LandingPageFour
