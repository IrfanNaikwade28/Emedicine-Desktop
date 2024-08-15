import banner from "../assets/diagnostics_2024-01_1706088937_1948x800+(27).png";
import sliderImage1 from "../assets/6e69b9f0-bc77-465b-8877-95784219853d_1715928287.png";
import sliderImage2 from "../assets/9de5fa29-8400-4ec9-8021-1173a6f511b4_1718967770.png";
import sliderImage3 from "../assets/1763c1af-4e32-47b8-ad86-e34b43805c69_1720427009.jpg";
import { useEffect, useState } from "preact/hooks";
export const HeroSect = () => {
  const HeroImages = [sliderImage1, sliderImage2, sliderImage3,sliderImage2];
  const [sliderIdx, setSliderIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIdx((prevIndex) =>
        prevIndex === HeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderIdx]);

  return (
    <div className="flex w-full h-52 overflow-hidden relative">
      <div className="flex w-9/12 h-full overflow-x-scroll hideScroll snap-x snap-mandatory relative">
        {HeroImages.map((Image, index) => (
          <img
            key={index}
            className={`w-full h-full absolute transition-opacity duration-500 ease-in-out transform ${
              index === sliderIdx ? "block slide-in z-20" : "hidden"
            }`}
            src={Image}
            alt=""
          />
        ))}
      </div>
      <div className="banner w-4/12 h-full">
        <img className="w-full h-full" src={banner} alt="" />
      </div>
      <div className="dots absolute z-30 flex gap-x-4 bottom-5 left-1/3">
        {HeroImages.map((_, index) => (
          <div key={index} className={`dot size-2 rounded-full ${sliderIdx === index?"bg-red-500":"bg-gray-300"}`}></div>
        ))}
      </div>
    </div>
  );
};
