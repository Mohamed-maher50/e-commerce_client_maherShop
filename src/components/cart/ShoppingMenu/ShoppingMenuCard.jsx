import React from "react";
import Shopping_Card_hook from "../../../hooks/cart/Shopping_Card_hook";
import StarRatings from "react-star-ratings";

const ShoppingMenuCard = ({ color, count, product = {}, price, _id }) => {
  const { brand, category, imageCover, title, ratingsAverage } = product;
  const [deleteItem, updateAmount, handleAmountChange, amount] =
    Shopping_Card_hook(count);
  return (
    <div>
      <div className="flex gap-3 p-4">
        <img src={imageCover} className="w-28 h-28" />
        <div>
          <a href="#">{title}</a>
          <h1 className="text-black">${price}</h1>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center bg-slate-50 shadow-sm rounded-md w-fit p-2 gap-2">
              <span className="text-gray-700 font-bold text-base">Qty:</span>
              <span className="lowercase font-bold text-gray-500">{count}</span>
            </div>

            <div className="flex  flex-wrap items-center bg-slate-50 shadow-sm rounded-md w-fit p-2 gap-2">
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
        </div>
        <button onClick={() => deleteItem(_id)}>X</button>
      </div>
    </div>
  );
};

export default ShoppingMenuCard;
