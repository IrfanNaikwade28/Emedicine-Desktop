import { FeatureCard } from "./featureCard";
import skinCare from "../assets/products/skin_care.jpg"
import hairCare from "../assets/products/hair_care.jpg"
import oralCare from "../assets/products/oral_care.jpg"
import elderCare from "../assets/products/elderly_care.jpg"
import babyCare from "../assets/products/baby_care.jpg"
import womenCare from "../assets/products/women_care.jpg"
export const PersonalCare = () => {
  return (
    <>
      <div className="flex justify-between pe-3">
        <span className="text-lg ps-10">Personal Care</span>
      </div>
      <div className="grid grid-flow-col w-full h-60 bg-white shadow-card mt-5 mb-10 px-12 overflow-x-scroll hideScroll">
            <FeatureCard logo={skinCare}/>
            <FeatureCard logo={hairCare}/>
            <FeatureCard logo={oralCare}/>
            <FeatureCard logo={elderCare}/>
            <FeatureCard logo={babyCare}/>
            <FeatureCard logo={womenCare}/>
            <FeatureCard logo={skinCare}/>
            <FeatureCard logo={oralCare}/>
      </div>
    </>
  );
};
