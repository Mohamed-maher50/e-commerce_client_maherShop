import { useEffect } from "react";
import { debounce } from "../../../utils/debounce";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteCategories_thunk } from "../../reducers/Categories/Thunks";
const useDeleteCategoryHook = () => {
  const [Categories, setCategories] = useState([]);
  const [CategoryLoading, setCategoryLoading] = useState(true);
  const categoryRef = useRef();
  const dispatch = useDispatch();
  let getCategories = async (query = "") => {
    try {
      setCategoryLoading(true);
      const { data } = await axios.get(`/api/v1/categories${query}`);
      setCategories(data.data);
      setCategoryLoading(false);
    } catch (error) {
      setCategoryLoading(false);
    }
  };
  let debounceGetCategories = debounce(getCategories, 500);
  useEffect(() => {
    getCategories();
  }, []);

  const handleOnChange = (value) => {
    debounceGetCategories(`?keyword=${value}`);
  };
  const handleDeleteCategory = (e) => {
    e.preventDefault();
    const selectedValue = categoryRef.current.state.selectValue[0];
    if (!selectedValue) return;
    dispatch(deleteCategories_thunk(selectedValue._id));
  };
  return {
    handleDeleteCategory,
    handleOnChange,
    CategoryLoading,
    Categories,
    categoryRef,
  };
};

export default useDeleteCategoryHook;
