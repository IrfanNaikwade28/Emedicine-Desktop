import locationIcon from "../assets/location-pin-svgrepo-com.svg"
import searchIcon from "../assets/search.svg"
export const SearchBar = () =>{
    return(
        <div className="flex justify-around w-full h-[3rem] border-y border-opacity-10 border-solid border-black px-10">
            <div className="w-3/5 flex gap-1 items-center">
                <div className="flex w-1/4 bg-[#f1f4f6] items-center ps-3">
                    <img className="w-5 h-5" src={locationIcon} alt="" />
                    <input type="text" className="bg-[#eef0f2] text-sm w-full h-9 px-3 focus-visible:outline-none" placeholder="City" />
                    <span></span>
                </div>
                <div className="flex justify-between items-center w-4/5 bg-[#f1f4f6] pe-3">
                    <input type="text" className="bg-[#eef0f2] text-sm w-full h-9 px-3 focus-visible:outline-none" placeholder="Search for Medicines and Health Products" />
                    <img className="w-5 h-5" src={searchIcon} alt="" />
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text-sm text-gray-800">
                    QUICK BUY! Get 15% off on medicines*
                </span>
                <button className="bg-[#ff6f61] text-white w-40 h-8 rounded-sm">Quick Order</button>
            </div>
        </div>
    )
}