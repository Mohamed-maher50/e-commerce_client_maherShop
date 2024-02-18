import React from "react";
import useGetAllBrandsHook from "../hooks/brands/getAllBrandsHook";
import ReactPaginate from "react-paginate";

const AllBrandsPage = () => {
  const [brands, loading, paginationHandler] = useGetAllBrandsHook();

  return (
    <section>
      <div className="container mx-auto grid gap-5 ">
        <div className="grid grid-cols-3 md:grid-cols-4  gap-2">
          {brands?.data?.map((category, index) => {
            return (
              <div key={index}>
                <img src={category.image} alt={category.name} />
              </div>
            );
          })}
        </div>
        {brands &&
          brands.paginationResult &&
          brands.paginationResult.numberOfPages > 1 && (
            <ReactPaginate
              pageCount={brands.paginationResult.numberOfPages}
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              onPageChange={({ selected }) => paginationHandler(selected)}
              breakClassName="break-me"
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              containerClassName="pagination"
              subContainerClassName="pages pagination"
              activeClassName="active"
            />
          )}
      </div>
    </section>
  );
};

export default AllBrandsPage;
