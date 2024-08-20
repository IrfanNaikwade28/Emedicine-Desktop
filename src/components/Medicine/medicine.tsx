import { SearchBar } from "../searchBar.tsx"
import { Navbar } from "../navbar.tsx"
import { HeroSect } from "../heroSect.tsx"
import { Banner } from "../banner.tsx"
import { HealthConcerns } from "../HealthConcerns.tsx"
import { HealthCheckOffer } from "../healthCheckOffer.tsx"
import {FeatureBrand} from "../featureBrand.tsx"
import { Supplements } from "../supplements.tsx"
import { PersonalCare } from "../personalCare.tsx"
import { PathoTest } from "../pathoTest.tsx"
import { TrendingProducts } from "../trendingProducts.tsx"
import { PopularCategories } from "../popularCategories.tsx"
import { TopDeals } from "../topDeals.tsx"
import { RadiologyTest } from "../radiologyTest.tsx"
import { DealsOfTheDay } from "../dealsOfTheDay.tsx"
import { AyurvedaBrands } from "../ayurvedaBrands.tsx"
import { HomeopathyProd } from "../homeopathyProd.tsx"
import { Ayurveda } from "../ayurveda.tsx"
import { Footer } from "../footer.tsx"
export const Medicine = () =>{
    return (
        <>
            <SearchBar offer="QUICK BUY! Get 15% off on medicines*"/>
            <Navbar/>
            <HeroSect/>
            <Banner/>
            <HealthConcerns/>
            <HealthCheckOffer/>
            <FeatureBrand/>
            <Supplements/>
            <PersonalCare/>
            <PathoTest/>
            <TrendingProducts/>
            <PopularCategories/>
            <TopDeals/>
            <RadiologyTest/>
            <DealsOfTheDay/>
            <AyurvedaBrands/>
            <TopDeals/>
            <HomeopathyProd/>
            <AyurvedaBrands/>
            <Ayurveda/>
            <Footer/>
        </>
    )
}