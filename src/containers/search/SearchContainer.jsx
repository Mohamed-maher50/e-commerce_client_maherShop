import React from "react";
import SearchInput from "../../components/utility/SearchInput";
import Navbar_search_hook from "../../hooks/search/Navbar_search_hook";

const SearchContainer = () => {
  const [handleOnChange] = Navbar_search_hook();

  return (
    <div>
      <SearchInput handleOnChange={handleOnChange} />
    </div>
  );
};

export default SearchContainer;
