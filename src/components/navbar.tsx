import arrowDown from "../assets/arrow-down.svg"
export const Navbar = ()=>{
    return (
        <div className="flex gap-8 w-full h-10 px-10 text-nowrap text-[12px] font-semibold">
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Health Resource Center</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Vitamins & Nutrition</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Fitness Supplements</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Stomach Care</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Feminine Care</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Healthy Snacks</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Nutritional Drinks</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Diabetes</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
                <a href="#">Immunity Boosters</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
        </div>
    )
} 