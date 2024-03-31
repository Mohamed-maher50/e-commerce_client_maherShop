import React from "react";
import { useRef } from "react";

import { CgSearch } from "react-icons/cg";
import { useSearchParams } from "react-router-dom";
const SearchInput = ({ handleOnChange, onSubmit, className = "" }) => {
  const [searchParams] = useSearchParams();
  const searchInput = useRef(null);
  return (
    <div className={`relative grow h-fit  ${className}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnChange(searchInput.current.value);
        }}
        className="flex items-center h-12 relative"
      >
        <input
          ref={searchInput}
          type="search"
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder="search"
          defaultValue={searchParams.get("keyword")}
          className={`input input-bordered text-center rounded-r-none shadow-none w-full focus:outline-none `}
        />
        <button
          onClick={onSubmit}
          type="submit"
          className="h-full bg-primary p-2 rounded-r-md px-4"
        >
          <CgSearch className="h-full text-3xl text-white font-bold" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
