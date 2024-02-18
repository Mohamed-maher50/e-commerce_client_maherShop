import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { removeItemFromCart } from "../../../../reducers/ShopingCart/ShopCartReducer";
import { GetShopCart } from "../../../../reducers/ShopingCart/ShopingCartThunks";

const ProductsCartNav = () => {
  const { items } = useSelector((state) => state.shoppingCart);
  const { user } = useSelector((state) => state.AuthReducer);
  const calcTotalPrice = items?.reduce((total, current, next) => {
    return total + current.price * current.quantity;
  }, 0);
  const handleRemoveItem = (product) => {
    dispatch(removeItemFromCart(product?._id));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) dispatch(GetShopCart());
  }, [user]);
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
          <li className="whitespace-nowrap flex ">
            <span className="whitespace-nowrap btn-disabled">
              <span className="text-sm">Cart Subtotal :</span>
              <span className="text-black">EGP{calcTotalPrice}</span>
              <span>items</span>
              <span className="text-black">{items?.length}</span>
            </span>
          </li>

          <button className=" text-center bg-primary py-2 w-full block text-white">
            Go to checkout
          </button>

          {/* shopping cart  products */}
          <ul className="max-h-[200px] flex flex-col overflow-y-auto customScroll">
            {items?.map(({ product, price, quantity }, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-3 p-4">
                    <img src={product?.imageCover} className="w-28 h-28" />
                    <div>
                      <a href="#">{product?.title}</a>
                      <h1 className="text-black">EGP {product?.price}</h1>
                      <div className="flex justify-between">
                        <div>
                          <span>Qty: </span>
                          <span>{quantity}</span>
                        </div>
                        <button>edit</button>
                        <button onClick={() => handleRemoveItem(product)}>
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
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

export default ProductsCartNav;
