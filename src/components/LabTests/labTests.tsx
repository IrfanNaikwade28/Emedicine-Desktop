import { SearchBar } from "../searchBar.tsx"
import { LabTestHero } from "../labTestHero.tsx"
import { PopularLabTest } from "../popularLabTest.tsx"
import { PopularHealthCheckup } from "../popularHealthCheckup.tsx"
import { QualityInfoSect } from "../qualityInfoSect.tsx"
export const LabTests = () =>{
    return(
        <>
            <SearchBar offer="Upto 50% off"/>
            <LabTestHero/>
            <PopularLabTest/>
            <PopularHealthCheckup/>
            <QualityInfoSect/>

        </>
    )
}