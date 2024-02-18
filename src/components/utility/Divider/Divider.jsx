import React from "react";

const Divider = () => {
  return (
    <div className="  grid  md:grid-cols-2 gap-3  py-2 ">
      <img
        src="/adds/cables_en.jpg"
        className="  bg-base-300 rounded-md shadow-sm  h-32 "
      />

      <img
        src="/adds/powerbanks_en.jpg"
        className="card bg-base-300 rounded-md  shadow-sm h-32"
      />
    </div>
  );
};

export default Divider;
