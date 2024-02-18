import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories_thunk } from "../../reducers/Categories/Thunks";
import { useRef } from "react";
import { useState } from "react";

const Add_Subcategories_hook = () => {
  const { categories, loading } = useSelector(
    (state) => state.categoriesReducer
  );
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSubmitCreateSubcategories = (e) => {
    e.preventDefault();
    selectedCategory({});
  };
  const subcategoriesName = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories_thunk());
  }, []);
  const categoryOnChange = (value) => {
    setSelectedCategory(value);
  };
  return [
    categories,
    loading,
    subcategoriesName,
    handleSubmitCreateSubcategories,
    categoryOnChange,
    selectedCategory,
  ];
};

export default Add_Subcategories_hook;
