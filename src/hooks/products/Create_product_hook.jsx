import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories_thunk } from "../../reducers/Categories/Thunks";
import { getBrands_thunk } from "../../reducers/Brands/BrandsThunks";
import { useState } from "react";
import { toast } from "react-toastify";
import { createProduct_Thunk } from "../../reducers/products/ProductsThunks";
import { subcategoriesBelongToCategory_Thunk } from "../../reducers/subCategories/subCategoriesThunks";

const useCreate_product_hook = () => {
  const dispatch = useDispatch();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { subCategoryBelongToCategory } = useSelector(
    (state) => state.subCategoriesReducer
  );

  const [productValues, setProductValues] = useState({
    availableColors: [],
    images: [],
  });
  const imageURls = productValues.images.map((imageFile) => {
    return URL.createObjectURL(imageFile);
  });
  const selectOnChange = (value, name) => {
    if (name == "category") setSelectedCategory(value);
    setProductValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const { categories, loading } = useSelector(
    (state) => state.categoriesReducer
  );
  console.log(productValues);
  const { brands, loading: brandLoading } = useSelector(
    (state) => state.BrandsReducer
  );
  const colorOnChange = ({ hex }) => {
    const colorExist = productValues.availableColors.includes(hex);
    setIsColorPickerOpen(false);
    if (colorExist) return toast.error("this color already exist");
    setProductValues((prev) => {
      return { ...prev, availableColors: [...prev.availableColors, hex] };
    });
  };
  const deleteColor = (index) => {
    const cloneState = [...productValues.availableColors];
    cloneState.splice(index, 1);
    setProductValues((prev) => {
      return {
        ...prev,
        availableColors: cloneState,
      };
    });
  };
  const handleImages = (e) => {
    const files = [];
    for (let index = 0; index < e.target.files.length; index++) {
      const element = e.target.files[index];
      const isExist = productValues.images.some(
        (file) => file.name == element.name
      );
      if (!isExist) files.push(e.target.files[index]);
    }
    setProductValues((prev) => {
      return {
        ...prev,
        images: [...prev.images, ...files],
      };
    });
  };
  const deleteImage = (index) => {
    const cloneState = [...productValues.images];
    cloneState.splice(index, 1);
    setProductValues((prev) => {
      return { ...prev, images: cloneState };
    });
  };
  const handleInputOnChange = (value, name) => {
    setProductValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let file in productValues) {
      data.append(file, productValues[file]);
    }
    data.append("imageCover", productValues.images[0]);
    productValues.images.forEach((file) => {
      data.append("images", file);
    });
    dispatch(createProduct_Thunk(data));
  };
  useEffect(() => {
    dispatch(getCategories_thunk());
    dispatch(getBrands_thunk());
  }, []);
  useEffect(() => {
    if (selectedCategory)
      dispatch(subcategoriesBelongToCategory_Thunk(selectedCategory));
  }, [selectedCategory]);

  console.log(productValues);
  return [
    categories,
    brands,
    colorOnChange,
    isColorPickerOpen,
    setIsColorPickerOpen,
    productValues.availableColors,
    deleteColor,
    selectOnChange,
    handleImages,
    imageURls,
    deleteImage,
    handleInputOnChange,
    handleOnSubmit,
    subCategoryBelongToCategory,
  ];
};

export default useCreate_product_hook;
