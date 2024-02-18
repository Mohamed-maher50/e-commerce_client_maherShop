import React from "react";
import HomeCategoryHook from "../hooks/categories/HomeCategoryHook";
import ImageCategories from "../components/categories/category_swiper/ImageCategories";
import SubTitle from "../components/utility/SubTitle";
import SkeletonCard from "../components/categories/CategoryCard.jsx/SkeletonCard";

const HomeCategories = () => {
  const [categories, loading] = HomeCategoryHook();
  return (
    <section>
      <SubTitle
        title={"categories"}
        pathText={"/allCategories"}
        btnTitle={"all categories"}
      />
      {loading && <SkeletonCard />}
      {categories.data && categories.data.length ? (
        <ImageCategories categories={categories.data} />
      ) : (
        <div className="w-fit mx-auto text-lg text-error capitalize">
          no categories 🥺
        </div>
      )}
    </section>
  );
};

export default HomeCategories;
