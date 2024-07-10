type Props = {
  prodImg: any;
  title: string;
  desc: string;
  price: string;
};
export const ProductCard = (props: Props) => {
  return (
    <>
      <div className="flex flex-col mx-1 justify-center p-3 gap-1 h-full w-44 rounded-lg hover:shadow-card-dark cursor-pointer">
        <div className="h-4/5 flex items-center justify-center">
          <img className="w-20 h-fit" src={props.prodImg} alt="" />
        </div>
        <span className="h-10 text-ellipsis line-clamp-2 w-36 leading-4 text-wrap text-sm flex ">{props.title}</span>
        <span className="h-10 text-ellipsis line-clamp-2 w-32 leading-4 text-wrap text-xs text-gray-500">{props.desc}</span>
        <span className="flex items-end h-fit">{props.price}</span>
      </div>
    </>
  );
};
