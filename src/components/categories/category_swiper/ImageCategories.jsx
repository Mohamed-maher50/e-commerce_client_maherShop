import { SwiperSlide } from "swiper/react";
import DefaultSwiper from "../../utility/DefaultSwiper";
import CategoryCard from "../CategoryCard.jsx/CategoryCard";
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
  return (
    <div className="p-2 bg-white">
      <DefaultSwiper
        spaceBetween={15}
        slidesPerView={4}
        loop={categories.length > 10}
        breakpoints={breakpoints}
        wrapperClass="flex justify-center items-center"
      >
        {categories.map((category, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex h-32 w-32  justify-center items-center"
            >
              <CategoryCard {...category} />
            </SwiperSlide>
          );
        })}
      </DefaultSwiper>
    </div>
  );
};

export default ImageCategories;
