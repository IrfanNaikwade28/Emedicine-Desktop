import { FunctionComponent } from "preact";
import shield from "../assets/icons/safe.png";

type healthCardProps = {
    selType:string;
    type:string;
    title:string;
    testCount:string;
    serum1:string;
    serum2:string;
    serum3:string;
    reportTime:string;
    actualPrice:string;
    discPrice:string;
}
export const HealthCheckupCard:FunctionComponent<healthCardProps> = (props) => {
  return (
    <>
      <div className={`flex-col gap-y-1 w-60 px-3 py-3 border-2 border-opacity-50 rounded-md shadow-sm relative ${props.type===props.selType?"flex":"hidden"}`}>
          <div className="text-menu font-bold truncate w-5/6">
                {props.title}
          </div>
          <span className="flex absolute right-0 justify-center gap-x-1 text-xs font-bold bg-[#ffe3c2] py-[2px] px-1">
            <img className="w-4 object-contain" src={shield} alt="" />
            SAFE
          </span>
          <div className="text-exs text-gray-500 font-medium">{props.testCount}</div>
          <div className="mt-2 text-exs text-gray-500 font-medium">{props.serum1}</div>
          <div className="text-exs text-gray-500 font-medium">{props.serum2}</div>
          <div className="text-exs text-gray-500 font-medium">{props.serum3}</div>
          <div className="text-exs font-bold">+ More</div>

          <div className="mt-3 text-xs text-gray-500 font-medium">Get report within <span className="font-bold">{props.reportTime}</span></div>
          <div className="price-sect flex gap-x-2 items-center">
            <div className="disc-price text-base font-bold">₹{props.discPrice}</div>
            <div className="actual-price text-sm text-gray-400 line-through">₹{props.actualPrice}</div>
          </div>
          <button className="mt-3 bg-red-500 text-xs tracking-wide text-white uppercase font-bold text-center w-full rounded-sm py-2">Add to Cart</button>
      </div>
    </>
  );
};
