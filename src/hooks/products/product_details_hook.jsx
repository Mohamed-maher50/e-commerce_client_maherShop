import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../reducers/products/productDetails/ProductsDetailsThunk";

const useProduct_details_hook = (id) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ProductDetailsReducer);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id]);
  return [state.product];
};

export default useProduct_details_hook;
