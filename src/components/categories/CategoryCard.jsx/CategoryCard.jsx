import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ _id, image }) => {
  const handleOnClick = () => {
    localStorage.setItem("catChecked", `category[in][]=${_id}`);
  };
  return (
    <Link
      to={`/products`}
      onClick={handleOnClick}
      className="rounded-full overflow-hidden h-fit block "
    >
      <div className="cursor-pointer p-5 items-center hover:scale-110 duration-500">
        <img src={image} className="  h-32 w-32   " />
      </div>
    </Link>
  );
};

export default CategoryCard;
