export const DoctorConsultStatus = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-white relative">
        <div className="flex items-center gap-x-6 w-9/12 h-60 border border-black border-opacity-60 rounded-md z-20 bg-white">
          <div className="flex flex-col justify-center items-center basis-1/3">
            <div className="text-7xl text-red-500 font-bold tracking-wide">
              30L+
            </div>
            <div className="text-2xl text-gray-600 font-bold">
              Total Consultations
            </div>
          </div>
          <div className="w-[0.5px] h-40 bg-gray-400"></div>
          <div className="flex flex-col justify-center items-center basis-1/3">
            <div className="text-7xl text-red-500 font-bold tracking-wide">
              3k+
            </div>
            <div className="text-2xl text-gray-600 font-bold">
              Daily Consultations
            </div>
          </div>
          <div className="w-[0.5px] h-40 bg-gray-400"></div>
          <div className="flex flex-col justify-center items-center basis-1/3">
            <div className="text-7xl text-red-500 font-bold tracking-wide">
              22+
            </div>
            <div className="text-2xl text-gray-600 font-bold">Specialities</div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gray-50"></div>
      </div>
    </>
  );
};
