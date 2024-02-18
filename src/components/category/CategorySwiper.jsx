import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const CategorySwiper = ({ categoryId }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(
          `/api/v1/products?category=${categoryId}`
        );

        if (data) setCategoryProducts(data?.data);
      })();
    } catch (error) {
      // (error);
    }
  }, [categoryId]);

  return (
    <>
      <Products data={categoryProducts} />
    </>
  );
};

export default CategorySwiper;
