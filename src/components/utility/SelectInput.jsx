import React from "react";
import { forwardRef } from "react";
import Select from "react-select";

const primaryColor = "#FD7631";

const customStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    outline: state.isFocused ? "none" : null,
  }),
  container: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    border: "1px sold gray",
    boxShadow: "none",
    outline: state.isFocused ? "none" : null,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? primaryColor : "white",
    color: state.isSelected ? "white" : "black",
  }),
};
const SelectInput = forwardRef(
  ({ options = [], className = "", ...props }, ref) => {
    return (
      <Select
        {...props}
        ref={ref}
        options={options}
        styles={customStyles}
        className={`w-full ${className}`}
      />
    );
  }
);

export default SelectInput;
