import React from "react";

import ProductCart from "../components/products/ProductCart";
import { useState } from "react";
import Divider from "../components/utility/Divider/Divider";
// import SidebarFilter from "../components/SidebarFilter/SidebarFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts_async } from "../reducers/products/ProductsThunks";
import ReactPaginate from "react-paginate";

import ViewStyle from "../components/products/ProductFilter";
import ProductsViewContainer from "../containers/products/ProductsViewContainer";
import SidebarFilter from "../components/SidebarFilter/SidebarFilter";
import SubTitle from "../components/utility/SubTitle";
const ProductsViews = () => {
  const dispatch = useDispatch();
  const { productsResult } = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    dispatch(getProducts_async());
  }, []);

  return (
    <section className="container  mx-auto min-h-[100vh]">
      {/* <Breadcrumbs /> */}
      <Divider />

      <div className="grid grid-cols-7 gap-x-2">
        <div className=" rounded-md shadow-sm h-fit sticky top-4 p-2 border-2 hidden md:block md:col-span-2">
          <SidebarFilter />
        </div>
        <div
          className={`grid place-content-start col-span-full md:col-span-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  duration-300  gap-2 `}
        >
          <ProductsViewContainer />
        </div>
      </div>
    </section>
  );
};

export default ProductsViews;
