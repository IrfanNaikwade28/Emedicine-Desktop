import { OfferCard } from "./offerCard"
export const PathoTest = () => {
    return(
        <>
       <div className="flex justify-between pe-3">
        <span className="text-lg ps-10 ">Pathology Tests | Up to 70% off</span>
        <button className="bg-red-500 text-white font-semibold text-xs rounded-sm px-2 py-1">SEE ALL</button>
       </div>
        <div className="grid grid-flow-col gap-x-3 items-center w-full h-40 bg-white shadow-card my-5 px-12 overflow-x-scroll hideScroll mb-5">
            <OfferCard title={"LFT (Liver Function Test)"} discountPrice={"300"} actualPrice={"400"} discountRate={"25"} />
            <OfferCard title={"LFT (Liver Function Test)"} discountPrice={"300"} actualPrice={"400"} discountRate={"25"} />
            <OfferCard title={"LFT (Liver Function Test)"} discountPrice={"300"} actualPrice={"400"} discountRate={"25"} />
            <OfferCard title={"LFT (Liver Function Test)"} discountPrice={"300"} actualPrice={"400"} discountRate={"25"} />
            <OfferCard title={"LFT (Liver Function Test)"} discountPrice={"300"} actualPrice={"400"} discountRate={"25"} />
            <OfferCard title={"LFT (Liver Function Test)"} discountPrice={"300"} actualPrice={"400"} discountRate={"25"} />
            <OfferCard title={"LFT (Liver Function Test)"} discountPrice={"300"} actualPrice={"400"} discountRate={"25"} />
        </div>
        </>
    )
}