import React from "react";

const GoogleButton = ({ ...props }) => {
  return (
    <button
      {...props}
      className="group block   gap-4 h-12 px-6 border-2 border-gray-300 rounded-md w-full  transition duration-300 hover:border-primary focus:bg-blue-50 active:bg-blue-100"
    >
      <div className="relative gap-3 flex items-center space-x-4 justify-center">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className=" aspect-square w-7"
          alt="google logo"
        />
        <span className="flex  font-semibold grow tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
          Continue with Google
        </span>
      </div>
    </button>
  );
};

export default GoogleButton;
