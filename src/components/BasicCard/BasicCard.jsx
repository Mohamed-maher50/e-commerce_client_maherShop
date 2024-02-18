import React from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";
import RequireSignIn from "../../services/RequireSignIn";
import useCard_Hook from "../../hooks/products/Card_Hook";
import add_to_cart_hook from "../../hooks/cart/add_to_cart_hook";
import AvailableColors from "../AvailableColors";
const BasicCard = ({
  title,
  price,
  ratingsQuantity,
  imageCover,
  _id,
  loved = false,
  colors,
  object,
}) => {
  const [addToCart, handleWishList, colorOnChange, colorIndex] =
    useCard_Hook(loved);

  return (
    <div
      className={`text-sm relative duration-300 h-full rounded-md  border-2 overflow-hidden group/card flex-col gap-3 min-h-max justify-between items-end`}
    >
      <RequireSignIn>
        <div className="flex  absolute top-0 left-0 right-0 z-30 justify-between p-2 text-xl ">
          {/* <div className="badge-ghost badge">10%</div> */}
          <div
            onClick={() => handleWishList(object)}
            className="text-red-600 ms-auto cursor-pointer"
          >
            {loved ? (
              <GoHeartFill className="hover:scale-110 duration-500" />
            ) : (
              <GoHeart className="text-gray-400 hover:scale-110 duration-500" />
            )}
          </div>
        </div>
      </RequireSignIn>
      <Link to={`/products/${_id}`} className="">
        <div className="overflow-hidden max-h-[200px]">
          <img
            src={imageCover}
            className={`duration-500 h-48 mx-auto w-full group-hover/card:scale-110  `}
          />
        </div>

        <div className="flex gap-2 p-2 flex-col justify-center items-center">
          <p className="ps-4 h-16">{title}</p>
          <StarRatings
            starSpacing="1px"
            starDimension="15px"
            numberOfStars={5}
            rating={ratingsQuantity}
            starRatedColor={"rgb(109, 122, 130)"}
            name="rating"
          />
          <p className="text-xl font-bold">$ {price}</p>
        </div>
      </Link>
      <AvailableColors
        colors={colors}
        className="mx-auto w-fit grid  p-2"
        onChange={colorOnChange}
        ActiveColor={colorIndex}
      />
      <button
        onClick={() => addToCart(_id, colors)}
        className=" py-2 my-2 mt-auto mx-auto  w-fit block  bg-gray-200 uppercase whitespace-nowrap  z-10 px-2 text-sm "
      >
        Add to cart
      </button>
    </div>
  );
};

export default React.memo(BasicCard);
