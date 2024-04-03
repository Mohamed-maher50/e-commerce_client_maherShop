import React from "react";

import PriceInputs from "../PriceInputs";
import useFiltrationHook from "../../hooks/useFiltrationHook";
import Collapse from "../Collapse";

import Checkbox from "../CheckboxGroup";
import StarRatings from "react-star-ratings";

const SidebarFilter = () => {
  const {
    categories,
    brands,
    clickCategoryHandler,
    onChangeState,
    clearFiltration,
    clickBrandHandler,
    searchParams,
    handleRating,
  } = useFiltrationHook();

  return (
    <div className="grid gap-y-2">
      <Collapse title="Categories" className="">
        {categories?.categories.data &&
          categories.categories.data.map(({ name, _id }, index) => {
            let randomID = `label-${Math.round(Math.random() * 500 + index)}`;
            return (
              <Checkbox
                key={index}
                id={randomID}
                value={_id}
                onChange={(e) => clickCategoryHandler(e.target, _id)}
                label={name}
                labelProps={{
                  htmlFor: randomID,
                }}
                checked={searchParams
                  .getAll("category[in]")
                  ?.some((id) => id == _id)}
              />
            );
          })}
      </Collapse>
      <Collapse title="brands">
        {brands?.data &&
          brands.data.map(({ name, _id }, index) => {
            let randomID = `label-${Math.round(Math.random() * 500 + index)}`;
            return (
              <Checkbox
                key={index}
                value={_id}
                id={randomID}
                className="cursor-pointer"
                onClick={(e) => clickBrandHandler(e.target, _id)}
                label={name}
                labelProps={{
                  htmlFor: randomID,
                  className: "cursor-pointer",
                }}
                checked={searchParams
                  .getAll("brand[in]")
                  ?.some((id) => id == _id)}
              />
            );
          })}
      </Collapse>

      <div className="collapse p-3 rounded-md collapse-arrow border border-base-300 bg-base-200">
        {new Array(5).fill(0).map((val, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer hover:bg-base-300 duration-500 px-1"
              onClick={() => handleRating(5 - index)}
            >
              <StarRatings
                numberOfStars={5}
                starDimension="20px"
                rating={5 - index}
                starRatedColor="orange"
              />
            </div>
          );
        })}
      </div>
      <div className="collapse p-3 rounded-md collapse-arrow border border-base-300 bg-base-200">
        <PriceInputs
          minimumOnChange={onChangeState}
          maximumOnChange={onChangeState}
          minValue={searchParams.get("price[gte]") || 0}
          maxValue={searchParams.get("price[lte]") || null}
        />
      </div>

      <button
        onClick={clearFiltration}
        className="btn btn-outline btn-primary text-white uppercase tracking-widest hover:text-white"
      >
        clear
      </button>
    </div>
  );
};

export default SidebarFilter;
