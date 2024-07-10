import { ProductCard } from "./productCard";
import prod1 from "../assets/products/3ab53077d4c44f3c9fdbc83d5d3948b0.webp"
export const Products = () => {
  return (
    <>
      <div className="flex justify-between pe-3">
        <span className="text-lg ps-10">Collagen | supplement of the week
        </span>
        <button className="bg-[#ff6f61] text-white font-semibold text-xs rounded-sm px-2 py-1">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-flow-col w-full h-80 bg-white shadow-card mt-5 mb-10 px-12 overflow-x-scroll hideScroll">
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
        <ProductCard prodImg={prod1} title={"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet"} desc={"bottle of 30.0 tablets"} price={"Rs.1000"}/>
      </div>
    </>
  );
};
