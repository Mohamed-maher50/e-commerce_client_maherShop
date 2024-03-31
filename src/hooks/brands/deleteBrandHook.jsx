import { debounce } from "../../../utils/debounce";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { deleteBrand_thunk } from "../../reducers/Brands/BrandsThunks";
import axios from "axios";
import { useEffect } from "react";

const useDeleteBrandHook = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const brandValueRef = useRef();
  const dispatch = useDispatch();
  const getBrands = async (query = "") => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/api/v1/brands${query}`);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };
  const debounceGetBrands = debounce(getBrands, 1000);
  useEffect(() => {
    getBrands().then(({ data }) => {
      setBrands(data);
    });
  }, []);
  const handleSearchOnChange = (value) => {
    debounceGetBrands(`?keyword=${value}`).then(({ data }) => {
      setBrands(data);
    });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    if (brandValueRef.current.state.selectValue[0])
      dispatch(
        deleteBrand_thunk(brandValueRef.current.state.selectValue[0]._id)
      );
  };
  return {
    handleDelete,
    handleSearchOnChange,
    isLoading,
    brands,
    brandValueRef,
  };
};

export default useDeleteBrandHook;
