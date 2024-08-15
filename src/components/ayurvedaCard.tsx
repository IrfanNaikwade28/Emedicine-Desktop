import { FunctionComponent } from "preact";
type ayurvedaCardProps = {
  cardImg: string;
  title: string;
  desc: string;
};
export const AyurvedaCard: FunctionComponent<ayurvedaCardProps> = (props) => {
  return (
    <>
      <div className="flex flex-col w-72 h-4/5 rounded-lg border snap-center">
        <div className="w-full h-3/4">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={props.cardImg}
            alt=""
          />
        </div>
        <div className="w-full h-1/4 flex flex-col gap-y-1 px-3 py-2">
          <div className="text-xs font-semibold">{props.title}</div>
          <div className="text-exss tracking-wider font-normal text-gray-500">
            {props.desc}
          </div>
        </div>
      </div>
    </>
  );
};
