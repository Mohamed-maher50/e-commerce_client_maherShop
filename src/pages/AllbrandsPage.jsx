import React from "react";
import useGetAllBrandsHook from "../hooks/brands/getAllBrandsHook";

import Pagination from "../components/Pagination";

import ThumbnailBox from "../components/ThumbnailBox";
let SkeletonCategory = () =>
  Array.from({ length: 20 }).map((_, index) => {
    return (
      <div
        key={index}
        className="h-20 w-20  aspect-square skeleton bg-secondary opacity-50"
      ></div>
    );
  });
const AllBrandsPage = () => {
  const { brands, isLoading, clickOnBrand, paginationHandler } =
    useGetAllBrandsHook();

  return (
    <section>
      <div className="container mx-auto grid gap-2 ">
        <div className="grid grid-cols-3 sm:grid-cols-6 place-content-end md:grid-cols-7 lg:grid-cols-8 bg-white p-2 rounded-md shadow-sm  gap-2">
          {isLoading ? (
            <SkeletonCategory />
          ) : brands.data ? (
            brands?.data?.map((brand, index) => {
              return (
                <ThumbnailBox
                  key={index}
                  {...brand}
                  onClick={() => clickOnBrand(brand._id)}
                />
              );
            })
          ) : (
            <div className="text-xl text-gray-400 py-5 capitalize w-fit mx-auto font-bold col-span-full">
              can't found any brands
            </div>
          )}

          {brands?.paginationResult &&
            brands.paginationResult.numberOfPages > 1 && (
              <div className="col-span-full mt-16 self-end">
                <Pagination
                  onPageChange={paginationHandler}
                  pageCount={brands.paginationResult.numberOfPages}
                />
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default AllBrandsPage;
