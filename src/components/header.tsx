import logo from "../assets/tata_1mg_logo.svg"
import cartIcon from "../assets/shop-cart-svgrepo-com.svg"
import { Link,useLocation } from "react-router-dom"
export const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  
    const getActiveClass = (path: string) => (currentPath === path ? "text-red-500" : "text-black");
    return(
        <div className="flex justify-between px-5 py-2 h-[3rem] items-center border-b border-opacity-10 border-solid border-black">
            <div className="">
                <img className="w-15 h-5" src={logo} alt="" />
            </div>
            <div className="flex gap-x-7 text-headerSM font-semibold">
                <Link  to="/" className={`hover:text-red-500 font-bold ${getActiveClass("/")}`}>MEDICINES</Link>
                <div className="flex gap-1">
                    <Link to="/LabTest" className={`hover:text-red-500 font-bold ${getActiveClass("/LabTest")}`}>LAB TESTS</Link>
                    <span class=" flex items-center bg-red-500 text-[#ffff] text-exs h-4 p-1 rounded-sm">SAFE</span>
                </div>
                <Link to="/ConsultDoctors" className={`hover:text-red-500 font-bold ${getActiveClass("/ConsultDoctors")}`}>CONSULT DOCTORS</Link>
                <Link to="/CancerCare" className={`hover:text-red-500 font-bold ${getActiveClass("/CancerCare")}`}>CANCER CARE</Link>
                <div className="flex gap-1">
                    <Link to="/Partnership" className={`hover:text-red-500 font-bold ${getActiveClass("/Partnership")}`}>PARTNERSHIP</Link>
                    <span class=" flex items-center bg-red-500 text-[#ffff] text-exs h-4 p-1 rounded-sm">NEW</span>
                </div>
                <div className="flex gap-1">
                    <Link to="/Care" className={`hover:text-red-500 font-bold ${getActiveClass("/Care")}`}>CARE PLAN</Link>
                    <span class="flex items-center bg-red-500 text-[#ffff] text-exs h-4 p-1 rounded-sm">SAVE MORE</span>
                </div>
            </div>
            <div className="flex text-sm gap-3 font-medium">
                <div className="flex gap-1">
                    <Link to="/login" className="hover:text-red-500 text-[14px] font-normal">Login</Link>|<Link className="hover:text-red-500 text-[14px] font-normal" to="/signup">Sign Up</Link>
                </div>
                <div className="">
                    <Link to="/offers" className="hover:text-red-500 text-[14px] font-normal">Offers</Link>
                </div>
            </div>
            <div className="flex gap-x-5 items-center">
                <div className="cart w-6">
                    <img src={cartIcon} alt="" />
                </div>
                <div className="need-help text-sm">
                    <Link to="/NeedHelp" className="hover:text-red-500 text-[14px] text-nowrap">Need Help?</Link>
                </div>
            </div>
        </div>
    )
}