import React from "react";
import SearchInput from "../../components/utility/SearchInput";

import useFiltrationHook from "../../hooks/useFiltrationHook";

const SearchContainer = () => {
  const { handleSearch } = useFiltrationHook();

  return (
    <div>
      <SearchInput handleOnChange={handleSearch} />
    </div>
  );
};

export default SearchContainer;
