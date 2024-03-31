import React from "react";
import useSubcategoriesHook from "../../../hooks/subcategories/useSubcategoriesHook";
import SelectInput from "../../utility/SelectInput";
import { useState } from "react";
import { debounce } from "../../../../utils/debounce";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteSubcategories = () => {
  const [query, setQuery] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState(null);

  const { subcategories, isLoading } = useSubcategoriesHook(
    `?keyword=${query}`
  );
  const queryDebounce = debounce(setQuery, 1000);
  const handleSearchOnChange = (value) => {
    queryDebounce(value);
  };

  const handleDeleteSubcategory = async (e) => {
    e.preventDefault();

    toast.promise(
      axios.delete(`/api/v1/subcategories/${selectedSubcategories._id}`),
      {
        success: "success delete",
        error: () => {
          console.log(error);
        },
        pending: "wait please",
      }
    );
  };

  return (
    <form onSubmit={handleDeleteSubcategory} className="h-full ">
      <fieldset className="gap-3 grid p-2 border-2">
        <legend className="p-2">Delete subcategory</legend>
        <SelectInput
          //   ref={brandValueRef}
          isLoading={isLoading}
          onChange={setSelectedSubcategories}
          onInputChange={handleSearchOnChange}
          options={subcategories}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option._id}
          placeholder={"Select brands"}
          className="capitalize"
        />
        <button
          type="submit"
          className="btn w-fit btn-error bg-error text-white text-lg"
        >
          Delete
        </button>
      </fieldset>
    </form>
  );
};

export default DeleteSubcategories;
