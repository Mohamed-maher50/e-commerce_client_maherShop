import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, FreeMode, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import StarRatings from "react-star-ratings";
const Reviews = ({ reviews = [] }) => {
  return (
    <Swiper
      className="py-14"
      slidesPerView={1}
      loop={reviews?.length > 3}
      modules={[Autoplay, A11y, FreeMode, EffectCoverflow]}
      freeMode
      autoplay={{
        delay: 4000,
      }}
      breakpoints={{
        500: {
          slidesPerView: reviews.length < 2 ? 1 : 2,
        },
        800: {
          slidesPerView: 2,
        },
      }}
      speed={1000}
    >
      {reviews?.map((review, index) => {
        return (
          <SwiperSlide key={index} className="bg-transparent">
            <Review {...review} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
const Review = ({ review, rating, user }) => {
  return (
    <>
      <div
        role="alert"
        className="alert shadow-sm   items-start  flex flex-col"
      >
        <div className="mb-6 items-center flex justify-start">
          <img
            src="/man.png"
            className="w-20 h-20 mx-auto rounded-full shadow-lg dark:shadow-black/30"
          />
          <div className="flex ps-5 flex-col flex-wrap">
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="20px"
            />
            <h5 className=" text-md font-semibold text-gray-500">
              {user?.name}
            </h5>

            <p className="font-light text-gray-600 text-sm h-fit ">{review}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reviews;
