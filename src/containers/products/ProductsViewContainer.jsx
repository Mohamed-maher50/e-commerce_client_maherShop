import React from "react";
import ProductCart from "../../components/products/ProductCart";
import ReactPaginate from "react-paginate";
import SubTitle from "../../components/utility/SubTitle";
import View_products_search_hook from "../../hooks/search/View_products_search_hook";
import Select from "react-select";
import ViewStyle from "../../components/products/ProductFilter";
const sortTypeOptions = [
  {
    label: "no sorting",
    value: "",
  },
  {
    label: "price low to hight",
    value: "+price",
  },
  {
    label: "price hight to low",
    value: "-price",
  },
  {
    label: "most seller",
    value: "-sold",
  },
  {
    label: "most ratings",
    value: "-quantity",
  },
];
const ProductsViewContainer = () => {
  // const [horizontal, setHorizontal] = useState(false);
  const [productsResult, loading, onPress, getProduct, sortOnChange] =
    View_products_search_hook();

  return (
    <>
      <div className="flex justify-between col-span-full items-center">
        <SubTitle
          pathText={""}
          title={`There are ${productsResult?.data?.length} results`}
        />
        <Select
          options={sortTypeOptions}
          defaultValue={sortTypeOptions[0]}
          onChange={sortOnChange}
        />
      </div>
      <ViewStyle className="col-span-full" />
      {productsResult?.data?.map((p, index) => {
        return <ProductCart key={index} {...p} />;
      })}
      <div className="w-fit mx-auto col-span-full ">
        {!!(productsResult?.paginationResult?.numberOfPages - 1) && (
          <ReactPaginate
            breakLabel="..."
            pageClassName="px-2 py-1 text-white text-md font-bold rounded-md"
            activeClassName="bg-primary"
            onPageChange={onPress}
            pageCount={productsResult?.paginationResult?.numberOfPages - 1 || 0}
            className="flex gap-5 w-fit mx-auto"
          />
        )}
      </div>
    </>
  );
};

export default ProductsViewContainer;
