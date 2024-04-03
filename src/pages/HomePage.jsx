import React from "react";
import Offers from "../components/Offers";
import HomeCategories from "../containers/HomeCategories";
import ProductsContainer from "../containers/products/ProductsContainer";
import HomeBrands from "../containers/HomeBrands";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col gap-y-4">
        <HomeCategories />
        <Offers />
        <img
          src="/adds/midum.jpg"
          srcSet="small.jpg 320w,
          /adds/midum.jpg 480w,
          /adds/large.jpg 800w"
          className="bg-contain h-60 "
        />
        <HomeBrands />

        <ProductsContainer title={"most sold"} query="?sort=-sold&limit=200" />

        <ProductsContainer
          title={"most sold"}
          query="?keyword=TV "
          bannerPath="/adds/tv_en_web.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
