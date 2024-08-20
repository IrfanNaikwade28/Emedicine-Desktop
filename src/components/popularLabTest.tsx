import home from "../assets/icons/home.svg";
import visit from "../assets/icons/visit.svg";
import plus from "../assets/icons/plus-mark.svg";
import search from "../assets/icons/searchRedBtn.svg";
export const PopularLabTest = () => {
  return (
    <>
      <div className="bg-gray-100 absolute w-full h-32 -z-10"></div>
      <div className="flex flex-col items-center gap-y-3 w-full relative">
          <div className="flex flex-col gap-y-3 w-3/4">
            <div className="text-xl font-bold">
              Popular lab tests & profiles
            </div>
            <div className="flex border-2 border-gray-300 shadow-md rounded-md bg-white">
              <div className="w-1/2 bg-white p-5 rounded-md">
                <div className="ps-5 pe-16 flex flex-col gap-y-3">
                  <div className="flex gap-x-2 items-center text-sm font-bold text-gray-700">
                    <img src={home} alt="" />
                    HEALTH TEST AT YOUR HOME
                  </div>
                  <div className="test-options grid grid-cols-2 gap-5 ps-2">
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      CBC (Complete Blood Count)
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      Thyroid Profile Total (T3, T4 & TSH)
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      LFT (Liver Function Test)
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      Diabetes Screening (HbA1C & Fasting Sugar)
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      Lipid Profile
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      COVID- RT PCR
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1px] h-60 bg-gray-300 shadow-lg"></div>
              <div className="w-1/2 bg-white p-5 rounded-md">
                <div className="ps-5 pe-16 flex flex-col gap-y-3">
                  <div className="flex gap-x-2 items-center text-sm font-bold text-gray-700">
                    <img src={visit} alt="" />
                    VISIT A LAB NEAR YOU
                  </div>
                  <div className="test-options grid grid-cols-2 gap-5 ps-2">
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      Ultrasound Whole Abdomen
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      Electrocardiography at Center
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />X - Ray Chest PA
                      View
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      MRI Brain
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      NCCT Scan Brain
                    </div>
                    <div className="text-xs flex gap-x-2 items-center">
                      <img className="w-4" src={plus} alt="" />
                      MRI Cervical Spine
                    </div>
                  </div>
                </div>
            </div>
          </div> 
        </div>
        <div className="w-full flex justify-center absolute bottom-0">
          <button className="absolute -bottom-4 z-20 bg-white border-2 rounded-full py-2 px-7 shadow-card-dark text-red-500 font-bold uppercase text-sm flex gap-x-2 items-center">
            <img src={search} alt="" />
            Find Your Tests
          </button>
        </div>
      </div>
    </>
  );
};
