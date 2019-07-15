import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GuestApp from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <GuestApp />,
  </Provider>,
  document.getElementById("root")
);
