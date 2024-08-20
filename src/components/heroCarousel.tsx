import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type HeroCarouselProps = {
  HeroImages:string[];
}
export const HeroCarousel:FunctionComponent<HeroCarouselProps> = (props) => {
  const [sliderIdx, setSliderIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIdx((prevIndex) =>
        prevIndex === props.HeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderIdx]);

  return (
    <div className="flex w-full h-full overflow-hidden relative">
      <div className="flex w-full h-full overflow-x-scroll hideScroll snap-x snap-mandatory relative">
        {props.HeroImages.map((Image, index) => (
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
      <div className="dots absolute z-30 bottom-3 w-full">
        <div className="flex justify-center gap-x-4">
          {props.HeroImages.map((_, index) => (
            <div key={index} className={`dot size-2 rounded-full ${sliderIdx === index?"bg-red-500":"bg-gray-300"}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
