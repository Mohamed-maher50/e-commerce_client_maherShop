import useAllCategoriesHook from "../hooks/categories/AllCategoriesHook";
import Pagination from "../components/Pagination";

import ThumbnailBox from "../components/ThumbnailBox";

let SkeletonCategory = () =>
  Array.from({ length: 20 }).map((_, index) => {
    return (
      <div
        key={index}
        className="h-28  skeleton bg-secondary opacity-50 w-full"
      ></div>
    );
  });
const AllCategoriesPage = () => {
  let { categories, loading, paginationHandler, handleClickCategory } =
    useAllCategoriesHook();

  return (
    <section>
      <div className="container mx-auto grid gap-2 ">
        <div className="grid grid-cols-3 sm:grid-cols-6 place-content-end md:grid-cols-7 lg:grid-cols-8 bg-white p-2 rounded-md shadow-sm  gap-2">
          {loading ? (
            <SkeletonCategory />
          ) : categories.data ? (
            categories?.data?.map((category, index) => {
              return (
                <ThumbnailBox
                  key={index}
                  {...category}
                  onClick={() => handleClickCategory(category._id)}
                />
              );
            })
          ) : (
            <div className="text-xl text-gray-400 py-5 capitalize w-fit mx-auto font-bold col-span-full">
              can't found any category
            </div>
          )}

          {categories?.paginationResult &&
            categories.paginationResult.numberOfPages > 1 && (
              <div className="col-span-full mt-16 self-end">
                <Pagination
                  onPageChange={paginationHandler}
                  pageCount={categories.paginationResult.numberOfPages}
                />
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesPage;
