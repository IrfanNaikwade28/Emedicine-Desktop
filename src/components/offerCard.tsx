import { FunctionComponent } from "preact";
import shield from "../assets/health_icon.svg"
type offerCardProps={
  title:string;
  discountPrice:string;
  actualPrice:string;
  discountRate:string;
}
export const OfferCard:FunctionComponent<offerCardProps> = (props) => {
  return (
    <div className="flex flex-col p-3 gap-3 h-32 w-72 rounded-lg border border-black border-opacity-10 hover:shadow-card-dark">
      <div className="flex justify-between basis-1/2">
        <span className="text-ellipsis overflow-hidden w-48 text-xs font-semibold text-nowrap">
          {props.title}
        </span>
        <button className="bg-[#ffe3c2] flex items-center justify-center gap-x-1 w-14 h-5 text-xs cursor-pointer font-bold">
          <img src={shield} alt="" />
          SAFE
        </button>
      </div>
      <div className="flex basis-1/2 items-end gap-3">
        <span className="text-sm">Rs.{props.discountPrice}</span>
        <span className="text-xs line-through">Rs.{props.actualPrice}</span>
        <span className="border border-dashed border-green-500 text-green bg-green-100 text-xs p-1 ms-10">
          {props.discountRate}% off
        </span>
      </div>
    </div>
  );
};
