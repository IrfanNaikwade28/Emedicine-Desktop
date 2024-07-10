import banner from "../assets/diagnostics_2024-01_1706088937_1948x800+(27).png";
import sliderImage1 from "../assets/6e69b9f0-bc77-465b-8877-95784219853d_1715928287.png";
import sliderImage2 from "../assets/9de5fa29-8400-4ec9-8021-1173a6f511b4_1718967770.png";
import sliderImage3 from "../assets/1763c1af-4e32-47b8-ad86-e34b43805c69_1720427009.jpg";
export const HeroSect = () => {
    return (
        <div className="flex w-full h-52 overflow-hidden relative">
        <div className="flex w-9/12 h-full overflow-x-scroll hideScroll snap-x snap-mandatory">
            <img className="w-full h-full snap-center Slider" src={sliderImage1} alt="" />
            <img className="w-full h-full snap-center Slider" src={sliderImage2} alt="" />
            <img className="w-full h-full snap-center Slider" src={sliderImage3} alt="" />
        </div>
        <div className="banner w-4/12 h-full">
            <img className="w-full h-full" src={banner} alt="" />
        </div>
        <div className="dots absolute flex gap-2 bottom-5 left-1/3">
                <div className="dot w-2 h-2 rounded-full bg-gray-200"></div>
                <div className="dot w-2 h-2 rounded-full bg-gray-200"></div>
                <div className="dot w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
        </div>
    );
};
