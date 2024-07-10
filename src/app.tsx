import {Header} from "./components/header.tsx"
import { SearchBar } from "./components/searchBar.tsx"
import { Navbar } from "./components/navbar.tsx"
import {HeroSect} from "./components/heroSect.tsx"
import { Banner } from "./components/banner.tsx"
import { HealthConcerns } from "./components/HealthConcerns.tsx"
import { HealthCheckOffer } from "./components/healthCheckOffer.tsx"
import {FeatureBrand} from "./components/featureBrand.tsx"
import { Products } from "./components/products.tsx"
export function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Navbar/>
      <HeroSect/>
      <Banner/>
      <HealthConcerns/>
      <HealthCheckOffer/>
      <FeatureBrand/>
      <Products/>
    </>
  )
}
