import React from "react";
import Select from "react-select";

const primaryColor = "#FD7631";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? primaryColor : "gray",
    boxShadow: state.isFocused ? `0 0 0 1px ${primaryColor}` : "none", // Add box shadow when focused
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? primaryColor : "white",
    color: state.isSelected ? "white" : "black",
  }),
};
const SelectInput = ({ options = [], ...props }) => {
  return (
    <Select
      {...props}
      options={options}
      styles={customStyles}
      className="w-full"
    />
  );
};

export default SelectInput;
