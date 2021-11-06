import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
// Escolha o tema que desejar
// https://primefaces.org/primereact/showcase/#/setup
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />,
    </Provider>,
    document.querySelector("#root")
);
