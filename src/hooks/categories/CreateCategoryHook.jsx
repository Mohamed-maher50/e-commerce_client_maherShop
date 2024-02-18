import { useState } from "react";
import { useRef } from "react";
import { createCategories_thunk } from "../../reducers/Categories/Thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const useCreateCategoryHook = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const url = selectedImage && URL.createObjectURL(selectedImage);
  const { status } = useSelector((state) => state.categoriesReducer);
  const categoryName = useRef(null);
  const dispatch = useDispatch();
  const handleCategoryOnChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("name", categoryName.current?.value);
    dispatch(createCategories_thunk(formData));
  };
  useEffect(() => {
    if (status == 201) {
      setSelectedImage(null);
      categoryName.current.value = "";
    }
  }, [status]);
  const deleteImage = () => {
    setSelectedImage(null);
  };
  return [url, handleSubmit, categoryName, handleCategoryOnChange, deleteImage];
};

export default useCreateCategoryHook;
