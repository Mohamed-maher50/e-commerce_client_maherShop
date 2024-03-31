import React from "react";
import Select from "react-select";

import { useSearchParams } from "react-router-dom";
import { pushToParams } from "../../services/SearchParamsServices";
const sortTypeOptions = [
  {
    label: "Sort By",
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
const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortBy = ({ value }) => {
    setSearchParams(pushToParams("sort", value));
  };
  let findActive = sortTypeOptions.find(
    (obj) => obj.value === searchParams.get("sort")
  );

  return (
    <Select
      options={sortTypeOptions}
      defaultValue={findActive || sortTypeOptions[0]}
      onChange={handleSortBy}
    />
  );
};

export default SortBy;
