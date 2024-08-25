import oc_doctor from "../assets/icons/oc_doctor.svg";
export const DoctorPanel = () => {
  return (
    <>
      <div className="bg-gray-50 mt-20 w-full h-80 flex justify-center items-center">
        <div className="w-1/2 flex">
          <div className="w-1/2 flex justify-center items-center">
            <img className="w-2/3" src={oc_doctor} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-y-3 px-7">
            <div className="text-3xl font-bold">Are you a doctor ?</div>
            <div className="text-lg text-neutral-400 font-bold">
              Be a part of our panel of specialists and
              connect with your patients from anywhere.
            </div>
            <button className="bg-red-500 py-2 w-3/4 uppercase text-white text-center font-semibold hover:bg-red-400">Join Us</button>
          </div>
        </div>
      </div>
    </>
  );
};
