import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-one">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Quisquam necessita vel
              <span className="dark:text-violet-400">laborum doloribus</span>
              delectus
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-purple-600 ">
                Get started
              </button>
              <button className="px-8 py-3 m-2 text-lg  border-2 hover:bg-purple-600    rounded border-purple-600">
                Learn more
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-two">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Quisquam necessita vel
              <span className="dark:text-violet-400">laborum doloribus</span>
              delectus
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-purple-600 ">
                Get started
              </button>
              <button className="px-8 py-3 m-2 text-lg  border-2  rounded border-purple-600 hover:bg-purple-600  ">
                Learn more
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-three">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Quisquam necessita vel
              <span className="dark:text-violet-400">laborum doloribus</span>
              delectus
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-purple-600 ">
                Get started
              </button>
              <button className="px-8 py-3 m-2 text-lg  border-2 hover:bg-purple-600  rounded border-purple-600">
                Learn more
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
