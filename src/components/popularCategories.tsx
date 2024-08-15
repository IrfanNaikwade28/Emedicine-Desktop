import { FeatureCard } from "./featureCard";
import bestOffer from "../assets/best_offers.png";
import skinCare from "../assets/skin_care.png"
export const PopularCategories = () => {
  return (
    <>
      <div className="flex justify-between pe-3">
        <span className="text-lg ps-10 ">Popular Categories</span>
        <button className="bg-red-500 text-white font-semibold text-xs rounded-sm px-2 py-1">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-flow-col gap-x-3 items-center w-full h-60 bg-white shadow-card my-5 px-12 overflow-x-scroll hideScroll mb-5">
        <FeatureCard logo={bestOffer} />
        <FeatureCard logo={skinCare} />
        <FeatureCard logo={bestOffer} />
        <FeatureCard logo={skinCare} />
        <FeatureCard logo={bestOffer} />
        <FeatureCard logo={skinCare} />
        <FeatureCard logo={bestOffer} />
        <FeatureCard logo={skinCare} />
        <FeatureCard logo={bestOffer} />
      </div>
    </>
  );
};
