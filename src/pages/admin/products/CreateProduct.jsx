import React from "react";
import Label from "../../../components/utility/Label";
import { FileInput, FormInput } from "../../../components/utility/Inputs";
import SelectInput from "../../../components/utility/SelectInput";
import useCreate_product_hook from "../../../hooks/products/Create_product_hook";
import { TwitterPicker } from "react-color";
import { IoAddCircle } from "react-icons/io5";
import AvailableColors from "../../../components/AvailableColors";
import ImageBox from "../../../components/dashboard/products/ImageBox";
const CreateProduct = () => {
  const [
    categories,
    brands,
    colorOnChange,
    isColorPickerOpen,
    setIsColorPickerOpen,
    colors,
    deleteColor,
    selectOnChange,
    handleImages,
    imageURls,
    deleteImage,
    handleInputOnChange,
    handleOnSubmit,
    subCategoryBelongToCategory,
  ] = useCreate_product_hook();
  const { subCategories, isLoading } = subCategoryBelongToCategory || {};

  return (
    <div>
      <Label label="create new Product" className="underline" />
      <form onSubmit={handleOnSubmit} className="grid md:grid-cols-2 gap-3">
        <div className="col-span-full flex-wrap flex p-3">
          <div className="grow duration-500 min-w-[200px]">
            <FileInput
              className="grow duration-500"
              labelClassName=" gro duration-500"
              multiple
              onchangeHandler={handleImages}
            />
          </div>
          <div className="flex flex-wrap p-5">
            {imageURls.map((url, index) => {
              return (
                <ImageBox
                  imgUrl={url}
                  key={index}
                  index={index}
                  onclick={deleteImage}
                />
              );
            })}
          </div>
        </div>
        <FormInput
          status={false}
          label="Name"
          onchangeHandler={(e) => handleInputOnChange(e.target.value, "title")}
        />
        <FormInput
          status={false}
          label="description"
          onchangeHandler={(e) =>
            handleInputOnChange(e.target.value, "description")
          }
        />
        <FormInput
          status={false}
          label="price before discount"
          onchangeHandler={(e) => handleInputOnChange(e.target.value, "price")}
        />
        <FormInput
          status={false}
          label="price after discount"
          onchangeHandler={(e) =>
            handleInputOnChange(e.target.value, "priceAfterDiscount")
          }
        />
        <SelectInput
          options={categories.data}
          getOptionValue={(category) => category._id}
          getOptionLabel={(category) => category.name}
          placeholder="category name"
          onChange={({ _id }) => {
            selectOnChange(_id, "category");
          }}
        />
        <SelectInput
          options={brands.data}
          getOptionValue={(brand) => brand._id}
          getOptionLabel={(brand) => brand.name}
          onChange={({ _id }) => {
            selectOnChange(_id, "brand");
          }}
          placeholder="brand name"
        />
        <div className="col-span-full">
          <SelectInput
            options={subCategories.data}
            getOptionValue={(brand) => brand._id}
            getOptionLabel={(brand) => brand.name}
            onChange={({ _id }) => {
              selectOnChange(_id, "subcategory");
            }}
            placeholder="subcategory"
            className="h-fit"
            isLoading={isLoading}
          />
        </div>
        <div>
          <div className="flex flex-wrap">
            <Label label="colors : " className="w-full" />
            <IoAddCircle
              onClick={() => {
                setIsColorPickerOpen(!isColorPickerOpen);
              }}
              className={` text-3xl cursor-pointer text-primary`}
            />

            <AvailableColors colors={colors} onChange={deleteColor} />
          </div>
          <TwitterPicker
            className={`w-full ${isColorPickerOpen ? "" : "hidden"}`}
            onChange={colorOnChange}
          />
        </div>
        <FormInput
          type="number"
          status={false}
          label="quantity"
          placeholder="Enter quantity"
          onchangeHandler={(e) =>
            handleInputOnChange(e.target.value, "quantity")
          }
        />
        <div className="col-span-full ">
          <button type="submit" className="w-fit btn btn-primary text-white ">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
