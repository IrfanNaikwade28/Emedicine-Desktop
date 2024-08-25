import { LandingPageBanner } from "../landingPageBanner"
import { DoctorConsult } from "../doctorConsult"
import { DoctorConsultStatus } from "../doctorConsultStatus"
import { Testimonials } from "../testimonials"
import { ConsultFeatures } from "../consultFeatures"
import { FAQ } from "../FAQ"
import { DoctorPanel } from "../doctorPanel"
import { Footer } from "../footer"
export const Consult = () =>{
    return(
        <>
            <LandingPageBanner/>
            <DoctorConsult/>
            <DoctorConsultStatus/>
            <Testimonials/>
            <ConsultFeatures/>
            <FAQ/>
            <DoctorPanel/>
            <Footer/>
        </>
    )
}