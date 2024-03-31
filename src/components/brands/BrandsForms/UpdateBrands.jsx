import { useState } from "react";

import FileInput from "../../utility/FileInput";
import SelectInput from "../../utility/SelectInput";
import { useRef } from "react";
import { debounce } from "../../../../utils/debounce";
import { useEffect } from "react";
import axios from "axios";
import { FormInput } from "../../utility/Inputs";
import { toast } from "react-toastify";

const UpdateBrands = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const brandValueRef = useRef();

  const [newValues, setNewValues] = useState({});
  const [selectedBrand, setSelectedBrand] = useState(null);
  const getBrands = async (query = "") => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/api/v1/brands${query}`);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  const debounceGetBrands = debounce(getBrands, 1000);
  useEffect(() => {
    getBrands().then(({ data }) => {
      setBrands(data);
    });
  }, []);

  let newImageObject = newValues.image && URL.createObjectURL(newValues.image);
  let imageURl = newImageObject || selectedBrand?.image;
  const handleSearchOnChange = (value) => {
    debounceGetBrands(`?keyword=${value}`).then(({ data }) => {
      setBrands(data);
    });
  };
  const handleUpdateBrand = async (e) => {
    e.preventDefault();
    const formValues = new FormData();

    Object.entries(newValues).forEach(([key, value]) => {
      formValues.append(key, value);
    });
    try {
      toast.promise(
        axios.put(`/api/v1/brands/${selectedBrand._id}`, formValues),
        {
          pending: "Promise is pending",
          success: (val) => {
            setNewValues({});
            setSelectedBrand(false);
            return "success";
          },
          error: () => "error",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleBrandOnChange = (e) => {
    if (e.target.files[0])
      setNewValues((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  return (
    <form onSubmit={handleUpdateBrand} className="h-full ">
      <fieldset className="gap-3 grid p-2 border-2">
        <legend className="p-2">Update Category</legend>
        <div className="flex items-center gap-2">
          {imageURl && (
            <div className="w-20">
              <img src={selectedBrand.image} />
            </div>
          )}
          {selectedBrand && <FileInput onChange={handleBrandOnChange} />}
        </div>
        {selectedBrand && (
          <FormInput
            status={false}
            value={selectedBrand?.name}
            placeholder={"new Name"}
            onChange={(e) => {
              setNewValues((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        )}

        <SelectInput
          isSearchable
          ref={brandValueRef}
          isLoading={isLoading}
          onInputChange={handleSearchOnChange}
          onChange={setSelectedBrand}
          options={brands}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option._id}
          placeholder={"Select brands"}
          className="capitalize"
        />
        {selectedBrand && (
          <button
            type="submit"
            className="btn w-fit btn-error bg-error text-white text-lg"
          >
            submit
          </button>
        )}
      </fieldset>
    </form>
  );
};

export default UpdateBrands;
