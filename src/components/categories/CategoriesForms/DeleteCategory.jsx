import React from "react";
import SelectInput from "../../utility/SelectInput";
import useDeleteCategoryHook from "../../../hooks/categories/DeleteCategoryHook";

const DeleteCategory = () => {
  const {
    Categories,
    handleDeleteCategory,
    CategoryLoading,
    categoryRef,
    handleOnChange,
  } = useDeleteCategoryHook();
  return (
    <form className="" onSubmit={handleDeleteCategory}>
      <fieldset className="gap-3 grid p-2 border-2">
        <legend className="p-2">Delete category</legend>
        <SelectInput
          isSearchable
          ref={categoryRef}
          isLoading={CategoryLoading}
          onInputChange={handleOnChange}
          options={Categories}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option._id}
          placeholder={"Select categories"}
          className="capitalize"
        />
        <button
          type="submit"
          className="btn btn-error bg-error text-white text-lg"
        >
          Delete
        </button>
      </fieldset>
    </form>
  );
};

export default DeleteCategory;
