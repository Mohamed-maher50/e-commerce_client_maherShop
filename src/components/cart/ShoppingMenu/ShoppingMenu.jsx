import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import useCart_Items_hook from "../../../hooks/cart/Cart_Items_hook";
import ShoppingMenuCard from "./ShoppingMenuCard";
import ShoppingMenuHeader from "./ShoppingMenuHeader";

const ShoppingMenu = () => {
  const [items, loading, cart] = useCart_Items_hook();

  return (
    <div className="text-primary dropdown  w-fit dropdown-bottom rounded-none dropdown-end cursor-pointer font-bold flex flex-col items-center border-l-2 justify-center">
      <div className="indicator " tabIndex={0}>
        <span className="indicator-item badge indicator-center md:indicator-end badge-primary text-white">
          {items?.length}
        </span>
        <ul
          tabIndex={0}
          className="dropdown-content p-4  text-sm max-w-2xl min-w-[400px] z-40 menu-lg menu shadow bg-base-100 rounded-sm border-t-4 gap-3 border-primary"
        >
          {cart && <ShoppingMenuHeader {...cart} length={items.length} />}

          <button className=" text-center bg-primary py-2 w-full block text-white">
            Go to checkout
          </button>
          {!cart && (
            <span className="block w-fit mx-auto text-lg text-gray-500">
              shopping card is empty
            </span>
          )}
          {/* shopping cart  products */}
          <ul className="max-h-[200px] flex flex-col overflow-y-auto customScroll">
            {items?.map((item, index) => {
              return <ShoppingMenuCard {...item} key={index} />;
            })}
          </ul>

          <Link
            to={"/checkout/cart"}
            className=" text-center  py-2 border-primary w-full block text-primary border-2"
          >
            Go to checkout
          </Link>
        </ul>
        <BiShoppingBag className="text-primary text-3xl " />
      </div>
    </div>
  );
};

export default ShoppingMenu;
