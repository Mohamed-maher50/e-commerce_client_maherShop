import React from "react";

import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import RequireSignIn from "../../services/RequireSignIn";
import useCard_Hook from "../../hooks/products/Card_Hook";
import AvailableColors from "../AvailableColors";
import { GoStarFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

// const BasicCard = ({
//   title,
//   price,
//   ratingsQuantity,
//   imageCover,
//   _id,
//   loved = false,
//   colors,
//   object,
// }) => {
//   const [addToCart, handleWishList, colorOnChange, colorIndex] =
//     useCard_Hook(loved);

//   return (
//     <div
//       className={`text-sm relative duration-300  rounded-md  border-2 overflow-hidden group/card flex-col gap-3 flex  items-stretch justify-between`}
//     >
//       <RequireSignIn>
//         <div className="flex absolute top-0 left-0 right-0 z-30 justify-between p-2 text-xl ">
//           {/* <div className="badge-ghost badge">10%</div> */}
//           <div
//             onClick={() => handleWishList(object)}
//             className="text-red-600 ms-auto cursor-pointer"
//           >
//             {loved ? (
//               <GoHeartFill className="hover:scale-110 duration-500" />
//             ) : (
//               <GoHeart className="text-gray-400 hover:scale-110 duration-500" />
//             )}
//           </div>
//         </div>
//       </RequireSignIn>
//       <Link to={`/products/${_id}`} className="">
//         <div className="overflow-hidden max-h-[200px]">
//           <img
//             src={imageCover}
//             className={`duration-500 h-48 mx-auto w-full group-hover/card:scale-110  `}
//           />
//         </div>

//         <div className="flex gap-2 p-2 flex-col justify-center items-center">
//           <p className="ps-4 h-11  overflow-clip ">{title}</p>
//           <StarRatings
//             starSpacing="1px"
//             starDimension="15px"
//             numberOfStars={5}
//             rating={ratingsQuantity}
//             starRatedColor={"rgb(109, 122, 130)"}
//             name="rating"
//           />
//           <p className="text-xl font-bold">$ {price}</p>
//         </div>
//       </Link>
//       <AvailableColors
//         colors={colors}
//         className="mx-auto w-fit grid  p-2"
//         onChange={colorOnChange}
//         ActiveColor={colorIndex}
//       />
//       <button
//         onClick={() => addToCart(_id, colors)}
//         className=" py-2 my-2 mt-auto mx-auto  w-fit block  bg-gray-200 uppercase whitespace-nowrap  z-10 px-2 text-sm "
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// };
const BasicCard = ({
  title,
  price,
  ratingsQuantity,
  imageCover,
  _id,
  loved = false,

  object,
  availableColors,
  priceAfterDiscount,
}) => {
  const [addToCart, handleWishList, colorOnChange, colorIndex] =
    useCard_Hook(loved);
  return (
    <>
      <div className="relative h-full min-h-[450px] group flex w-full  grow flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <RequireSignIn>
          <div className="flex bg-gray-200  border w-fit absolute top-1  rounded-md right-1  overflow-hidden z-10 justify-between p-2 text-xl ">
            {/* <div className="badge-ghost badge">10%</div> */}
            <div
              onClick={() => handleWishList(object)}
              className="text-red-600 ms-auto cursor-pointer"
            >
              {loved ? (
                <GoHeartFill className="hover:scale-110 duration-500" />
              ) : (
                <FaHeart className="text-gray-400 hover:scale-110 duration-500" />
              )}
            </div>
          </div>
        </RequireSignIn>
        <Link
          to={`/products/${_id}`}
          className="relative mx-3 mt-3 flex aspect-square overflow-hidden rounded-xl"
        >
          <img
            className="object-cover mx-auto group-hover:scale-105 duration-500"
            src={imageCover}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2  text-sm font-medium text-white">
            39% OFF
          </span>
        </Link>
        <div className="mt-auto flex-col flex px-5 pb-5">
          <h5 className="text-sm  text-left tracking-tight text-slate-900">
            {title.substring(0, 100)}
            {/* {"".substring(0, 250)} */}
          </h5>

          <div className="mt-2 mb-5 flex items-center justify-between">
            <p className="text-start items-center flex">
              <span className="text-2xl block font-bold text-slate-900">
                ${price}
              </span>
              {priceAfterDiscount && (
                <span className="text-sm text-slate-900 line-through badge">
                  ${priceAfterDiscount}
                </span>
              )}
            </p>

            <div className="flex  gap-1 items-center">
              <span className=" gap-1 flex items-center justify-center   rounded badge px-2.5 py-0.5 text-xs font-semibold">
                <GoStarFill className="text-yellow-400 text-sm" />
                {ratingsQuantity}
              </span>
            </div>
          </div>
          <AvailableColors
            colors={availableColors}
            className=" w-fit grid  p-2"
            onChange={colorOnChange}
            ActiveColor={colorIndex}
          />
          <button
            onClick={() => addToCart(_id, availableColors)}
            className="flex mt-auto items-center w-full  grow justify-center rounded-md bg-primary duration-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(BasicCard);
