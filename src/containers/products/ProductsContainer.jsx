import React from "react";
import use_Home_Products from "../../hooks/products/get_products_hook";
import DefaultSwiper from "../../components/utility/DefaultSwiper";
import { SwiperSlide } from "swiper/react";
import BasicCard from "../../components/BasicCard/BasicCard";
import SkeletonCard from "../../components/products/SkeletonCard";
import useCard_container_hook from "../../hooks/products/card_container_hook";
const breakpoints = {
  slidesPerView: 2,
  // when window width is >= 480px
  768: {
    slidesPerView: 3,
  },
  // when window width is >= 640px
  769: {
    slidesPerView: 3,
  },
  1025: {
    slidesPerView: 5,
  },
  1200: {
    slidesPerView: 5,
  },
};
const ProductsContainer = ({ query = "", bannerPath = "" }) => {
  const [favProducts] = useCard_container_hook();
  let [products, loading] = use_Home_Products(query);
  return (
    <section>
      {bannerPath && (
        <img src={bannerPath} className="h-80 my-4 w-full object-fill" />
      )}

      {loading && (
        <div className="flex flex-nowrap gap-3 overflow-hidden">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      <DefaultSwiper
        breakpoints={breakpoints}
        className=" min-h-[400px]"
        loop={products?.data?.length > 10}
      >
        {products?.data?.map((product, index) => {
          const isLoved = favProducts?.some((fav) => fav._id == product._id);

          return (
            <SwiperSlide key={index}>
              <BasicCard {...product} object={product} loved={isLoved} />
            </SwiperSlide>
          );
        })}
      </DefaultSwiper>
    </section>
  );
};

export default ProductsContainer;
