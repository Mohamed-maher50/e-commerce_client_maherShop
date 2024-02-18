import { useEffect } from "react";
import View_products_search_hook from "./View_products_search_hook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { debounce } from "../../../utils/debounce";

const Navbar_search_hook = () => {
  const [productsResult, loading, onPress, getProduct, SortOnChange] =
    View_products_search_hook();
  const debounceSearch = debounce(getProduct, 2000);
  const [searchWord, setSearchWord] = useState("");
  const nav = useNavigate();
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
    localStorage.setItem("searchWord", e.target.value);
    if (location.pathname != "/products") nav("/products");
  };
  useEffect(() => {
    debounceSearch();
  }, [searchWord]);
  return [handleOnChange];
};

export default Navbar_search_hook;
