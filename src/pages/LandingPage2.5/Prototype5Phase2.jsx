import  Footer  from "./components/Footer"
import { Form } from "./components/Form"
import { GlassmorphicCards } from "./components/GlassmorphicCard"
import  Header  from "./components/Header"
import { Hero } from "./components/Hero"
import { PrivateConsulting } from "./components/PrivateConsulting"
import { Section1 } from "./components/Section1"
import { BenefitsAndFeatures } from "./components/BenefitSection"
import Section2 from "./components/Section2"

export const Proto5Phase2 = () => {


    return (
        <div className="bg-black">
            <Header />
            <Hero />
            <Section1 />
            <GlassmorphicCards />
            <Section2/>
             < BenefitsAndFeatures />
            <PrivateConsulting />
            <Form />
           <Footer />
        </div>
    )
}