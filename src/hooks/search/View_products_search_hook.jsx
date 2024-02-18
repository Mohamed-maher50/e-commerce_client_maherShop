import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts_async } from "../../reducers/products/ProductsThunks";

const View_products_search_hook = () => {
  let limit = 8;
  const { productsResult, loading } = useSelector(
    (state) => state.ProductsReducer
  );

  const query = {};
  let pricefromString = "",
    priceToString = "";
  let word = "",
    queryCat = "",
    brandCat = "",
    priceTo = "",
    priceFrom = "";
  let sortType = "",
    sort;
  const getProduct = async () => {
    getStorage();
    sortData();

    dispatch(
      getProducts_async(
        `?sort=${sortType}&limit=8&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}&page=`
      )
    );
  };
  useEffect(() => {
    getProduct();
  }, []);
  const onPress = async ({ selected }) => {
    getStorage();
    sortData();

    dispatch(
      getProducts_async(
        `?sort=${sort}&limit=3&page=${selected}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  };
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "السعر من الاقل للاعلي") sort = "+price";
    else if (sortType === "السعر من الاعلي للاقل") sort = "-price";
    else if (sortType === "") sort = "";
    else if (sortType === "الاكثر مبيعا") sort = "-sold";
    else if (sortType === "الاعلي تقييما") sort = "-quantity";
  };

  const dispatch = useDispatch();
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
      query.keyword = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("catChecked") != null) {
      queryCat = localStorage.getItem("catChecked");
    }
    if (localStorage.getItem("brandChecked") != null)
      brandCat = localStorage.getItem("brandChecked");
    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");
    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");
    if (priceFrom === "" || priceFrom <= 0) {
      pricefromString = "";
    } else {
      pricefromString = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };
  const SortOnChange = ({ value }) => {
    localStorage.setItem("sortType", value);
    sortType = value;

    getProduct();
  };

  return [productsResult, loading, onPress, getProduct, SortOnChange];
};

export default View_products_search_hook;
