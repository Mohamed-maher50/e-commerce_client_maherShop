import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useSubcategoriesHook = (query = "") => {
  const [subcategories, setSubcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const getSubCategories = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/api/v1/subcategories${query}`);
      setIsLoading(false);
      console.log(data);
      setSubcategories(data.data);
    } catch (error) {
      setErrors(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSubCategories();
  }, [query]);

  return {
    subcategories,
    isLoading,
    errors,
  };
};

export default useSubcategoriesHook;
