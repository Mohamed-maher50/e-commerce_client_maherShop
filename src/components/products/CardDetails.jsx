import React from "react";
import { IoBagHandleOutline, IoHeartOutline } from "react-icons/io5";
import StarRatings from "react-star-ratings";
import add_to_cart_hook from "../../hooks/cart/add_to_cart_hook";
import AvailableColors from "../AvailableColors";
const CardDetails = ({
  title,
  description,
  brand,
  quantity,
  price,
  colors,
  _id,
  ratingsAverage = 0.5,
}) => {
  const [colorOnChange, colorIndex, addToCart] = add_to_cart_hook();
  return (
    <div className="grid gap-2">
      <h1 className="text-xl">{title}</h1>
      <p>{description}</p>
      <StarRatings
        rating={ratingsAverage}
        starSpacing="1px"
        starDimension="25px"
        numberOfStars={5}
        starRatedColor={"rgb(255, 215, 0)"}
        name="rating"
      />{" "}
      {colors?.length && <div>colors: </div>}
      <AvailableColors
        colors={colors}
        onChange={colorOnChange}
        ActiveColor={colorIndex}
      />
      <div>
        <span className="text-gray-600 font-semibold capitalize text-lg">
          brand:
        </span>
        <label className="text-xl font-bold">{brand?.name}</label>
      </div>
      <hr className=" border" />
      <div className="flex justify-between">
        <span className="text-primary font-bold text-2xl">${price || ""}</span>
        <div>
          {quantity?.length ? (
            <span>Quantity : {quantity}</span>
          ) : (
            <span className="block text-warning">out of stock</span>
          )}
        </div>
      </div>
      <hr className=" border" />
      <div className="flex  gap-1 w-fit ">
        <button
          onClick={() => addToCart(_id, colors)}
          className="btn  capitalize rounded-none bg-primary text-white font-bold"
        >
          <IoBagHandleOutline className="text-xl" /> Add to cart
        </button>
        <button className="btn bg-white text-lg rounded-none">
          <IoHeartOutline />
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
