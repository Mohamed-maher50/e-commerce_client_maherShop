import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCartPage";
import ProtectRoute from "./services/ProtectRoute";
import "react-toastify/dist/ReactToastify.css";
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
import RegistrationNav from "./components/utility/RegistrationNav";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import AllBrandsPage from "./pages/AllbrandsPage";
import Navbar from "./components/utility/Navbar/Navbar";
import "animate.css/animate.css";
import AddBrandPage from "./pages/admin/AddBrandPage";
import IndexAdminPage from "./pages/admin/IndexAdminPage";
import AddCategoriesPage from "./pages/admin/AddCategoriesPage";
import Footer from "./components/utility/Footer";
import MangeProductsPage from "./pages/admin/products/MangeProductsPage";
import CreateProduct from "./pages/admin/products/CreateProduct";
import AddSubCategories from "./pages/admin/subcategories/AddSubCategories";
const bounce = cssTransition({
  enter: "animate__animated animate__fadeInLeft",
  exit: "animate__animated animate__fadeOutRight",
});

function App() {
  const user = localStorage.getItem("user");

  return (
    <div className="min-h-screen    ">
      <RegistrationNav />

      <Navbar />
      {/* <CategoryNav /> */}
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
        <Route path="/products/">
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <></>
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
        <Route path="/account" element={<AccountPage />}>
          <Route path="MyWishList" element={<MyWishList />} />
          <Route path="info" element={<AccountInformation />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="changePassword" element={<ChangePassword />} />
        </Route>
        <Route path="/admin/*" element={<IndexAdminPage />}>
          <Route path="add-brand" element={<AddBrandPage />} />
          <Route path="add-category" element={<AddCategoriesPage />} />
          <Route path="products-management" element={<MangeProductsPage />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route
            path="subcategories/create-subcategories"
            element={<AddSubCategories />}
          />
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
