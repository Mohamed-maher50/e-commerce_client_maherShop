export const addItemToLocalStorage = async (product) => {
  if (!product) return;
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    product.quantity = 1;
    return localStorage.setItem("cart", JSON.stringify([product]));
  }
  const checkIsProductExist = cart?.findIndex(
    (item) => item._id == product._id
  );
  if (checkIsProductExist < 0) {
    product.quantity = 1;
    return localStorage.setItem("cart", JSON.stringify([...cart, product]));
  }
  let newCart = cart?.map((p, index) => {
    if (index == checkIsProductExist) p.quantity += 1;
    return p;
  });

  localStorage.setItem("cart", JSON.stringify(newCart));
};
export const removeItemFromLocalStorage = (product) => {
  if (!product) return;
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) return;
  cart = cart.filter((item) => {
    return item._id != product._id;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
};
