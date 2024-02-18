import React from "react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import DefaultSwiper from "./utility/DefaultSwiper";
const Offers = () => {
  return (
    <DefaultSwiper
      spaceBetween={0}
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      slidesPerView={1}
      pagination={{
        enabled: true,
        clickable: true,
      }}
      navigation={true}
      speed={2000}
    >
      <SwiperSlide className="h-full">
        <img
          className="h-full"
          src="/adds/Swipper/anker_mainbanner_web_en.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/adds/Swipper/asuszen_mainbanner_web_en.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/adds/Swipper/canonprinter_mainbanner_web_en.jpg" />
      </SwiperSlide>
    </DefaultSwiper>
  );
};

export default Offers;
