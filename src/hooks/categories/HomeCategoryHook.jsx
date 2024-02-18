import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories_thunk } from "../../reducers/Categories/Thunks";

const HomeCategoryHook = () => {
  const { categories, loading } = useSelector(
    (state) => state.categoriesReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories_thunk(""));
  }, []);

  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return [categories, loading, colors];
};

export default HomeCategoryHook;
