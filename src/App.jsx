import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCartPage";
import ProtectRoute from "./services/ProtectRoute";

import { ToastContainer, cssTransition } from "react-toastify";
import ResetPasswordPage from "./pages/Authentication/ResetPasswordPage";
import AccountPage from "./pages/Account/AccountPage";
import MyWishList from "./pages/Account/MyWishList";
import AccountInformation from "./pages/Account/AccountInformation";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import VerifyRestPasswordCode from "./pages/Authentication/VerifyRestPasswordCode";
import Addresses from "./pages/Account/Addresses";
import ChangePassword from "./pages/Account/ChangePassword";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import AllBrandsPage from "./pages/AllbrandsPage";
import Navbar from "./components/utility/Navbar/Navbar";
import IndexAdminPage from "./pages/admin/IndexAdminPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import Footer from "./components/utility/Footer";
import MangeProductsPage from "./pages/admin/products/MangeProductsPage";
import CreateProduct from "./pages/admin/products/CreateProduct";
import Users from "./pages/admin/Users/Users";
import CreateOrder from "./pages/CreateOrder";
import UserOrders from "./pages/Account/UserOrders";
import MyOrders from "./pages/Account/MyOrders";
import DeleteAccount from "./pages/Account/DeleteAccount";
import BrandsPage from "./pages/admin/BrandPage";
import SubCategories from "./pages/admin/subcategories/SubCategoriesPage";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.css";
import "./App.css";
const bounce = cssTransition({
  enter: "animate__animated animate__fadeInLeft",
  exit: "animate__animated animate__fadeOutRight",
});

function App() {
  return (
    <div className="min-h-screen  flex flex-col  ">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allCategories" element={<AllCategoriesPage />} />
        <Route path="/allBrands" element={<AllBrandsPage />} />
        <Route
          path="/checkout/cart"
          element={
            <ProtectRoute>
              <ShoppingCart />
            </ProtectRoute>
          }
        />
        <Route path="/checkout/cart/:cartId" element={<CreateOrder />} />
        <Route path="/products/">
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>

        <Route path="/auth/*">
          <Route path="signIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="forgetPassword" element={<ForgetPassword />} />
          <Route
            path="verifyRestPasswordCode"
            element={<VerifyRestPasswordCode />}
          />
          <Route path="restPasswordCode" element={<ResetPasswordPage />} />
        </Route>
        <Route
          path="/account"
          element={
            <ProtectRoute>
              <AccountPage />
            </ProtectRoute>
          }
        >
          <Route path="MyWishList" element={<MyWishList />} />
          <Route path="info" element={<AccountInformation />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="delete" element={<DeleteAccount />} />
        </Route>
        <Route path="/admin/*" element={<IndexAdminPage />}>
          <Route path="users" element={<Users />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="products-management" element={<MangeProductsPage />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="subcategories" element={<SubCategories />} />
        </Route>
      </Routes>

      <Footer />
      <ToastContainer
        autoClose={1000}
        draggable={true}
        limit={3}
        pauseOnHover={true}
        position="bottom-right"
        className={"capitalize "}
        theme="light"
        transition={bounce}
      />
    </div>
  );
}

export default App;
