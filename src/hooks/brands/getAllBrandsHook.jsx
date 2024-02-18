import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands_thunk } from "../../reducers/Brands/BrandsThunks";
import { useEffect } from "react";

const useGetAllBrandsHook = () => {
  const dispatch = useDispatch();
  const { brands, loading } = useSelector((state) => state.BrandsReducer);

  useEffect(() => {
    dispatch(getBrands_thunk(`?limit=3`));
  }, []);

  const paginationHandler = (page) => {
    dispatch(getBrands_thunk(`?page=${page + 1}&limit=3`));
  };
  return [brands, loading, paginationHandler];
};

export default useGetAllBrandsHook;
