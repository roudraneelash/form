import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const root = document.getElementById("root");
const el = ReactDOM.createRoot(root);
el.render(
  <Provider store={store}>
    <App />
  </Provider>
);
