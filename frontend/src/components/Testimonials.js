/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Testimonials = () => {
  const [testimonialActive, setTestimonialActive] = useState(2);

  const handlePrevTestimonial = () => {
    setTestimonialActive(testimonialActive === 1 ? 3 : testimonialActive - 1);
  };

  const handleNextTestimonial = () => {
    setTestimonialActive(testimonialActive >= 3 ? 1 : testimonialActive + 1);
  };

  return (
    <>
      <div className="my-10 mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
        <div className="relative w-full py-2 md:py-24 bg-indigo-700 md:w-1/2 flex flex-col item-center justify-center">
          <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

          <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-white font-semibold leading-tight tracking-tight mb-0 z-20">
            <span className="md:block">What Our</span>
            <span className="md-block">Customers</span>
            <span className="block">Are Saying!</span>
          </div>

          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
            <button
              className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={handlePrevTestimonial}
            >
              &#8592;
            </button>
            <button
              className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={handleNextTestimonial}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="bg-gray-100 md:w-1/2">
          <div className="flex flex-col h-full relative">
            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 24 24"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>

            <div className="h-full relative z-10">
              <div
                className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl"
                style={{ display: testimonialActive === 1 ? "block" : "none" }}
              >
                From the cake tasting, we fell in love with her cakes and
                professionalism. Our daughter's quinceañero theme was unique,
                and what we asked for was outside of the box. But wow, wow, wow!
                This cake was absolutely incredible! It was beautiful, flawless,
                and unbelievably delicious! We ordered almond, chocolate, and
                red velvet flavors, and everyone adored it! Karla, thank you for
                your amazing work. May your hands be blessed. Highly recommend
                her extraordinary skills!
              </div>

              <div
                className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl"
                style={{ display: testimonialActive === 2 ? "block" : "none" }}
              >
                Karla is so amazing and super helpful if you need any baking
                advice. The store is always stocked with the most beautiful
                sprinkles, a whole wall of cookie cutters and an array of boxes,
                cake boards and tins - pretty much anything you would need for
                baking. The cakes available in the cold cabinet are ALWAYS
                incredibly moist. Whether your ordering a customcake or getting
                the supplies to bake one this is definitely a great place to go!
              </div>

              <div
                className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl"
                style={{ display: testimonialActive === 3 ? "block" : "none" }}
              >
                If I could give her more than 5 stars, I would definitely give
                10! This cake surpassed all expectations and became the epitome
                of perfection. It was an unparalleled taste experience, and the
                guests couldn't get enough of the delectable flavors. The cake
                exceeded the beauty of the picture I provided, leaving my
                daughter absolutely smitten. Without a doubt, I wholeheartedly
                recommend Sweets by Karla with a 100% assurance of excellence!
              </div>
            </div>

            <div className="flex my-4 justify-center items-center">
              <button
                onClick={() => setTestimonialActive(1)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
                  testimonialActive !== 1
                    ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-100"
                    : "h-16 w-16 opacity-100 bg-indigo-600 text-white"
                }`}
              >
                IN
              </button>
              <button
                onClick={() => setTestimonialActive(2)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-indigo-600 rounded-full mx-2 ${
                  testimonialActive !== 2
                    ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-100"
                    : "h-16 w-16 opacity-100 bg-indigo-600 text-white"
                }`}
              >
                EM
              </button>
              <button
                onClick={() => setTestimonialActive(3)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block bg-indigo-600 rounded-full mx-2 ${
                  testimonialActive !== 3
                    ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-100"
                    : "h-16 w-16 opacity-100 bg-indigo-600 text-white"
                }`}
              >
                AC
              </button>
            </div>

            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
              <div
                style={{ display: testimonialActive === 1 ? "block" : "none" }}
              >
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  Ileana Navarro
                </h2>
              </div>

              <div
                style={{ display: testimonialActive === 2 ? "block" : "none" }}
              >
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  Emely Munoz
                </h2>
              </div>

              <div
                style={{ display: testimonialActive === 3 ? "block" : "none" }}
              >
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  Angie C
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-3">
        <a href="https://www.google.com/maps/place/Sweets+by+Karla+Cakes+and+Supplies+Store/@28.2635899,-81.4373796,17z/data=!4m8!3m7!1s0x88dd8379041e160d:0x7c4914e438a73783!8m2!3d28.2635899!4d-81.4351909!9m1!1b1!16s%2Fg%2F11b5pl2cf8?entry=ttu" target="blank">
          <button className="btn text-black bg-slate-200 hover:bg-slate-300 hover:text-black rounded-lg mb-3 mt-2 no-underline hover:no-underline">
            Read More Reviews Like These
          </button>
        </a>
      </div>
    </>
  );
};

export default Testimonials;
