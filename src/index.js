import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import stores from "./stores";

const store = createStore(stores, window.STATE_FROM_SERVER);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
