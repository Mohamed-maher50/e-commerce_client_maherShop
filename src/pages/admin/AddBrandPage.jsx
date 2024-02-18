import React from "react";
import { FileInput, FormInput } from "../../components/utility/Inputs";
import useCreate_brand_hook from "../../hooks/brands/Create_brand_hook";
import ImageBox from "../../components/dashboard/products/ImageBox";
const AddBrandPage = () => {
  const [handleBrandOnChange, submitForm, brandName, url, deleteImage] =
    useCreate_brand_hook();
  return (
    <section className="">
      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <div className="col-span-full flex-wrap flex p-3">
          <div className="grow duration-500 min-w-[200px]">
            <FileInput
              className="grow duration-500"
              labelClassName="duration-500"
              multiple
              onchangeHandler={handleBrandOnChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap p-5">
          {url && <ImageBox imgUrl={url} onclick={deleteImage} />}
        </div>
        <FormInput
          label="Brand name"
          status={false}
          placeholder="Enter Brand Name "
          ref={brandName}
        />
        <button type="submit" className="btn btn-primary text-white text-lg">
          submit
        </button>
      </form>
    </section>
  );
};

export default AddBrandPage;
