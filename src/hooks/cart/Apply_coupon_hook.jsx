import { useRef } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon_Thunk } from "../../reducers/ShopingCart/ShopingCartThunks";

const useApply_coupon_hook = () => {
  const couponValue = useRef(null);
  const dispatch = useDispatch();
  const handleApplyCoupon = (e) => {
    e.preventDefault();

    dispatch(applyCoupon_Thunk(couponValue.current.value));
  };
  return [handleApplyCoupon, couponValue];
};

export default useApply_coupon_hook;
