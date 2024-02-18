import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBrand_thunk } from "../../reducers/Brands/BrandsThunks";

const useCreate_brand_hook = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const url = selectedImage && URL.createObjectURL(selectedImage);
  const brandName = useRef(null);
  const dispatch = useDispatch();
  const handleBrandOnChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("name", brandName.current?.value);
    dispatch(createBrand_thunk(formData));
  };
  const deleteImage = () => {
    setSelectedImage(null);
  };
  return [handleBrandOnChange, submitForm, brandName, url, deleteImage];
};

export default useCreate_brand_hook;
