import { SwiperSlide } from "swiper/react";
import DefaultSwiper from "../../utility/DefaultSwiper";

import { useNavigate } from "react-router-dom";
import ThumbnailBox from "../../ThumbnailBox";
const breakpoints = {
  768: {
    slidesPerView: 3,
    spaceBetween: 5,
  },

  769: {
    slidesPerView: 5,
  },
  1025: {
    slidesPerView: 5,
  },
  1200: {
    slidesPerView: 9,
  },
};
const ImageCategories = ({ categories }) => {
  const nav = useNavigate();
  return (
    <div className="p-2 ">
      <DefaultSwiper
        spaceBetween={15}
        slidesPerView={4}
        loop={categories.length > 10}
        breakpoints={breakpoints}
        wrapperClass="flex   items-center"
      >
        {categories.map((category, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => {
                nav({
                  pathname: "/products",
                  search: `category[in]=${category._id}`,
                });
              }}
              className="flex h-32 w-32  bg-transparent justify-center items-center"
            >
              <ThumbnailBox {...category} />
            </SwiperSlide>
          );
        })}
      </DefaultSwiper>
    </div>
  );
};

export default ImageCategories;
