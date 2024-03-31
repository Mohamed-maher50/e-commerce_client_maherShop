import shoppingCart from "./ShopingCart/ShopCartReducer.js";
import ReviewsReducer from "./ReivewsReducer.js";
import MyWishListReducer from "./WishList/MyWishListReducer.js";
import categoriesReducer from "./Categories/Reducer.js";
import ProductsReducer from "./products/ProductsReducer.js";
import BrandsReducer from "./Brands/BrandsReducer.js";
import DrawerReducer from "./Drawer.js";
import ProductDetailsReducer from "./products/productDetails/ProductDetailsReducer.js";
import userSettingReducer from "./user/Settings/SettingReducer.js";
import AuthReducer from "./user/userReducer.js";
import subCategoriesReducer from "./subCategories/subCategoriesReducer.js";
import usersReducer from "./Users/UsersReducer.js";
export default {
  reducer: {
    shoppingCart,
    AuthReducer,
    ReviewsReducer,
    MyWishListReducer,
    categoriesReducer,
    ProductsReducer,
    BrandsReducer,
    DrawerReducer,
    userSettingReducer,
    ProductDetailsReducer,
    subCategoriesReducer,
    usersReducer,
  },
};
