import React from 'react'
import HeroSection from './sections/HeroSection'
import Categories from './sections/Categories'
import SubsidyDetails from './sections/SubsidyDetails'
import TargetAudience from './sections/TargetAudience'
import HowItWorks from './sections/HowItWorks'
import StatsSection from './sections/StatsSection'
import KitDigitalSection from './sections/KitDigitalSection'
import ContactForm from './sections/ContactForm'
import FAQSection from './sections/FAQs'
import WorkWithUs from './sections/WorkWithUs'
import Header from './components/Header'
const LandingPageTwo = () => {
  return (
    <div className='2xl:container mx-auto'>
      <Header />
      <HeroSection />
      <KitDigitalSection />
      <Categories />
      <WorkWithUs />
      <SubsidyDetails />
      <TargetAudience />
      <HowItWorks />
      <StatsSection />
       <FAQSection />
            <ContactForm />
      
    </div>
  )
}

export default LandingPageTwo
