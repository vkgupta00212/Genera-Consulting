import React from 'react'
import HeroSection from './sections/HeroSection'
// import Categories from './sections/Categories'
import SubsidyDetails from './sections/SubsidyDetails'
import TargetAudience from './sections/TargetAudience'
import KitDigitalSection from './sections/KitDigitalSection'
import ContactForm from './sections/ContactForm'
import FAQSection from './sections/FAQs'
import WorkWithUs from './sections/WorkWithUs'
import Header from './components/Header'
import ProductSection from './sections/ProductSection'
import HowItWorks from './sections/HowItWorks'
const LandingPageThree = ({ type = 'apple' }) => {
  return (
    <div className='2xl:container mx-auto'>
      <Header />
      <HeroSection type={type} />
      <KitDigitalSection type={type} />
      <ProductSection type={type} />
      <WorkWithUs type={type} />
      {/* <Categories /> */}
      <SubsidyDetails type={type} />
      <TargetAudience type={type} />
      <HowItWorks type={type} />
      <FAQSection type={type} />
      <ContactForm type={type} />

    </div>
  )
}

export default LandingPageThree
