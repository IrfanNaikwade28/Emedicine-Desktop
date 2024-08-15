import { ProductCard } from "./productCard";
import prod1 from "../assets/Platinum_dilution.jpg";

export const HomeopathyProd = () => {
  return (
    <>
      <div className="flex justify-between pe-3 mt-10">
        <span className="text-lg ps-10">Homeopathy women's health</span>
        <button className="bg-red-500 text-white font-semibold text-xs rounded-sm px-2 py-1">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-flow-col gap-x-3 w-full h-80 bg-white shadow-card mt-5 mb-10 px-12 overflow-x-scroll hideScroll">
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"bottle of 10.0 ml Dilution"}
          deliveryInfo={"Sat, 17 Aug"}
          actualPrice={"240"}
          discPrice={"180"}
          discount={"25"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
        <ProductCard
          prodImg={prod1}
          title={
            "ADEL Platinum Met. Dilution 200"
          }
          desc={"box of 1.0 Unit"}
          deliveryInfo={"18 Aug"}
          actualPrice={"1570"}
          discPrice={"1167"}
          discount={"16"}
        />
      </div>
    </>
  );
};
