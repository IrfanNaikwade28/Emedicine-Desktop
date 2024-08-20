import {HeroCarousel} from "./heroCarousel.tsx"
import banner from "../assets/diagnostics_2024-01_1706088937_1948x800+(27).png";
import sliderImage1 from "../assets/6e69b9f0-bc77-465b-8877-95784219853d_1715928287.png";
import sliderImage2 from "../assets/9de5fa29-8400-4ec9-8021-1173a6f511b4_1718967770.png";
import sliderImage3 from "../assets/1763c1af-4e32-47b8-ad86-e34b43805c69_1720427009.jpg";

export const HeroSect = () =>{
  const HeroImages = [sliderImage1, sliderImage2, sliderImage3,sliderImage2];

    return (
        <>
            <div className="flex h-52">
                <div className="w-full h-full basis-3/4">
                    <HeroCarousel HeroImages={HeroImages}/>
                </div>
                <div className="banner w-full h-full basis-2/5">
                    <img className="w-full h-full" src={banner} alt="" />
                </div>
            </div>
        </>
    )
}