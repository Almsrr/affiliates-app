import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AffiliateContextProvider from "./context/AffiliateContextProvider";
import "./custom.css";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <AffiliateContextProvider>
      <App />
    </AffiliateContextProvider>
  </BrowserRouter>,
  rootElement
);
