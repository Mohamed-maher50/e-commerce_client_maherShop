import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishList_Async } from "../../reducers/WishList/MyWishListReducer";
import BasicCard from "../../components/BasicCard/BasicCard";

const MyWishList = () => {
  const dispatch = useDispatch();
  const { wishListProducts } = useSelector((state) => state.MyWishListReducer);
  useEffect(() => {
    (async () => {
      dispatch(getWishList_Async());
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 ">
      {wishListProducts?.map((product, index) => (
        <BasicCard {...product} key={index} loved={true} object={product} />
      ))}
    </div>
  );
};

export default MyWishList;
