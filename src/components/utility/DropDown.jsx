import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DropDownContent from "./items/LabelItem";

const DropDown = ({ getLabel, label, getValue, value, children, open }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [labelName, setLabelName] = useState(label);
  const [labelValue, setLabelValue] = useState(value);
  useEffect(() => {
    try {
      if (getLabel) setLabelName(getLabel(label));
    } catch (error) {
      console.error("if you provide label directly then remove getLabel");
    }
    try {
      if (getValue) setLabelValue(getValue(value));
    } catch (error) {
      console.error(
        "if you provide text then you don't need to access value by getValue"
      );
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse collapse-arrow join-item  open cursor-pointer">
      <input
        type="radio"
        name={`my-accordion-${Math.round(Math.random() * 10000)}`}
        defaultChecked
        checked={isOpen}
        onClick={handleClick}
      />

      <div className="collapse-title text-sm text-gray-700  font-medium">
        {labelName}
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="collapse-content text-sm   capitalize items-center"
      >
        <>{children}</>
      </div>
    </div>
  );
};
DropDown.Content = DropDownContent;
export default DropDown;
