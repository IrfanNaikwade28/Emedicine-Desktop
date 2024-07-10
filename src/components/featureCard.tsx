type Props = {
    logo: any;
}
export const FeatureCard = (props:Props) => {
  return (
    <>
      <div className="flex flex-col mx-1 items-center justify-center p-3 gap-3 h-full w-44 rounded-lg hover:shadow-card-dark cursor-pointer">
        <img className="w-32 h-32" src={props.logo} alt="" />
      </div>
    </>
  );
};
