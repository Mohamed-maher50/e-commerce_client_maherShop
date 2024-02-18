import React from "react";

const SkeletonCard = () => {
  return (
    <div className="h-80 flex flex-nowrap">
      <div className="flex flex-col gap-4 w-56">
        <div className="skeleton h-52 w-full"></div>
        <div className="skeleton h-6 "></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
