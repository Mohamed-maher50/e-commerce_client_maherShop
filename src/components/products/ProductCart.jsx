/* eslint-disable react/prop-types */
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from "react-router-dom";
const ProductCart = ({
  horizontal,
  imageCover,
  title,
  price,
  description,
  quantity,
  ratingsQuantity,
  _id,
}) => {
  if (description?.length) description.slice(0, 200);

  return (
    <Link
      to={`/products/${_id}`}
      className={`group/item min-h-full text-sm duration-300 grid gap-y-2   ${
        horizontal ? " col-span-full grid-cols-4 gap-3" : ""
      }`}
    >
      <img
        src={imageCover}
        className={`group-hover/item:shadow-2xl  ${
          horizontal ? "col-span-1" : "col-span-full"
        } duration-500 `}
      />
      <div className={`${horizontal ? "col-span-3 text-start gap-2" : ""}`}>
        <p>{title}</p>
        <p className=" rounded-lg  p-2 text-xs ">
          {description?.length >= 200
            ? description
            : description?.slice(0, 200)}{" "}
        </p>
        {quantity}
        <StarRatings
          starSpacing="1px"
          starDimension="15px"
          numberOfStars={6}
          rating={ratingsQuantity}
          starRatedColor={"rgb(109, 122, 130)"}
          name="rating"
        />
        {/* <p className="line-through text-sm text-gray-400">EGP 28,499.00</p> */}
        <p>Special Price EGP {price}</p>
        <div
          className={`w-fit ${
            horizontal ? " " : "mx-auto"
          } flex relative gap-x-2 duration-500`}
        >
          <button className=" bg-gray-300 px-3 translate-x-[50px] group-hover/item:translate-x-0 duration-500">
            <CiHeart />
          </button>
          <button className=" py-2  bg-gray-200 uppercase whitespace-nowrap relative z-10 px-2 text-sm ">
            add to cart
          </button>
          <button className=" bg-gray-300 px-3 -translate-x-[50px] z-0  group-hover/item:translate-x-0 duration-500">
            <SiSimpleanalytics />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
