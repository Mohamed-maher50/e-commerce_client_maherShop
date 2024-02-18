import React from "react";
import useApply_coupon_hook from "../../hooks/cart/Apply_coupon_hook";

const ApplyCouponCard = () => {
  const [handleApplyCoupon, couponValue] = useApply_coupon_hook();
  return (
    <form
      onSubmit={handleApplyCoupon}
      className="gap-2 flex flex-col w-full  p-2 rounded-md flex-wrap"
    >
      <input
        ref={couponValue}
        type="text"
        placeholder="Apply coupon"
        className="input input-primary "
      />
      <button className="btn btn-primary text-lg text-white" type="submit">
        Apply
      </button>
    </form>
  );
};

export default ApplyCouponCard;
