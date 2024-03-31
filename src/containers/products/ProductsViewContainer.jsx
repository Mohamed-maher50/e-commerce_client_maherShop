import React from "react";
import SubTitle from "../../components/utility/SubTitle";
import SortBy from "./SortBy";
import { useDispatch, useSelector } from "react-redux";
import BasicCard from "../../components/BasicCard/BasicCard";

import { useSearchParams } from "react-router-dom";

import { useEffect } from "react";
import { getProducts_async } from "../../reducers/products/ProductsThunks";
import Pagination from "../../components/Pagination";
import { pushToParams } from "../../services/SearchParamsServices";

const ProductsViewContainer = () => {
  const { productsResult, loading } = useSelector(
    (state) => state.ProductsReducer
  );
  const dispatch = useDispatch();
  const { paginationResult } = productsResult;

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(getProducts_async(`?${searchParams.toString()}&limit=8`));
  }, [searchParams]);

  return (
    <>
      <div className="flex justify-between col-span-full items-center">
        <SubTitle
          pathText={""}
          title={` ${
            productsResult?.data?.length ? "There are" : "No"
          } results`}
        />
        <SortBy />
      </div>
      {/* <ViewStyle className="col-span-full" /> */}
      {productsResult?.data?.map((p, index) => {
        return <BasicCard key={index} {...p} />;
      })}

      <div className="w-fit mx-auto col-span-full ">
        {paginationResult && paginationResult.numberOfPages > 1 && (
          <div className="col-span-full mt-16 self-end">
            <Pagination
              onPageChange={({ selected }) => {
                console.log(selected);
                setSearchParams(pushToParams("page", selected + 1));
              }}
              pageCount={paginationResult.numberOfPages}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsViewContainer;
