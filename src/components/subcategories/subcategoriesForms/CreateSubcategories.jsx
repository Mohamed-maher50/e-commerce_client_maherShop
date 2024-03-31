import React from "react";
import Add_Subcategories_hook from "../../../hooks/subcategories/Add_Subcategories_hook";
import Label from "../../utility/Label";
import { FormInput } from "../../utility/Inputs";
import SelectInput from "../../utility/SelectInput";

const CreateSubcategories = () => {
  const [
    categories,
    loading,
    subcategoriesName,
    handleSubmitCreateSubcategories,
    categoryOnChange,
    setSelectedCategory,
  ] = Add_Subcategories_hook();
  return (
    <form className="grid gap-3" onSubmit={handleSubmitCreateSubcategories}>
      <FormInput
        label={"Subcategory Name :"}
        status={false}
        ref={subcategoriesName}
        placeholder="Enter Subcategories Name :"
      />
      <div>
        <Label label="category :" className="py-2" />
        <SelectInput
          options={categories?.data}
          getOptionLabel={(obj) => obj.name}
          getOptionValue={(obj) => obj._id}
          isLoading={loading}
          onChange={categoryOnChange}
          value={setSelectedCategory}
        />
      </div>
      <button
        type="submit"
        className="btn w-fit btn-error bg-error text-white text-lg"
      >
        submit
      </button>
    </form>
  );
};

export default CreateSubcategories;
