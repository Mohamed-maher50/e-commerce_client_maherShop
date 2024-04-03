import React from "react";
import useFiltrationHook from "../hooks/useFiltrationHook";

import { useSearchParams } from "react-router-dom";
import Checkbox from "./CheckboxGroup";
import StarRatings from "react-star-ratings";

const MobileFiltrationMenu = () => {
  const {
    categories,
    brands,
    clickCategoryHandler,
    handleRating,
    clickBrandHandler,
    clearFiltration,
  } = useFiltrationHook();
  const [searchParams] = useSearchParams();

  return (
    <div className="flex justify-between shadow-lg p-2 items-center">
      <div className="dropdown dropdown-hover ">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-white rounded-sm hover:bg-gray-50  m-1"
        >
          brands
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content  overflow-y-auto h-52  absolute z-40 menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <div className="h-52 overflow-auto">
            {brands?.data &&
              brands.data.map(({ name, _id }, index) => {
                let randomID = `label-${Math.round(
                  Math.random() * 500 + index
                )}`;
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
          </div>
        </ul>
      </div>
      <div className="dropdown  dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-white  rounded-sm hover:bg-gray-50 m-1"
        >
          categories
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content    relative z-50 menu p-2  shadow bg-base-100 rounded-box "
        >
          <div className="h-52 overflow-auto">
            {categories?.categories.data &&
              categories.categories.data.map(({ name, _id }, index) => {
                let randomID = `label-${Math.round(
                  Math.random() * 500 + index
                )}`;
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
                    className="text-black block"
                    checked={searchParams
                      .getAll("category[in]")
                      ?.some((id) => id == _id)}
                  />
                );
              })}
          </div>
        </ul>
      </div>

      <div className="dropdown dropdown-end dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-white  rounded-sm hover:bg-gray-50 m-1"
        >
          ratings
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
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
        </ul>
      </div>
      <div
        onClick={clearFiltration}
        role="button"
        className="  underline  text-primary rounded-sm btn-primary uppercase tracking-widest "
      >
        clear
      </div>
    </div>
  );
};

export default MobileFiltrationMenu;
