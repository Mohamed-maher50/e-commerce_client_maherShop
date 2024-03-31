import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories_thunk } from "../../reducers/Categories/Thunks";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { pushToParams } from "../../services/SearchParamsServices";

const useAllCategoriesHook = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate();
  const { categories, loading } = useSelector(
    (state) => state.categoriesReducer
  );
  const paginationHandler = ({ selected }) =>
    setSearchParams(pushToParams("page", selected + 1));

  const handleClickCategory = (id) => {
    nav(
      {
        pathname: "/products",
        search: `?category[in]=${id}`,
      },
      {
        replace: true,
      }
    );
  };
  useEffect(() => {
    dispatch(getCategories_thunk(`?${searchParams.toString()}&limit=16`));
  }, [searchParams]);
  return { categories, loading, paginationHandler, handleClickCategory };
};

export default useAllCategoriesHook;
