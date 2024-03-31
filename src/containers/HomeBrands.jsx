import React from "react";
import ImageCategories from "../components/categories/category_swiper/ImageCategories";
import HomeCategoryHook from "../hooks/categories/HomeCategoryHook";
import { useSelector } from "react-redux";
import SubTitle from "../components/utility/SubTitle";

const HomeBrands = () => {
  const { brands, loading } = useSelector((state) => state.BrandsReducer);

  return (
    <section>
      <SubTitle
        title={"brands"}
        pathText={"/allBrands"}
        btnTitle={"all brands"}
      />

      {brands.data && brands.data.length ? (
        <ImageCategories categories={brands.data} />
      ) : (
        <div className="w-fit mx-auto text-lg text-error capitalize">
          no categories 🥺
        </div>
      )}
    </section>
  );
};

export default HomeBrands;
