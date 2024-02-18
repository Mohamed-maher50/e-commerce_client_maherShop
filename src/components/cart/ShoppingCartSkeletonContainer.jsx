import React from "react";
import SkeletonCard from "./SkeletonCard";

const ShoppingCartSkeletonContainer = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default ShoppingCartSkeletonContainer;
