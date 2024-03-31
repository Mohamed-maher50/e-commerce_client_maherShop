import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { addUser } from "./reducers/user/userReducer.js";
import Drawer from "./components/utility/Drawer/Drawer.jsx";
import rootReducers from "./reducers/rootReducers.js";

axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL || "http://localhost:8000/";
const store = configureStore({ ...rootReducers });
const user = JSON.parse(localStorage.getItem("user"));
if (user) store.dispatch(addUser(user));

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
