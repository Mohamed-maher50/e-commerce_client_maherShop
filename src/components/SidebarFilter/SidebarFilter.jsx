import React from "react";
import DropDown from "../utility/DropDown";
import PriceInputs from "../PriceInputs";
import Sidebar_search_hook from "../../hooks/search/Sidebar_search_hook";
const SidebarFilter = () => {
  const [
    categoriesState,
    brandsState,
    setCheckedCategories,
    setCheckedBrand,
    priceTo,
    priceFrom,
  ] = Sidebar_search_hook();

  return (
    <div className="grid gap-y-2">
      <DropDown open={true} label={"categories"} value={"asdf"}>
        <DropDown.Content className="flex flex-col justify-start text-start">
          {categoriesState?.categories?.data?.map(({ name, _id }, index) => {
            let randomID = `label-${Math.round(Math.random() * 500 + index)}`;
            return (
              <>
                <div className="flex items-center gap-3" key={index}>
                  <input
                    id={randomID}
                    type={"checkbox"}
                    value={_id}
                    onChange={(e) => setCheckedCategories(e.target, _id)}
                    className="form-checkbox h-3 w-3 inline-block "
                  />
                  <label htmlFor={randomID}>{name}</label>
                </div>
              </>
            );
          })}
        </DropDown.Content>
      </DropDown>

      <DropDown label={"brands"} value={"asdf"} open={false}>
        <DropDown.Content className="flex flex-col justify-start text-start">
          {brandsState?.brands?.data?.map(({ name, _id }, index) => {
            let randomID = `label-${Math.round(Math.random() * 500 + index)}`;
            return (
              <>
                <div className="flex items-center gap-3" key={index}>
                  <input
                    id={randomID}
                    type={"checkbox"}
                    onClick={(e) => setCheckedBrand(e.target, _id)}
                    value={_id}
                    className="form-checkbox h-3 w-3 inline-block "
                  />
                  <label htmlFor={randomID}>{name}</label>
                </div>
              </>
            );
          })}
        </DropDown.Content>
      </DropDown>
      <PriceInputs minimumOnChange={priceFrom} maximumOnChange={priceTo} />
    </div>
  );
};

export default SidebarFilter;
