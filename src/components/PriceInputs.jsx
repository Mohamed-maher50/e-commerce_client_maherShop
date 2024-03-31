import React from "react";
import { useRef } from "react";

const PriceInputs = ({ minimumOnChange, maximumOnChange, minValue }) => {
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <div className="p-4">
      <label className="label">Price</label>
      <div className="grid grid-cols-2 justify-between gap-2">
        <div>
          <input
            className="input rounded-sm input-sm focus:outline-none w-full  bg-gray-50"
            min={0}
            onChange={(e) => minimumOnChange("price[gte]", e.target.value)}
            id="minPrice"
            type="number"
            defaultValue={minValue}
            placeholder="min"
            value={minValue || null}
          />
        </div>
        <div>
          <input
            onChange={(e) => maximumOnChange("price[lte]", e.target.value)}
            className="input rounded-sm input-sm focus:outline-none w-full  bg-gray-50"
            min={0}
            id="maxPrice"
            type="number"
            value={localTo}
            placeholder="max"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceInputs;
