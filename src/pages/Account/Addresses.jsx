import React from "react";
import { FormInput } from "../../components/utility/Inputs";
import Select from "react-select";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import isValidEgyptianNumber from "../../../utils/ValidatePhoneNumber";
import { isValidEgyptPostalCode } from "../../../utils/ValidataPostCode";
import { useDispatch } from "react-redux";
import { updateUserAddress } from "../../reducers/user/userThunks";
const options = [
  {
    label: "State/Province",
    value: "",
    isDisabled: true,
  },
  {
    label: "Cairo",
    value: "Cairo",
    cities: [
      {
        label: "Ain Shams ",
        value: "Ain Shams",
      },
      {
        label: "el Salam ",
        value: "el Salam",
      },
      {
        label: "Nasr City ",
        value: "Nasr City",
      },
      {
        label: "El-Nozha ",
        value: "El-Nozha",
      },
      {
        label: "El Weili ",
        value: "El Weili",
      },
      {
        label: "El Weili ",
        value: "El Weili",
      },
      {
        label: "Bab El Sharia ",
        value: "Bab El Sharia",
      },
      {
        label: "Downtown ",
        value: "Downtown",
      },
    ],
  },
  {
    label: "Alexandria",
    value: "Alexandria",
    cities: [
      {
        label: "Al Attarin",
        value: "Al Attarin",
      },
      {
        label: "El Labban",
        value: "El Labban",
      },
      {
        label: "El Manshiyya",
        value: "El Manshiyya",
      },
      {
        label: "El-Montaza",
        value: "El-Montaza",
      },
      {
        label: "El Raml",
        value: "El Raml",
      },
      {
        label: "bab sharq",
        value: "bab sharq",
      },
      {
        label: "Karmus",
        value: "Karmus",
      },
      {
        label: "Smouha",
        value: "Smouha",
      },
    ],
  },
  {
    label: "Beheira",
    value: "Beheira",
    cities: [
      {
        label: "Al Attarin",
        value: "Al Attarin",
      },
      {
        label: "El Labban",
        value: "El Labban",
      },
      {
        label: "El Manshiyya",
        value: "El Manshiyya",
      },
      {
        label: "El-Montaza",
        value: "El-Montaza",
      },
      {
        label: "El Raml",
        value: "El Raml",
      },
      {
        label: "bab sharq",
        value: "bab sharq",
      },
      {
        label: "Karmus",
        value: "Karmus",
      },
      {
        label: "Smouha",
        value: "Smouha",
      },
    ],
  },
  {
    label: "Kafr El Sheikh",
    value: "Kafr El Sheikh",
    cities: [
      {
        label: "Al Attarin",
        value: "Al Attarin",
      },
      {
        label: "El Labban",
        value: "El Labban",
      },
      {
        label: "El Manshiyya",
        value: "El Manshiyya",
      },
      {
        label: "El-Montaza",
        value: "El-Montaza",
      },
      {
        label: "El Raml",
        value: "El Raml",
      },
      {
        label: "bab sharq",
        value: "bab sharq",
      },
      {
        label: "Karmus",
        value: "Karmus",
      },
      {
        label: "Smouha",
        value: "Smouha",
      },
    ],
  },
  {
    label: "Dakahlia",
    value: "Dakahlia",
    cities: [
      {
        label: "Al Attarin",
        value: "Al Attarin",
      },
      {
        label: "El Labban",
        value: "El Labban",
      },
      {
        label: "El Manshiyya",
        value: "El Manshiyya",
      },
      {
        label: "El-Montaza",
        value: "El-Montaza",
      },
      {
        label: "El Raml",
        value: "El Raml",
      },
      {
        label: "bab sharq",
        value: "bab sharq",
      },
      {
        label: "Karmus",
        value: "Karmus",
      },
      {
        label: "Smouha",
        value: "Smouha",
      },
    ],
  },
  {
    label: "Damietta",
    value: "Damietta",
    cities: [
      {
        label: "Al Attarin",
        value: "Al Attarin",
      },
      {
        label: "El Labban",
        value: "El Labban",
      },
      {
        label: "El Manshiyya",
        value: "El Manshiyya",
      },
      {
        label: "El-Montaza",
        value: "El-Montaza",
      },
      {
        label: "El Raml",
        value: "El Raml",
      },
      {
        label: "bab sharq",
        value: "bab sharq",
      },
      {
        label: "Karmus",
        value: "Karmus",
      },
      {
        label: "Smouha",
        value: "Smouha",
      },
    ],
  },
  {
    label: "Port Said",
    value: "Port Said",
    cities: [
      {
        label: "Al Attarin",
        value: "Al Attarin",
      },
      {
        label: "El Labban",
        value: "El Labban",
      },
      {
        label: "El Manshiyya",
        value: "El Manshiyya",
      },
      {
        label: "El-Montaza",
        value: "El-Montaza",
      },
      {
        label: "El Raml",
        value: "El Raml",
      },
      {
        label: "bab sharq",
        value: "bab sharq",
      },
      {
        label: "Karmus",
        value: "Karmus",
      },
      {
        label: "Smouha",
        value: "Smouha",
      },
    ],
  },
  {
    label: "Giza",
    value: "Giza",
    cities: [
      {
        label: "Al Attarin",
        value: "Al Attarin",
      },
      {
        label: "El Labban",
        value: "El Labban",
      },
      {
        label: "El Manshiyya",
        value: "El Manshiyya",
      },
      {
        label: "El-Montaza",
        value: "El-Montaza",
      },
      {
        label: "El Raml",
        value: "El Raml",
      },
      {
        label: "bab sharq",
        value: "bab sharq",
      },
      {
        label: "Karmus",
        value: "Karmus",
      },
      {
        label: "Smouha",
        value: "Smouha",
      },
    ],
  },
];

const Addresses = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();
  const dispatch = useDispatch();
  const handleSubmitForm = (values) => {
    let objectValues = {};
    if (values.country.value) objectValues.city = values.country.value;
    delete values.country;
    const formValues = Object.entries(values);
    formValues.forEach(([key, val]) => (val ? (objectValues[key] = val) : ""));
    objectValues = { addresses: objectValues };
    dispatch(updateUserAddress(objectValues));
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className=" bg-white p-3 rounded-md shadow-md md:grid-cols-2 grid gap-x-5 gap-y-1"
    >
      <div>
        <FormInput
          label={"Street Address "}
          status={false}
          className={"placeholder:text-sm"}
          placeholder="Enter your street address 🏠"
          {...register("details", {
            validate: (val) => {
              if (val) {
                return val?.length > 2 || "not valid value";
              }
              return true;
            },
          })}
        />
        <p
          className={`p-2 text-red-400 duration-500 ${
            errors.details ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
        >
          {errors?.details?.message}
        </p>

        <p></p>
      </div>
      <div>
        <FormInput
          label="postCode"
          status={false}
          placeholder="Enter post Code 📬"
          className="placeholder:text-sm"
          {...register("postalCode", {
            validate: (val) => {
              if (val)
                return isValidEgyptPostalCode(val) || "not valid post code";
              return true;
            },
          })}
        />
        <p
          className={`p-2 capitalize text-red-400 duration-500 ${
            errors.postalCode ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
        >
          {errors?.postalCode?.message}
        </p>
      </div>

      <div>
        <FormInput
          label="Phone"
          status={false}
          placeholder="Enter new Phone number"
          className="placeholder:text-sm"
          {...register("phone", {
            validate: (val) => {
              if (val)
                return isValidEgyptianNumber(val) || "enter valid phone number";
              return true;
            },
          })}
        />
        <p
          className={`p-2 capitalize text-red-400 duration-500 ${
            errors.phone ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
        >
          {errors?.phone?.message}
        </p>
      </div>
      <div className=" ">
        <label className="label label-text">State/Province :</label>
        <Controller
          name="country"
          control={control}
          rules={{
            validate: (val) => {
              return val.val;
            },
          }}
          defaultValue={options[0]}
          render={({ field }) => {
            return (
              <Select
                {...field}
                getOptionValue={(option) => option.value}
                placeholder="select your country"
                defaultValue={options[0]}
                options={options.map((obj, index) => ({ ...obj, index }))}
                classNamePrefix={"bg-primary"}
                className="shadow-md"
              />
            );
          }}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary text-white w-fit mx-auto col-span-full px-11"
      >
        submit
      </button>
    </form>
  );
};

export default Addresses;
//Addresses
