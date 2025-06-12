import  Footer  from "../../pages/LandingPage2.5/components/Footer"
import  Header  from "../../pages/LandingPage2.5/components/Header"
import Frame186 from "../../assets/Frame 186.svg"
import { Body } from "./components/Body"

export const Prototype8 = () => {


    return (
        <div
            style={{
                backgroundImage: `url(${Frame186})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <Header />
            <Body />
            <Footer />

        </div>
    )
}