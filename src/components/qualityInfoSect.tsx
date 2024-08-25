export const QualityInfoSect = () => {
  return (
    <>
      <div className="w-full flex mt-40 mb-20 bg-white">
        <div className="flex gap-x-20 justify-center items-center w-full">
          <div className="w-1/3">
            <div className="text-lg font-semibold w-4/5">
              Uncompromised Quality. Reliable Results. Always.
            </div>
            <div className="mt-3 text-menu font-medium tracking-wide text-gray-500">
              Spending hours in a queue at a diagnostic lab or a hospital is now
              a thing of the past. With Tata 1mg you can get your lab tests done
              from the comfort of your home. Our highly qualified phlebotomist
              will collect the samples at your preferred time. Watch this video
              to see steps taken by us to ensure quality and hygiene in sample
              collection. Book your next lab test with Tata 1mg at the lowest
              price guaranteed!
            </div>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            {/* <img src={banner} alt="" /> */}
            <div className="w-full h-72">
                <iframe
                width="100%"
                height="100%"
                id="video-iframe"
                src="https://www.youtube.com/embed/CLELFdw4Ec0?utm_source=trust_campaign&amp;utm_medium=dwebspot&amp;autoplay=0&amp;rel=0"
                frameborder="0"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
