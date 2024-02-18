import React from "react";
import Label from "../../../components/utility/Label";
import ProductCard from "../../../components/dashboard/products/ProductCard";
// dashboard
const MangeProductsPage = () => {
  return (
    <div className="">
      <Label label="product management" className="underline" />
      <div className="grid grid-cols-2 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default MangeProductsPage;
