import React from "react";
import useCreateCategoryHook from "../../../hooks/categories/CreateCategoryHook";
import { FileInput, FormInput } from "../../utility/Inputs";
import ImageBox from "../../dashboard/products/ImageBox";

const CreateCategory = () => {
  const [url, handleSubmit, categoryName, handleCategoryOnChange, deleteImage] =
    useCreateCategoryHook();
  return (
    <form onSubmit={handleSubmit} className="">
      <fieldset className="gap-3   grow h-full  grid p-2 border-2">
        <legend className="p-2">Create category</legend>
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
          label="Name :"
          ref={categoryName}
          placeholder="Category name"
        />
        <button type="submit" className="btn btn-primary text-white text-lg">
          submit
        </button>
      </fieldset>
    </form>
  );
};

export default CreateCategory;
