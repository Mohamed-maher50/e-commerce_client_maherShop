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
      <div className="cursor-pointer  items-center hover:scale-95 duration-500">
        <img src={image} className="    " />
      </div>
    </Link>
  );
};

export default CategoryCard;
