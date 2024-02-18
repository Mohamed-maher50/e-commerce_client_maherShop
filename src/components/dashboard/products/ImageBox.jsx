import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ImageBox = ({ imgUrl, onclick, index }) => {
  return (
    <div
      onClick={() => onclick(index)}
      className="card flex justify-center  items-center group w-20 h-20"
    >
      <img src={imgUrl} alt="image" className=" p-2 border h-full w-full" />
      <div className="absolute flex justify-center items-center text-3xl text-white w-0 h-0 origin-center group-hover:w-full group-hover:h-full group-hover:bg-red-400 duration-500 cursor-pointer overflow-hidden opacity-70">
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default ImageBox;
