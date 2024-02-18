import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories_thunk } from "../../reducers/Categories/Thunks";

const useAllCategoriesHook = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(
    (state) => state.categoriesReducer
  );
  const paginationHandler = (page) => {
    dispatch(getCategories_thunk(`?page=${page + 1}`));
  };
  useEffect(() => {
    dispatch(getCategories_thunk(`?limit=10`));
  }, []);
  return [categories, loading, paginationHandler];
};

export default useAllCategoriesHook;
