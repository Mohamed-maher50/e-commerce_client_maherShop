import React from "react";

const Checkbox = ({ label, labelProps = {}, ...props }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type={"checkbox"}
        className="form-checkbox h-3 w-3 inline-block "
        {...props}
      />
      <label {...labelProps}>{label}</label>
    </div>
  );
};

export default Checkbox;
