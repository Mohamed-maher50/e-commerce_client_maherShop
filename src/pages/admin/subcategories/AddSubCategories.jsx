import React from "react";
import { FormInput } from "../../../components/utility/Inputs";
import SelectInput from "../../../components/utility/SelectInput";
import Label from "../../../components/utility/Label";
import Add_Subcategories_hook from "../../../hooks/subcategories/Add_Subcategories_hook";
const AddSubCategories = () => {
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
        <Label label="category :" />
        <SelectInput
          options={categories?.data}
          getOptionLabel={(obj) => obj.name}
          getOptionValue={(obj) => obj._id}
          isLoading={loading}
          onChange={categoryOnChange}
          value={setSelectedCategory}
        />
      </div>
      <button>submit</button>
    </form>
  );
};

export default AddSubCategories;
