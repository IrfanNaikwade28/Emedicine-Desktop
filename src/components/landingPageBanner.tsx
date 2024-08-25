import doctor from "../assets/doctor.png"
export const LandingPageBanner = () =>{
    return(
        <>
            <div className="w-full h-28 bg-[#FEF7EF] flex items-center">
                <div className="flex gap-x-3 w-2/3 items-center justify-center">
                    <div className="pic w-14">
                        <img className="w-full" src={doctor} alt="" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div className="text-sm font-semibold">
                            Free consultation and more benefits with Care Plan membership.
                        </div>
                        <button className="flex gap-x-3">
                            <div className="bg-orange-900 text-white font-semibold text-sm px-1 italic">Care Plan</div>
                            <div className="text-sm font-semibold text-orange-900">Join now!</div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
