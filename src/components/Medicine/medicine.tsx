import { SearchBar } from "../searchBar.tsx"
import { Navbar } from "../navbar.tsx"
import {HeroSect} from "../heroSect.tsx"
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
export const Medicine = () =>{
    return (
        <>
            <SearchBar/>
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
        </>
    )
}