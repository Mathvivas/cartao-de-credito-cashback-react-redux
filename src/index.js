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
    /*
        Provider é um componente disponibilizado pela react-redux.
        Nossos componentes React precisam de acesso ao objeto store do Redux. Podemos
        entregá-lo aos componentes utilizando um Provider. Basta que uma tag Provider
        englobe os componentes React.
    */
    <Provider store={createStore(reducers)}>
        <App />,
    </Provider>,
    document.querySelector("#root")
);
