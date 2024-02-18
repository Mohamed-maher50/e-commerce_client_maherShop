import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Shopping_Card_hook from "../../hooks/cart/Shopping_Card_hook";

import StarRatings from "react-star-ratings";
const ShoppingCard = ({ color, count, product = {}, price, _id }) => {
  const { brand, category, imageCover, title, ratingsAverage } = product;
  const [deleteItem, updateAmount, handleAmountChange, amount] =
    Shopping_Card_hook(count);
  return (
    <div className="flex-row  max-md:grid card overflow-hidden   bg-white  shadow-md ">
      <AiOutlineClose
        onClick={() => deleteItem(_id)}
        className="absolute right-2 text-xl cursor-pointer p-2 box-content duration-500  hover:shadow-md rounded-md top-2"
      />
      <figure className="w-48 max-md:mx-auto  h-48 ">
        <img src={imageCover} />
      </figure>
      <div className="  w-full card-body">
        <h1 className="card-title">
          {title?.length > 50 ? title?.slice(0, 50) + "..." : title}
        </h1>
        <div className="card-compact flex flex-wrap gap-2">
          <div className="flex items-center bg-slate-50 shadow-sm rounded-md w-fit p-2 gap-2">
            <span className="text-gray-700 font-bold text-base">Category:</span>
            <span className="lowercase font-bold text-gray-500">
              {category.name}
            </span>
          </div>
          <div className="flex items-center bg-slate-50 shadow-sm rounded-md w-fit p-2 gap-2">
            <span className="text-gray-700 font-bold text-base">brand:</span>
            <span className="lowercase font-bold text-gray-500">
              {brand.name}
            </span>
          </div>
          <div className="flex items-center bg-slate-50 shadow-sm rounded-md w-fit p-2 gap-2">
            <span className="text-gray-700 font-bold text-base">rating:</span>
            <span className="lowercase font-bold text-gray-500">
              <StarRatings
                rating={ratingsAverage}
                numberOfStars={5}
                starDimension="15px"
                starRatedColor="gold"
                starSpacing="1px"
              />
            </span>
          </div>
          <div className="flex items-center bg-slate-50 shadow-sm rounded-md w-fit p-2 gap-2">
            <span className="text-gray-700 font-bold text-base capitalize">
              color:
            </span>
            <span
              className="w-6 h-6 block rounded-full shadow-md"
              style={{
                background: color,
              }}
            ></span>
          </div>
          <div className="flex items-center bg-slate-200 shadow-sm rounded-md w-fit p-2 gap-2">
            <span className="text-gray-700 font-bold text-base">price:</span>
            <span className="lowercase font-bold text-primary text-lg">
              ${price}
            </span>
          </div>{" "}
          <div className="flex gap-2">
            <input
              onChange={handleAmountChange}
              className="w-20  input-bordered py-0 input"
              type="number"
              value={amount}
              min={1}
            />
            <button
              className="btn btn-primary text-white"
              onClick={() => updateAmount(_id)}
            >
              apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
