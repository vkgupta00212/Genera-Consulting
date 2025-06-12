import React from 'react'
import ContactForm from './sections/ContactForm'
import FAQSection from './sections/FAQs'
import ServicesSection from './sections/ServiceSection'
import WorkWithUs from './sections/WorkWithUs'
import DigitalizationOptions from './sections/DigitalizationOptions'
import HeroSection from './sections/HeroSection'
import Brand from './sections/Brand'

const LandingPageOne = () => {
  return (
    <div className='2xl:container mx-auto'>
      <HeroSection />
      <DigitalizationOptions />
      <WorkWithUs />
      <ServicesSection />
      <Brand />
      <FAQSection />
      <ContactForm />
    </div>
  )
}

export default LandingPageOne
