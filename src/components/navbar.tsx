import { useState } from "preact/hooks"
import arrowDown from "../assets/arrow-down.svg"
export const Navbar = ()=>{
    const [caroList,setCaroList] = useState('')
    return (
        <div className="flex gap-8 w-full h-10 px-10 text-nowrap text-[12px] font-semibold">
            <div onMouseEnter={()=>setCaroList('opt1')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Health Resource Center</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt1' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt2')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Vitamins & Nutrition</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt2' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt3')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Fitness Supplements</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt3' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt4')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Stomach Care</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt4' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt5')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Feminine Care</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt5' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt6')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Healthy Snacks </a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt6' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt7')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Nutritional Drinks</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt7' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt8')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Diabetes</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt8' ? 'flex' : 'hidden'} flex-col absolute bg-white top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
            <div onMouseEnter={()=>setCaroList('opt9')} onMouseLeave={()=>setCaroList('')} className="flex flex-col relative justify-center">
                <div className="flex gap-2 items-center cursor-pointer">
                    <a className="hover:text-red-500" href="#">Immunity Boosters</a>
                    <img className="w-2 h-2" src={arrowDown} alt="" />
                </div>
                <div className={`${caroList === 'opt9' ? 'flex' : 'hidden'} flex-col absolute bg-white right-1 top-10 z-30 px-5 py-3 gap-y-3 rounded-b-sm shadow-2xl`}>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Diseases</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">All Medicines</div>
                    <div className="option cursor-pointer font-semibold tracking-wide hover:text-red-500">Medicines by Therapeutic Class</div>
                </div>
            </div>
        </div>
    )
}