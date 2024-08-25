import consult from "../assets/icons/doctorConsult.svg";
import talk from "../assets/icons/talk.svg";
import msg from "../assets/icons/msg.svg";
import valid from "../assets/icons/valid.svg";
export const DoctorConsult = () => {
  return (
    <>
      <div className="py-20 px-52 bg-white flex flex-col">
        <div className="flex">
          <div className="flex flex-col w-4/5">
            <div className="text-3xl font-bold">
              Online doctor consultation with qualified doctors
            </div>
            <div className="text-2xl text-gray-500 mt-2">Starting at ₹199</div>
            <div className="flex gap-x-5 mt-5">
              <div className="flex items-center gap-x-1 justify-start">
                <img src={talk} alt="" />
                <div className="text-sm text-nowrap font-medium">Talk within 30 min</div>
              </div>
              <div className="flex items-center gap-x-1 justify-start">
                <img src={msg} alt="" />
                <div className="text-sm text-nowrap font-medium">
                  Free follow up for 3 days
                </div>
              </div>
              <div className="flex items-center gap-x-1 justify-start">
                <img src={valid} alt="" />
                <div className="text-sm text-nowrap font-medium">
                  Get a valid prescription
                </div>
              </div>
            </div>
            <button className="bg-red-500 py-2 w-80 text-white font-bold rounded-sm mt-5 hover:bg-red-400">Consult Now</button>
          </div>
          <div className="w-80">
            <img className="w-80" src={consult} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
