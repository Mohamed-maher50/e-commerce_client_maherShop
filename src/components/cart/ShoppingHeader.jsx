import React from "react";
import ApplyCouponCard from "../coupon/ApplyCouponCard";
import Label from "../utility/Label";
import { Link } from "react-router-dom";

const ShoppingHeader = ({
  totalCartPrice,
  totalAfterDiscount,
  coupon,
  _id,
}) => {
  return (
    <div className="flex gap-5 mt-4 p-5 flex-wrap bg-white shadow-md rounded-md items-center  justify-between ">
      <div className="flex border-b items-center w-full justify-between">
        <Label className="" label="total price" />
        <div
          className={`${
            totalAfterDiscount && "line-through "
          } font-bold text-lg text-gray-500 `}
        >
          {totalCartPrice}$
        </div>
      </div>

      {coupon && (
        <>
          <div className="w-full border-b flex items-center justify-between">
            <Label label="coupon:" className="" />
            <div className="text-green-300  font-extrabold   p-2  shadow-sm  text-xl ">
              {coupon}
            </div>
          </div>
        </>
      )}
      {totalAfterDiscount && (
        <div className=" flex items-center justify-between w-full">
          <Label label="after discount :" />
          <div className={`font-bold text-gray-600 text-lg `}>
            {totalAfterDiscount}$
          </div>
        </div>
      )}
      {!coupon && <ApplyCouponCard />}
      <Link
        to={`/checkout/cart/${_id}`}
        className="btn btn-primary text-white w-full btn-md capitalize"
      >
        go to Pay
      </Link>
    </div>
  );
};

export default ShoppingHeader;
