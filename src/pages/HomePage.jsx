import React from "react";
import Offers from "../components/Offers";
import HomeCategories from "../containers/HomeCategories";
import ProductsContainer from "../containers/products/ProductsContainer";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col gap-y-4">
        <Offers />
        <HomeCategories />

        <ProductsContainer
          title={"most sold"}
          query="?sort=-sold&limit=200"
          bannerPath="/adds/bestSold.jpg"
        />

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
