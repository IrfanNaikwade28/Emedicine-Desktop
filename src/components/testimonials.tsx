import arrowLeft from "../assets/icons/slider-prev.svg";
import arrowRight from "../assets/icons/slider-next.svg";
import { useState } from "preact/hooks";

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  return (
    <>
      <div className="flex w-full justify-center bg-gray-100 py-20">
        <div className="w-3/5">
          <div className="text-xl font-semibold text-center">
            Our Happy Customers
          </div>
          <div className="relative mt-10 w-full flex items-center justify-center">
            <div
              onClick={handlePrev}
              className="left-arrow absolute -left-10 z-20 bg-gray-100 flex items-center h-full cursor-pointer"
            >
              <img
                className="size-10 object-contain"
                src={arrowLeft}
                alt="Previous"
              />
            </div>
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                <div className="flex-none w-full flex justify-center items-center">
                  <div className="testimonial flex flex-col justify-center gap-y-2 w-3/4">
                    <div className="text-sm text-gray-500 font-medium text-center tracking-wide leading-6">
                      "I got my wife's pregnancy tests done from 1mg. A trained
                      technical visited to collect samples and all reports were
                      delivered on time before her doctor's appointment. Will
                      surely choose 1mg for the upcoming tests."
                    </div>
                    <div className="customer-name text-center text-sm font-semibold">
                      Vijay
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full flex justify-center items-center">
                  <div className="testimonial flex flex-col justify-center gap-y-2 w-3/4">
                    <div className="text-sm text-gray-500 font-medium text-center tracking-wide leading-6">
                      "My first booking experience with 1mg was simple and
                      hassle-free. Selected sample collection slot on their app
                      and the technician arrived right on time in the morning.
                      Very impressive"
                    </div>
                    <div className="customer-name text-center text-sm font-semibold">
                      Nikita
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full flex justify-center items-center">
                  <div className="testimonial flex flex-col justify-center gap-y-2 w-3/4">
                    <div className="text-sm text-gray-500 font-medium text-center tracking-wide leading-6">
                      "I regularly get tests done for my father, who is a
                      diabetic patient. I like the convenience of home sample
                      collection and quick delivery of test reports on my
                      email."
                    </div>
                    <div className="customer-name text-center text-sm font-semibold">
                      Smriti
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full flex justify-center items-center">
                  <div className="testimonial flex flex-col justify-center gap-y-2 w-3/4">
                    <div className="text-sm text-gray-500 font-medium text-center tracking-wide leading-6">
                      "I was surprised to see the wide selection of labs and
                      tests on 1mg. Now I can compare tests and packages based
                      on prices and lab ratings and choose the best one for me
                      and my family."
                    </div>
                    <div className="customer-name text-center text-sm font-semibold">
                      Chirag
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={handleNext}
              className="right-arrow absolute -right-10 z-20 bg-gray-100 flex items-center h-full cursor-pointer"
            >
              <img
                className="size-10 object-contain"
                src={arrowRight}
                alt="Next"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-2 py-5 my-10">
        <div className="font-bold text-lg tracking-wide">
          Want to book lab tests in bulk?
        </div>
        <div className="font-medium text-gray-900 text-sm tracking-wider">
          Get customized health packages at best prices
        </div>
        <button className="bg-red-500 font-bold text-white uppercase mt-2 px-3 py-2 rounded-sm">Contact Us</button>
      </div>
    </>
  );
};
