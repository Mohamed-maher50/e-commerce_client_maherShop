import React from "react";
import { useRef } from "react";

const PriceInputs = ({
  minimumOnChange,
  maximumOnChange,
  minValue,
  maxValue,
}) => {
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <div className="p-4">
      <label className="label">Price</label>
      <div className="grid grid-cols-2 justify-between gap-2">
        <div>
          <input
            className="input w-full "
            min={0}
            onChange={(e) => minimumOnChange(e.target.value)}
            id="minPrice"
            type="number"
            placeholder="min"
            value={localFrom}
          />
        </div>
        <div>
          <input
            onChange={(e) => maximumOnChange(e.target.value)}
            className="input w-full "
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
