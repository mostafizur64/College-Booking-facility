import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import slider1 from "../../../assets/image/slider/image-1.jpg";
import slider2 from "../../../assets/image/slider/image-2.jpg";
import slider3 from "../../../assets/image/slider/image-3.jpeg";
const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-[600px]" src={slider1} alt="" />
          <div className="absolute hidden lg:block  lg:-mt-[380px] lg:ml-[640px]   text-center  justify-center">
            <h3 className="text-4xl text-semibold">
              Daily Yog Used For Healthy Life
            </h3>
            <h4 className="text-2xl mt-2">Few minute of Yoga Healthy life</h4>
            <button className="bg-green-950 p-2 rounded text-white mt-4">
              Visit Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[600px]" src={slider2} alt="" />
          <div className="absolute hidden lg:block  lg:-mt-[380px] lg:ml-[160px]   text-center  justify-center">
            <h3 className="text-4xl text-semibold">
              Daily Yog Used For Healthy Life
            </h3>
            <h4 className="text-2xl mt-2">Few minute of Yoga Healthy life</h4>
            <button className="bg-green-950 p-2 rounded text-white mt-4">
              Visit Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[600px]" src={slider3} alt="" />
          <div className="absolute hidden lg:block  lg:-mt-[380px] lg:ml-[640px]   text-center  justify-center">
            <h3 className="text-4xl text-semibold">
              Daily Yog Used For Healthy Life
            </h3>
            <h4 className="text-2xl mt-2">Few minute of Yoga Healthy life</h4>
            <button className="bg-green-950 p-2 rounded text-white mt-4">
              Visit Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
