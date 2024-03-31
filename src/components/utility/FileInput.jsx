import React from "react";

const FileInput = ({ ...props }) => {
  return (
    <input
      type="file"
      className="file-input file-input-primary  focus:outline-none file-input-bordered w-full "
      {...props}
    />
  );
};

export default FileInput;
