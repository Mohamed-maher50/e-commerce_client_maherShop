import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-2 h-[200px] flex-nowrap overflow-hidden flex gap-4">
      {new Array(10).fill(0).map((_, index) => {
        return (
          <div
            key={index}
            className="skeleton w-24 h-24 rounded-full shrink-0"
          ></div>
        );
      })}
    </div>
  );
};

export default SkeletonCard;
