import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { updateCart } from "./reducers/ShopingCart/ShopCartReducer.js";
import { addUser } from "./reducers/user/userReducer.js";
import { GetShopCart } from "./reducers/ShopingCart/ShopingCartThunks.js";
import Drawer from "./components/utility/Drawer/Drawer.jsx";
import rootReducers from "./reducers/rootReducers.js";
axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL || "http://localhost:8000/";
const store = configureStore({ ...rootReducers });
if (JSON.parse(localStorage.getItem("cart")))
  store.dispatch(updateCart(JSON.parse(localStorage.getItem("cart"))));
store.dispatch(addUser(JSON.parse(localStorage.getItem("user"))));
console.log(import.meta.env.VITE_BASE_URL);
const AuthState = store.getState();
if (AuthState.AuthReducer.user) {
  store.dispatch(GetShopCart());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Drawer>
        <Drawer.Toggle />
        <Drawer.Side />
      </Drawer>
    </BrowserRouter>
  </Provider>
);
