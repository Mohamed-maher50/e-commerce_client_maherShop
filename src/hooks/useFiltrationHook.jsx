import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories_thunk } from "../reducers/Categories/Thunks";
import { getBrands_thunk } from "../reducers/Brands/BrandsThunks";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../utils/debounce";
import { useSearchParams } from "react-router-dom";
import { pushToParams } from "../services/SearchParamsServices";
import { useLocation } from "react-router-dom";

const useFiltrationHook = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const nav = useNavigate();
  const location = useLocation();
  const { brands } = useSelector((state) => state.BrandsReducer);
  const categories = useSelector((state) => state.categoriesReducer);
  const clickCategoryHandler = (target, id) => {
    if (target.checked) {
      setSearch((prev) => {
        prev.append("category[in]", id);
        return prev;
      });
    } else {
      const newCheckedCategories = search
        .getAll(["category[in]"])
        .filter((ctId) => ctId != id);

      setSearch((prev) => {
        if (!newCheckedCategories.length) {
          prev.delete("category[in]");
          return prev;
        }
        prev.delete("category[in]");
        newCheckedCategories.forEach((id) => {
          prev.append("category[in]", id);
        });

        return prev;
      });
    }
  };
  useEffect(() => {
    dispatch(getCategories_thunk());
    dispatch(getBrands_thunk());
  }, []);

  const clearFiltration = () => {
    localStorage.removeItem("filtration");
    setSearch((prev) => {
      if (prev.has("keyword")) {
        let newSearchParams = new URLSearchParams();
        newSearchParams.set("keyword", prev.get("keyword"));
        return newSearchParams;
      }
    });
  };

  const clickBrandHandler = (target, id) => {
    if (target.checked) {
      setSearch((prev) => {
        prev.append("brand[in]", id);
        return prev;
      });
    } else {
      const newBrands = search
        .getAll(["brand[in]"])
        .filter((brandId) => brandId != id);

      setSearch((prev) => {
        if (!newBrands.length) {
          prev.delete("brand[in]");
          return prev;
        }
        prev.delete("brand[in]");
        newBrands.forEach((id) => {
          prev.append("brand[in]", id);
        });

        return prev;
      });
    }
  };
  const onChangeState = (key, value) => setSearch(pushToParams(key, value));

  const handleSortBy = ({ value }) => {
    setSearch(pushToParams("sort", value));
  };
  const handleRating = (val) => {
    setSearch(pushToParams("ratingsQuantity", val));
  };
  const debounceSearch = debounce((val) => {
    nav({
      pathname: "/products",
      search: (val && `keyword=${val}`) || "",
    });
  }, 500);
  const handleSearch = (val) => {
    if (location.pathname != "/products") debounceSearch(val);
    else setSearch(pushToParams("keyword", val));
  };

  return {
    categories,
    brands,
    clickCategoryHandler,
    clickBrandHandler,
    searchParams: search,
    clearFiltration,
    onChangeState,
    handleSortBy,
    handleSearch,
    handleRating,
  };
};

export default useFiltrationHook;
