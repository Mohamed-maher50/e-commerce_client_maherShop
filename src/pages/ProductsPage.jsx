import React from "react";
import Divider from "../components/utility/Divider/Divider";
import ProductsViewContainer from "../containers/products/ProductsViewContainer";
import SidebarFilter from "../components/SidebarFilter/SidebarFilter";
const ProductsViews = () => {
  return (
    <section className="container  mx-auto min-h-[100vh]">
      {/* <Breadcrumbs /> */}
      <Divider />

      <div className="grid grid-cols-9 gap-x-2">
        <div className=" rounded-md shadow-sm h-fit sticky top-4 p-2 border-2 hidden lg:block md:col-span-2">
          <SidebarFilter />
        </div>
        <div
          className={`grid place-content-start col-span-full  md:col-span-9 lg:col-span-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  duration-300  gap-2 `}
        >
          <ProductsViewContainer />
        </div>
      </div>
    </section>
  );
};

export default ProductsViews;
