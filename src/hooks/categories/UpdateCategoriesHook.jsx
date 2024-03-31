import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "../../../utils/debounce";
import { useEffect } from "react";
import axios from "axios";
import { updateCategories_thunk } from "../../reducers/Categories/Thunks";

const useUpdateCategoriesHook = () => {
  const [Categories, setCategories] = useState([]);
  const [CategoryLoading, setCategoryLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [UpdatedValues, setUpdatedValues] = useState({});
  const [Image, setImage] = useState(null);
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
  useEffect(() => {
    setImage(selectedCategory?.image);
  }, [selectedCategory]);
  const handleInputOnChange = (value) => {
    debounceGetCategories(`?keyword=${value}`);
  };
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    let form = new FormData();

    Object.entries(UpdatedValues).map(([key, value]) => {
      form.append(key, value);
    });
    try {
      await dispatch(
        updateCategories_thunk({ _id: selectedCategory._id, form })
      );
      setSelectedCategory(null);
      setUpdatedValues({});
    } catch (error) {}
  };
  const handleUpload = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setUpdatedValues((prev) => {
        return {
          ...prev,
          image: e.target.files[0],
        };
      });
    }
  };
  const resetImage = () => {
    setImage(selectedCategory.image);
    setUpdatedValues((prev) => {
      delete prev.image;
      return prev;
    });
  };
  const onChangeCategoryName = (e) => {
    setUpdatedValues((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  return {
    Categories,
    CategoryLoading,
    handleInputOnChange,
    handleUpdateCategory,
    setSelectedCategory,
    handleUpload,
    selectedCategory,
    Image,
    resetImage,
    onChangeCategoryName,
  };
};

export default useUpdateCategoriesHook;
