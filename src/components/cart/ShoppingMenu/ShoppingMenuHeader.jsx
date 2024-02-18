import React from "react";

const ShoppingMenuHeader = ({
  length = 0,
  totalCartPrice,
  totalAfterDiscount,
}) => {
  return (
    <>
      <li className="whitespace-nowrap flex ">
        <span className="whitespace-nowrap btn-disabled">
          <span className="text-sm">Cart Subtotal :</span>
          <span className="text-black">
            {totalCartPrice || totalAfterDiscount}$
          </span>
          <span>items</span>
          <span className="text-black">{length}</span>
        </span>
      </li>
    </>
  );
};

export default ShoppingMenuHeader;
