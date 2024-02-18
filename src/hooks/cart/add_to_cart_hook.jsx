import { useState } from "react";
import { addToCart_Thunk } from "../../reducers/ShopingCart/ShopingCartThunks";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const add_to_cart_hook = () => {
  const [colorIndex, setColorIndex] = useState(-1);
  const dispatch = useDispatch();
  const colorOnChange = (newIndex) => {
    setColorIndex(newIndex);
  };

  const addToCart = (productId, colors) => {
    if (colorIndex < 0 && colors.length > 0)
      return toast.warn("please choose color");
    dispatch(addToCart_Thunk({ productId, color: colors[colorIndex] }));
  };
  return [colorOnChange, colorIndex, addToCart];
};

export default add_to_cart_hook;
