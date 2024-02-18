import React from "react";
import Breadcrumbs from "../components/utility/Breadcrumbs/Index";
import { useParams } from "react-router-dom";
import CreateReview from "../components/Review/CreateReview";
import Reviews from "../components/Review/Reviews";
import useProduct_details_hook from "../hooks/products/product_details_hook";
import CardDetails from "../components/products/CardDetails";
import ProductsContainer from "../containers/products/ProductsContainer";
import SubTitle from "../components/utility/SubTitle";
const ProductPage = () => {
  const { id } = useParams();
  const [product] = useProduct_details_hook(id);

  return (
    <>
      <div className="container mx-auto"></div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-9  ">
          <div className="md:col-span-3 ">
            <img
              src={product?.details?.imageCover}
              alt="product"
              className="h-96 w-full"
            />
          </div>
          <div className="md:col-span-4 p-4 flex flex-col gap-2">
            {product.loading ? (
              <span>Loading...</span>
            ) : product.details?._id ? (
              <CardDetails {...product.details} />
            ) : (
              "not found this product"
            )}
          </div>
          <div className="hidden md:block">box</div>
        </div>
        <CreateReview productId={id} reviews={product?.details?.reviews} />
        <Reviews productId={id} reviews={product?.details?.reviews} />
        {product?.details?.category && (
          <>
            <SubTitle title={"products as you like"} />
            <ProductsContainer
              query={`?category=${product?.details?.category}`}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ProductPage;
