import confidential from "../assets/icons/confidential.svg";
import certifyDoc from "../assets/icons/certified.svg"
import convenience from "../assets/icons/convenience.svg"
import cost from "../assets/icons/costEffective.svg"
export const ConsultFeatures = () => {
  return (
    <>
      <div className="w-full flex px-20 gap-x-10 mt-10">
        <div className="basis-1/4 flex flex-col justify-center gap-y-5 items-center">
          <div className="flex justify-center h-40">
            <img className="w-full" src={confidential} alt="" />
          </div>
          <div className="title text-xl font-bold text-center tracking-wide text-gray-700">
            100% Confidential
          </div>
          <div className="text-sm text-center font-medium text-gray-700 tracking-wide basis-1/3">
            All advice & consultations are completely confidential. You can also
            delete chats whenever you want.
          </div>
        </div>
        <div className="basis-1/4 flex flex-col justify-start gap-y-5 items-center">
          <div className="flex justify-center h-40">
            <img className="w-full" src={certifyDoc} alt="" />
          </div>
          <div className="title text-xl font-bold text-center tracking-wide text-gray-700">
            Certified Doctors
          </div>
          <div className="text-sm text-center font-medium text-gray-700 tracking-wide basis-1/3">
          We offer quality healthcare through our network of certified and experienced doctors.
          </div>
        </div>
        <div className="basis-1/4 flex flex-col justify-start gap-y-5 items-center">
          <div className="flex justify-start h-40">
            <img className="w-full" src={convenience} alt="" />
          </div>
          <div className="title text-xl font-bold text-center tracking-wide text-gray-700">
          Convenience
          </div>
          <div className="text-sm text-center font-medium text-gray-700 tracking-wide px-5 basis-1/3">
          Forget the hassle of long queues and rush hour. Seek expert opinion anytime, anywhere.
          </div>
        </div>
        <div className="basis-1/4 flex flex-col justify-start gap-y-5 items-center">
          <div className="flex justify-center h-40">
            <img className="w-full" src={cost} alt="" />
          </div>
          <div className="title text-xl font-bold text-center tracking-wide text-gray-700">
          Cost Effective
          </div>
          <div className="text-sm text-center font-medium text-gray-700 tracking-wide basis-1/3">
          We provide medical assistance on non urgent queries for free. Fee starting at ₹50 for faster response to queries.
          </div>
        </div>
      </div>
    </>
  );
};
