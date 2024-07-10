import arrowDown from "../assets/arrow-down.svg"
export const Navbar = ()=>{
    return (
        <div className="flex gap-8 w-full h-10 px-16 text-menu">
            <div className="flex gap-2 items-center">
                <a href="#">Health Resource Center</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Vitamins & Nutrition</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Personal Care</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Healthcare Devices</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Ayurveda Products</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Diabetes</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Health Conditions</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Homeopathy</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
            <div className="flex gap-2 items-center">
                <a href="#">Featured</a>
                <img className="w-2 h-2" src={arrowDown} alt="" />
            </div>
        </div>
    )
} 