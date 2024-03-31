import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { pushToParams } from "../../services/SearchParamsServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const useGetAllBrandsHook = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [brands, setBrands] = useState({});
  const nav = useNavigate();
  const clickOnBrand = (brandId) => {
    nav({
      pathname: "/products",
      search: `brand[in]=${brandId}`,
    });
  };
  const getBrands = async (query = "") => {
    return axios.get(`/api/v1/brands/${query}`);
  };

  useEffect(() => {
    setIsLoading(true);
    getBrands(`?${searchParams.toString()}&limit=8`)
      .then(({ data }) => {
        setBrands(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [searchParams]);
  const paginationHandler = ({ selected }) =>
    setSearchParams(pushToParams("page", selected + 1));

  return { brands, isLoading, clickOnBrand, paginationHandler };
};

export default useGetAllBrandsHook;
