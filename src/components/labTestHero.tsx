import { HeroCarousel } from "./heroCarousel"
import Image1 from "../assets/banner1.png"
import Image2 from "../assets/a4805cd1-91f2-49a0-92f4-ea02e0f4b12d_1721367340.png"
import Image3 from "../assets/98503b87-dd2e-4d92-903b-c6ae4890bd5f_1721396402.png"
import icon1 from "../assets/icons/safe.png"
import icon2 from "../assets/icons/Lab_delivery_2x.png"
import icon3 from "../assets/icons/Lab_online_report_2x.png"
import icon4 from "../assets/icons/Lab_doctor_2x.png"
import icon5 from "../assets/icons/Lab_offer_2x.png"
export const LabTestHero = () => {
    const HeroImages = [Image1,Image2,Image3]
    return(
        <>
            <div className="bg-gray-100 flex justify-center gap-x-10 pt-10 h-[50vh]">
                <div className="w-1/3 h-52 rounded-xl object-contain">
                    <HeroCarousel HeroImages={HeroImages}/>
                </div>
                <div className="flex flex-col gap-y-3 text-gray-800">
                    <div className="text-2xl font-semibold">Lab Test From The Comfort Of Your Home</div>
                    <div className="text-sm font-medium">Trusted by 40 Lakhs+ satisfied customers | 1 Crore+ lab tests booked</div>
                    <div className="flex gap-x-5 mt-3">
                        <div className="icon w-16 flex flex-col items-center gap-y-3">
                            <img className="w-10" src={icon1} alt="" />
                            <div className="text-exs text-wrap text-center tracking-wide font-medium">
                            100% Safe & Hygienic
                            </div>
                        </div>
                        <div className="w-[1px] h-24 bg-gray-300"></div>
                        <div className="icon w-16 flex flex-col items-center gap-y-3">
                            <img className="w-10" src={icon2} alt="" />
                            <div className="text-exs text-wrap text-center tracking-wide font-medium">
                            Home Sample Pick Up
                            </div>
                        </div>
                        <div className="w-[1px] h-24 bg-gray-300"></div>
                        <div className="icon w-16 flex flex-col items-center gap-y-3">
                            <img className="w-10" src={icon3} alt="" />
                            <div className="text-exs text-wrap text-center tracking-wide font-medium">
                            View Reports Online
                            </div>
                        </div>
                        <div className="w-[1px] h-24 bg-gray-300"></div>
                        <div className="icon w-16 flex flex-col items-center gap-y-3">
                            <img className="w-10" src={icon4} alt="" />
                            <div className="text-exs text-wrap text-center tracking-wide font-medium">
                            Free Doctor Consultation
                            </div>
                        </div>
                        <div className="w-[1px] h-24 bg-gray-300"></div>
                        <div className="icon w-16 flex flex-col items-center gap-y-3">
                            <img className="w-10" src={icon5} alt="" />
                            <div className="text-exs text-wrap text-center tracking-wide font-medium">
                            Best Prices Guaranteed
                            </div>
                        </div>
                    </div>
                    <button className="bg-red-500 w-60 text-white font-bold text-sm rounded-[4px] px-2 py-2 uppercase hover:bg-red-400">View Popular Packages</button>
                </div>
            </div>
        </>
    )
}