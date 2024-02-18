import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../reducers/ShopingCart/ShopCartReducer";
import { logOut } from "../../reducers/user/userReducer";
import { submitLocalProducts } from "../../reducers/ShopingCart/ShopingCartThunks";
import { useEffect } from "react";

const useNavbar_Hook = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(submitLocalProducts());
  }, [user]);
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(updateCart([]));
  };
  return [user, handleLogOut];
};

export default useNavbar_Hook;
