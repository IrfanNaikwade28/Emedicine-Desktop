import {FeatureCard} from "./featureCard"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
export const FeatureBrand = () => {
  return (
    <>
      <div className="flex justify-between pe-3">
        <span className="text-lg ps-10">Featured brands</span>
        <button className="bg-[#ff6f61] text-white font-semibold text-xs rounded-sm px-2 py-1">SEE ALL</button>
      </div>
      <div className="grid grid-flow-col w-full h-56 bg-white shadow-card mt-5 mb-10 px-12 overflow-x-scroll hideScroll">
            <FeatureCard logo={logo1}/>
            <FeatureCard logo={logo2}/>
            <FeatureCard logo={logo3}/>
            <FeatureCard logo={logo4}/>
            <FeatureCard logo={logo5}/>
            <FeatureCard logo={logo6}/>
            <FeatureCard logo={logo4}/>
            <FeatureCard logo={logo2}/>
            <FeatureCard logo={logo1}/>
      </div>
    </>
  );
};
