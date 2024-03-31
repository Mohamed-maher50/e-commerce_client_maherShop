import React from "react";
import useCreate_brand_hook from "../../../hooks/brands/Create_brand_hook";
import { FormInput } from "../../utility/Inputs";
import ImageBox from "../../dashboard/products/ImageBox";
import FileInput from "../../utility/FileInput";

const CreateBrand = () => {
  const [handleBrandOnChange, submitForm, brandName, url, deleteImage] =
    useCreate_brand_hook();
  return (
    <form onSubmit={submitForm} className="">
      <fieldset className=" gap-3 grid p-2 border-2">
        <legend className="p-3">create</legend>
        <FileInput onChange={handleBrandOnChange} />
        <div className="">
          {url && <ImageBox imgUrl={url} onclick={deleteImage} />}
        </div>
        <FormInput
          label="Brand name"
          status={false}
          placeholder="Enter Brand Name "
          ref={brandName}
        />
        <button
          type="submit"
          className="btn w-fit btn-primary text-white text-lg"
        >
          submit
        </button>
      </fieldset>
    </form>
  );
};

export default CreateBrand;
