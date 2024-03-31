import { FaCloudUploadAlt } from "react-icons/fa";
import { forwardRef } from "react";
import Label from "./Label";
export const FormInput = forwardRef(
  (
    { label, value, status = true, className, onchangeHandler, ...props },
    ref
  ) => {
    return (
      <div className="flex gap-2 flex-col">
        <Label label={label} />
        <input
          ref={ref}
          type="text"
          className={`input   disabled:text-gray-400 font-bold  text-gray-700 input-bordered focus:outline-none ${
            className || ""
          }`}
          disabled={status}
          defaultValue={value || ""}
          onChange={onchangeHandler || (() => {})}
          {...props}
        />
      </div>
    );
  }
);
export const FileInput = ({
  onchangeHandler = () => {},
  className = "",
  labelClassName = "",
  ...props
}) => {
  let customId = `uploadFileBrand${Date.now()}`;
  return (
    <>
      <label htmlFor={customId} className={` block ${labelClassName}`}>
        <FaCloudUploadAlt className="text-9xl  w-full block rounded-sm  cursor-pointer hover:scale-95 ease-out duration-500 text-primary outline-primary outline outline-offset-8 " />
      </label>
      <input
        type="file"
        id={customId}
        onChange={onchangeHandler}
        className={`hidden ${className}`}
        accept="image/*"
        {...props}
      />
    </>
  );
};
