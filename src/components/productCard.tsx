type Props = {
  prodImg: any;
  title: string;
  desc: string;
  deliveryInfo:string;
  actualPrice:string;
  discount:string;
  discPrice: string;
};
export const ProductCard = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 w-40 h-full overflow-y-hidden py-2 hover:shadow-card-dark px-1 cursor-pointer">
        <div className="prod-image flex justify-center items-center h-1/2 p-3">
            <img className="h-full object-contain" src={props.prodImg} alt="" />
        </div>
        <div className="prod-info grid gap-y-1">
          <div className="line-clamp-2 text-menu font-medium">{props.title}</div>
          <div className="desc text-xs text-gray-400 font-medium">{props.desc}</div>
          <div className="desc text-xs text-gray-400 font-medium flex gap-x-1">delivery by  <span className="text-black font-semibold">{props.deliveryInfo}</span></div>
        </div>
        <div className="price">
          <div className="flex text-xs text-gray-500 font-medium gap-x-1">
            <span>MRP</span>
            <div className="actual-price line-through text-xs">₹{props.actualPrice}</div>
            <div className="discount text-green-500 font-semibold ml-2">{props.discount}% off</div>
          </div>
          <div className="discPice font-medium text-black text-sm mt-1">₹{props.discPrice}</div>
        </div>
      </div>
    </>
  );
};
