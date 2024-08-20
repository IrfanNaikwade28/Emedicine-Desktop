import { FunctionComponent } from "preact";
import locationIcon from "../assets/location-pin-svgrepo-com.svg"
import searchIcon from "../assets/search.svg"
import lighteningIcon from "../assets/light.png"

type SearchBarProps = {
    offer:string;
}
export const SearchBar:FunctionComponent<SearchBarProps> = (props) =>{
    return(
        <div className="flex justify-around w-full h-[3rem] border-b border-opacity-10 border-solid border-black px-10">
            <div className="w-3/5 flex gap-1 items-center">
                <div className="flex w-1/4 bg-gray-200 items-center ps-3">
                    <img className="w-5 h-5" src={locationIcon} alt="" />
                    <input type="text" className="bg-gray-200 text-sm w-full h-9 px-3 focus-visible:outline-none" placeholder="Enter Your City" />
                    <span></span>
                </div>
                <div className="flex justify-between items-center w-4/5 bg-gray-200 pe-3">
                    <input type="text" className="bg-gray-200 text-sm w-full h-9 px-3 focus-visible:outline-none" placeholder="Search for Medicines and Health Products" />
                    <img className="w-5 h-5" src={searchIcon} alt="" />
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text-xs text-gray-800 flex gap-x-1">
                    <img className="w-2 object-contain" src={lighteningIcon} alt="" />
                    {props.offer}
                </span>
                <button className="bg-red-500 text-white w-40 h-8 rounded-sm">Quick Order</button>
            </div>
        </div>
    )
}