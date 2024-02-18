import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

const DefaultSwiper = ({ children, ...props }) => {
  return (
    <Swiper
      spaceBetween={3}
      modules={[Autoplay]}
      speed={1500}
      autoplay={{
        delay: 3000,
      }}
      loop
      slidesPerView={2}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default DefaultSwiper;
