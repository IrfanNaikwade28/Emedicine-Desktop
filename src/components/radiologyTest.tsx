import { OfferCard } from "./offerCard"
export const RadiologyTest = () => {
    return(
        <>
       <div className="flex justify-between pe-3">
        <span className="text-lg ps-10 ">Radiology Tests | Up to 60% off</span>
        <button className="bg-red-500 text-white font-semibold text-xs rounded-sm px-2 py-1">SEE ALL</button>
       </div>
        <div className="grid grid-flow-col gap-x-3 items-center w-full h-40 bg-white shadow-card my-5 px-12 overflow-x-scroll hideScroll mb-5">
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
            <OfferCard title={"Ultrasound Whole Abdomen"} discountPrice={"700"} actualPrice={"1400"} discountRate={"50"} />
        </div>
        </>
    )
}