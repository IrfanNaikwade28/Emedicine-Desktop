import { ProductCard } from "./productCard";
import prod1 from "../assets/dettol_soap.png";
export const DealsOfTheDay = () => {
  return (
    <>
      <div className="flex justify-between pe-3 mt-10">
        <span className="text-lg ps-10">
          Deals of the day
        </span>
        <button className="bg-red-500 text-white font-semibold text-xs rounded-sm px-2 py-1">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-flow-col gap-x-3 w-full h-80 bg-white shadow-card mt-5 mb-10 px-12 overflow-x-scroll hideScroll">
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
        <ProductCard
          prodImg={prod1}
          title={"Dettol Original Germ Defence Bathing Soap Bar (150gm Each)"}
          desc={"combo pack of 5 soaps"}
          deliveryInfo={"22 Aug"}
          actualPrice={"280"}
          discPrice={"266"}
          discount={"5"}
        />
      </div>
    </>
  );
};
