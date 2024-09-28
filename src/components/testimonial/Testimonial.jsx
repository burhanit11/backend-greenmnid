// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import ".";
// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const data = [1, 2, 3, 4, 5, 6, 7];

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-lg text-center font-extrabold tracking-tight text-black md:text-xl lg:text-2xl">
          What customers say about GREEMIND?
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col border my-10 rounded-md bg-primary">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I&apos;ve found a template that covers all bases
                      for a bootstrapped startup. We were able to launch in
                      days, not months.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    {/* <img
                                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt=""
                              /> */}
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Theresa Webb
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <div className="swiper-button-next  ">Next</div>
        <div className="swiper-button-prev">Prev</div> */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
