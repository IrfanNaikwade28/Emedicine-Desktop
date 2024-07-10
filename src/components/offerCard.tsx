export const OfferCard = () => {
  return (
    <div className="flex flex-col p-3 gap-3 h-32 w-72 rounded-lg border border-black border-opacity-10 hover:shadow-card-dark ">
      <div className="flex justify-between basis-1/2">
        <span className="text-ellipsis overflow-hidden w-48 text-xs font-semibold text-nowrap">
          Comprehensive Gold Full Body Checkup
        </span>
        <button className="bg-[#ffe3c2] w-14 h-5 text-xs cursor-pointer font-bold">
          SAFE
        </button>
      </div>
      <div className="flex basis-1/2 items-end gap-3">
        <span className="text-sm">Rs.2249</span>
        <span className="text-xs line-through">Rs.4449</span>
        <span className="border border-dashed border-green-500 text-green bg-green-100 text-xs p-1 ms-10">
          50% off
        </span>
      </div>
    </div>
  );
};
