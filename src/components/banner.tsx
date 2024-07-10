import bannerImg from "../assets/d037f049-0426-43b5-b365-c89ccd788d2d.webp"
export const Banner = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-white shadow-md h-20">
        <h1 className="text-gray-500 text-xl">
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </h1>
      </div>
      <div className="h-56 p-10">
        <div className="banner flex flex-col items-center justify-center mb-8">
        <img src={bannerImg} alt="" />
        </div>
        <span className="text-lg">Shop by Health Concerns</span>
      </div>
    </>
  );
};
