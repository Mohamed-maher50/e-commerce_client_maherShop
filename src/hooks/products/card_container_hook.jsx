import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishList_Async } from "../../reducers/WishList/MyWishListReducer";

const useCard_container_hook = () => {
  const dispatch = useDispatch();
  const { wishListProducts } = useSelector((state) => state.MyWishListReducer);

  useEffect(() => {
    dispatch(getWishList_Async());
  }, []);

  return [wishListProducts];
};

export default useCard_container_hook;
