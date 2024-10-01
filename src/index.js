import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeContextComponent from "./context/themecontext/ThemeContext";
import BannerContextComponent from "context/bannerContext/BannerContext";
import AouthWindowContext from "context/aouthWindowContext/AouthWindowContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AouthWindowContext>
        <BannerContextComponent>
          <ThemeContextComponent>
            <App />
          </ThemeContextComponent>
        </BannerContextComponent>
      </AouthWindowContext>
    </BrowserRouter>
  </React.StrictMode>
);
