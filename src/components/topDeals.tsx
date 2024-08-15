import { ProductCard } from "./productCard";
import prod1 from "../assets/saridon_tablet.png";
export const TopDeals = () => {
  return (
    <>
      <div className="flex justify-between pe-3 mt-10">
        <span className="text-lg ps-10">
          Top deals of pain relief and cough & cold
        </span>
        <button className="bg-red-500 text-white font-semibold text-xs rounded-sm px-2 py-1">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-flow-col gap-x-3 w-full h-80 bg-white shadow-card mt-5 mb-10 px-12 overflow-x-scroll hideScroll">
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Saridon Advance Tablet for 5 in 1 Pain Relief"}
          desc={"strip of 10 tablets"}
          deliveryInfo={"20 Aug"}
          actualPrice={"53"}
          discPrice={"48"}
          discount={"9"}
        />
      </div>
    </>
  );
};
