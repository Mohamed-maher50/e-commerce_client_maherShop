import React from "react";
import { FileInput, FormInput } from "../../components/utility/Inputs";
import useCreateCategoryHook from "../../hooks/categories/CreateCategoryHook";
import ImageBox from "../../components/dashboard/products/ImageBox";

const AddCategoriesPage = () => {
  const [url, handleSubmit, categoryName, handleCategoryOnChange, deleteImage] =
    useCreateCategoryHook();
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-span-full flex-wrap flex p-3">
        <div className="grow duration-500 min-w-[200px]">
          <FileInput
            className="grow duration-500"
            labelClassName="duration-500"
            multiple
            onchangeHandler={handleCategoryOnChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap p-5">
        {url && <ImageBox imgUrl={url} onclick={deleteImage} />}
      </div>
      <FormInput
        status={false}
        label="category name"
        ref={categoryName}
        placeholder="enter category name"
      />
      <button type="submit" className="btn btn-primary text-white text-lg">
        submit
      </button>
    </form>
  );
};

export default AddCategoriesPage;
