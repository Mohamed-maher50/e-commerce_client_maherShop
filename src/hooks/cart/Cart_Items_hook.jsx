import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetShopCart } from "../../reducers/ShopingCart/ShopingCartThunks";
import { useState } from "react";
const useCart_Items_hook = (limit) => {
  const { items, loading, cart } = useSelector((state) => state.shoppingCart);
  if (!limit) limit = items.length;
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.floor(items.length / limit);
  const startSlice = limit * pageNumber;
  const sliceOfItems = items.slice(startSlice, startSlice + limit);
  const dispatch = useDispatch();
  const nextPage = () => {
    if (pageNumber < pageCount) {
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };
  useEffect(() => {
    dispatch(GetShopCart());
  }, []);
  return [sliceOfItems, loading, cart, nextPage, prevPage];
};

export default useCart_Items_hook;
