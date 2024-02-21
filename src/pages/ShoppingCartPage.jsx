import React from "react";
import useCart_Items_hook from "../hooks/cart/Cart_Items_hook";
import ShoppingCartProductContainer from "../containers/cart/shoppingCartProductContainer";
import ShoppingCartSkeletonContainer from "../components/cart/ShoppingCartSkeletonContainer";
import { Link } from "react-router-dom";
import ShoppingHeader from "../components/cart/ShoppingHeader";
const ShoppingCart = () => {
  let limit = 4;
  const [items, loading, cart, nextPage, prevPage] = useCart_Items_hook(4);

  return (
    <div>
      <div className="grid  lg:grid-cols-8 gap-4">
        <div className="order-2 lg:order-none lg:col-span-6 p-2">
          <h1 className="text-xl w-fit mx-auto font-semibold text-primary">
            Shopping Cart
          </h1>
          <hr className="border-b-2 mb-3 rounded-md border-primary opacity-75" />
          {loading ? (
            <ShoppingCartSkeletonContainer />
          ) : items.length ? (
            <ShoppingCartProductContainer items={items} />
          ) : (
            <div className=" alert text-lg font-bold">
              shopping card is empty
              <Link to={"/"} className="btn btn-primary text-white font-bold">
                go to shopping
              </Link>
            </div>
          )}
          {cart && cart.products?.length > limit && (
            <div className="w-full col-span-full">
              <div className="join grid grid-cols-2 min-w-[150px] mx-auto w-fit max-w-sm">
                <button
                  onClick={prevPage}
                  className="join-item btn btn-outline"
                >
                  Previous page
                </button>
                <button
                  className="join-item btn btn-outline"
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
        {cart && (
          <div className="lg:col-span-2 order-1 lg:order-none p-2 ">
            <ShoppingHeader {...cart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
