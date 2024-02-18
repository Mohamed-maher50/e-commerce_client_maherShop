import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Items = ({ children }) => {
  return <>{children}</>;
};
const LabelItem = ({ options, onChange, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState(-1);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOnChangeItem = ({ name, _id }) => {
    if (name == activeLabel) {
      setActiveLabel(name);
    } else {
      onChange({ name: title, value: _id });
      setActiveLabel(name);
    }
  };

  return (
    <div
      className="collapse collapse-arrow join-item cursor-pointer"
      onClick={handleClick}
    >
      <input
        type="radio"
        name={`my-accordion-${Math.round(Math.random() * 1000)}`}
        checked={isOpen}
        readOnly
      />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="collapse-content text-sm   capitalize items-center"
      >
        {options?.map(({ name, _id }, index) => {
          let randomID = `label-${Math.round(Math.random() * 500 + index)}`;
          return (
            <div className="flex items-center gap-3" key={index}>
              <input
                id={randomID}
                type={"checkbox"}
                className="form-checkbox h-3 w-3 inline-block "
                checked={activeLabel == name}
                onChange={() => handleOnChangeItem({ name, _id })}
              />

              <label htmlFor={randomID}>{name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
function Progress({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse collapse-arrow join-item cursor-pointer">
      <input
        type="radio"
        name={`my-accordion-${Math.round(Math.random() * 10000)}`}
        defaultChecked
        checked={isOpen}
        onClick={handleClick}
      />
      <div className="collapse-title text-xl font-medium">
        {"progress price"}
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="collapse-content text-sm   capitalize items-center"
      >
        <div className="flex items-center gap-3">{children}</div>
      </div>
    </div>
  );
}
function ProgressLabel({ name }) {
  return <label className="block">{name}</label>;
}
function ProgressInput({ min = 0, max = 100, handelOnChange, name }) {
  const priceValue = useRef(null);
  return (
    <>
      <input
        type="range"
        ref={priceValue}
        max={max}
        className="range range-xs range-primary"
        onChange={() =>
          handelOnChange({ name, value: priceValue.current?.value })
        }
      />
    </>
  );
}

Items.Progress = Progress;
Progress.Label = ProgressLabel;
Progress.Input = ProgressInput;
Items.LabelItem = LabelItem;
export default Items;
