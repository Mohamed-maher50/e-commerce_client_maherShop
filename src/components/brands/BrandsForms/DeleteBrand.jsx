import SelectInput from "../../utility/SelectInput";

import useDeleteBrandHook from "../../../hooks/brands/deleteBrandHook";

const DeleteBrand = () => {
  const {
    brands,
    handleDelete,
    handleSearchOnChange,
    isLoading,
    brandValueRef,
  } = useDeleteBrandHook();
  return (
    <form onSubmit={handleDelete} className="h-full ">
      <fieldset className="gap-3 grid p-2 border-2">
        <legend className="p-2">Delete category</legend>
        <SelectInput
          isSearchable
          ref={brandValueRef}
          isLoading={isLoading}
          onInputChange={handleSearchOnChange}
          options={brands}
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

export default DeleteBrand;
