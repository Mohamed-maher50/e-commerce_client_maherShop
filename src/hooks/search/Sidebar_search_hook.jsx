import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories_thunk } from "../../reducers/Categories/Thunks";
import { getBrands_thunk } from "../../reducers/Brands/BrandsThunks";
import { useState } from "react";
import View_products_search_hook from "./View_products_search_hook";

const Sidebar_search_hook = () => {
  const dispatch = useDispatch();

  const [productsResult, loading, onPress, getProduct] =
    View_products_search_hook();

  const brands = useSelector((state) => state.BrandsReducer);
  const categories = useSelector((state) => state.categoriesReducer);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const clickCategoryHandler = (target, id) => {
    if (target.checked) {
      setCheckedCategories((prev) => [...prev, id]);
    } else {
      setCheckedCategories((prev) => prev.filter((catId) => catId != id));
    }
  };
  const [price, setPrice] = useState({});
  const [checkedBrands, setCheckedBrands] = useState([]);

  var queryCat = "",
    queryBrand = "";
  useEffect(() => {
    queryBrand = checkedBrands.map((val) => "brand[in][]=" + val).join("&");
    if (checkedBrands.length != 0)
      localStorage.setItem("brandChecked", queryBrand);
    else localStorage.removeItem("brandChecked");
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [checkedBrands.length]);
  useEffect(() => {
    queryCat = checkedCategories
      .map((val) => "category[in][]=" + val)
      .join("&");

    if (checkedCategories.length != 0)
      localStorage.setItem("catChecked", queryCat);
    else localStorage.removeItem("catChecked");
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [checkedCategories.length]);
  const clickBrandHandler = (target, id) => {
    if (target.checked) {
      setCheckedBrands((prev) => [...prev, id]);
    } else {
      setCheckedBrands((prev) => prev.filter((catId) => catId != id));
    }
  };
  const priceFrom = (val) => {
    localStorage.setItem("priceFrom", val);
    setPrice((prev) => ({ ...prev, from: val }));
  };
  const priceTo = (val) => {
    setPrice((prev) => ({ ...prev, to: val }));
    localStorage.setItem("priceTo", val);
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [price]);
  useEffect(() => {
    dispatch(getCategories_thunk());
    dispatch(getBrands_thunk());
  }, []);

  return [
    categories,
    brands,
    clickCategoryHandler,
    clickBrandHandler,
    priceTo,
    priceFrom,
  ];
};

export default Sidebar_search_hook;
