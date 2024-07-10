import logo from "../assets/tata_1mg_logo.svg"
import cartIcon from "../assets/shop-cart-svgrepo-com.svg"
export const Header = () => {
    return(
        <div className="flex justify-between px-5 py-2 h-[3rem] items-center">
            <div className="">
                <img className="w-15 h-5" src={logo} alt="" />
            </div>
            <div className="flex gap-5 text-sm font-semibold">
                <a href="#" className="hover:text-[#ff6f61]">MEDICINES</a>
                <div className="flex gap-1">
                    <a href="#" className="hover:text-[#ff6f61]">LAB TESTS</a>
                    <span class=" flex items-center bg-[#ff6f61] text-[#ffff] text-xs h-4 p-1">SAFE</span>
                </div>
                <a href="#" className="hover:text-[#ff6f61]">CONSULT DOCTORS</a>
                <a href="#" className="hover:text-[#ff6f61]">CANCER CARE</a>
                <div className="flex gap-1">
                    <a href="#" className="hover:text-[#ff6f61]">PARTNERSHIP</a>
                    <span class=" flex items-center bg-[#ff6f61] text-[#ffff] text-xs h-4 p-1">NEW</span>
                </div>
                <div className="flex gap-1">
                    <a href="#" className="hover:text-[#ff6f61]">CARE PLAN</a>
                    <span class="flex items-center bg-[#ff6f61] text-[#ffff] text-xs h-4 p-1">SAVE MORE</span>
                </div>
            </div>
            <div className="flex text-sm gap-3 font-medium">
                <div className="flex gap-1">
                    <a href="#" className="hover:text-[#ff6f61]">Login</a>|<a href="#">Sign Up</a>
                </div>
                <div className="">
                    <a href="#" className="hover:text-[#ff6f61]">Offers</a>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="cart">
                    <img src={cartIcon} alt="" />
                </div>
                <div className="need-help text-sm">
                    <a href="#" className="hover:text-[#ff6f61]">Need Help?</a>
                </div>
            </div>
        </div>
    )
}