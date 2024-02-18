import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../../services/Products";
import Products from "./Products";

const CardsContainer = ({ title, query }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await getProducts(`/api/v1/products${query || ""}`);
      setProducts(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <h1 className="w-fit py-6  uppercase underline-offset-8  mx-auto font-bold text-2xl underline text-primary">
        {title}
      </h1>
      <Products data={products?.data} loading={isLoading} />
    </>
  );
};

export default CardsContainer;
