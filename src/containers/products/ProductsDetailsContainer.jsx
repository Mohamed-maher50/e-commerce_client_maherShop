import React from "react";
import CardDetails from "../../components/products/CardDetails";
import { useParams } from "react-router-dom";
import useProduct_details_hook from "../../hooks/products/product_details_hook";

const ProductsDetailsContainer = () => {
  const { id } = useParams();
  const [product] = useProduct_details_hook(id);
  return (
    <>
      {product.loading ? (
        <span>Loading...</span>
      ) : product.details?._id ? (
        <CardDetails {...product.details} />
      ) : (
        "not found this product"
      )}
    </>
  );
};

export default ProductsDetailsContainer;
