import { AyurvedaCard } from "./ayurvedaCard";
import haritaki from "../assets/haritaki.jpg"
import Karanja from "../assets/karanja.jpg"
import Banyan from "../assets/banyan.jpg"
import TeaTreeOil from "../assets/tea_tree_oil.jpg"

export const Ayurveda = () => {
  return (
    <>
      <div className="flex justify-between pe-3 mt-10">
        <span className="text-lg ps-10 ">Ayurveda</span>
        <button className="bg-red-500 text-white font-semibold text-xs rounded-sm px-2 py-1">
          SEE ALL
        </button>
      </div>
        <div className="grid grid-flow-col gap-x-5 items-center bg-white shadow-card-dark w-full h-80 mt-5 px-16 snap-x snap-mandatory overflow-x-scroll hideScroll">
            <AyurvedaCard cardImg={haritaki} title={"Chitrak Haritaki"} desc={"Chitrak Haritaki also called Chitraka Haritak Avaleha is an Ayurvedic formulation use..."} />
            <AyurvedaCard cardImg={Karanja} title={"Karanja"} desc={"Karanja is a medicinal herb mainly used for skin disorders. All parts of Karanja tree..."} />
            <AyurvedaCard cardImg={Banyan} title={"Banyan"} desc={"Banyan is considered a holy plant and is also known as the National tree of India. It..."} />
            <AyurvedaCard cardImg={TeaTreeOil} title={"TeaTreeOil"} desc={"Tea Tree oil is an essential oil with potent antiseptic property. It is beneficial fo..."} />
        </div>
    </>
  );
};
