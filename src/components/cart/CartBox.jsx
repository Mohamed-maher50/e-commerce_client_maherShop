import React from "react";

import { useDispatch } from "react-redux";
const CartBox = ({
  imageCover,
  title,
  price,
  quantity,
  _id,
  description,
  decreaseQty,
  increaseQty,
  productId,
}) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
  };

  return (
    <tr>
      <td className="md:flex">
        <img
          src={imageCover}
          className="w-40 border-2 min-w-[100px] max-h-40 "
        />
        <h1 className="max-w-md ps-3">{title}</h1>
        <p>{description}</p>
      </td>

      <td>EG {price}</td>
      <td>
        <button
          className="btn"
          onClick={() => increaseQty(productId, quantity)}
        >
          +
        </button>
        <input
          onChange={handleChange}
          value={quantity}
          className="input w-16"
        />
        <button
          className="btn"
          onClick={() => decreaseQty(productId, quantity)}
        >
          -
        </button>
      </td>

      <td>
        <button
          className="btn-sm btn"
          onClick={() => dispatch(removeFromCart_async(productId))}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default CartBox;
