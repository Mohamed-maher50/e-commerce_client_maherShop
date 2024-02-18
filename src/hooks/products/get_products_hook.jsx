import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const use_Home_Products = (query = "") => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/products${query}`);
      setProducts(data);
    })().finally(() => {
      setLoading(false);
    });
  }, []);

  return [products, loading];
};

export default use_Home_Products;
