import React from "react";
import { FileInput, FormInput } from "../../utility/Inputs";
import SelectInput from "../../utility/SelectInput";
import useUpdateCategoriesHook from "../../../hooks/categories/UpdateCategoriesHook";
import { GrPowerReset } from "react-icons/gr";

const UpdateCategory = () => {
  const {
    Categories,
    CategoryLoading,
    handleInputOnChange,
    handleUpdateCategory,
    setSelectedCategory,
    selectedCategory,
    handleUpload,
    Image,
    resetImage,
    onChangeCategoryName,
  } = useUpdateCategoriesHook();

  return (
    <form onSubmit={handleUpdateCategory}>
      <fieldset className="gap-3 h-full  items-end  grid p-2 border-2">
        <legend className="p-2">Update category</legend>
        {selectedCategory && (
          <div className="col-span-full flex-wrap flex p-3">
            <div className="grow duration-500 min-w-[200px]">
              <FileInput
                className="grow duration-500"
                labelClassName="duration-500"
                multiple
                onchangeHandler={handleUpload}
              />
            </div>
          </div>
        )}
        <div className="relative flex  items-center justify-center group w-fit">
          <img
            src={Image}
            className={`duration-500 origin-center ${Image ? "h-20" : "h-0"}`}
          />
          <div
            onClick={resetImage}
            className="absolute  z-10 p-3 bg-white hidden group-hover:flex   cursor-pointer  rounded-full justify-center items-center"
          >
            <GrPowerReset />
          </div>
        </div>
        <SelectInput
          isSearchable
          isLoading={CategoryLoading}
          onInputChange={handleInputOnChange}
          options={Categories}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option._id}
          placeholder={"Select categories"}
          className="capitalize"
          onChange={setSelectedCategory}
        />

        <FormInput
          status={!selectedCategory?.name}
          label="Name :"
          placeholder="Category name"
          value={selectedCategory?.name}
          onChange={onChangeCategoryName}
        />

        <button type="submit" className="btn btn-primary text-white text-lg">
          submit
        </button>
      </fieldset>
    </form>
  );
};

export default UpdateCategory;
