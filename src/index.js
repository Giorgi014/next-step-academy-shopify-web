import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeContextComponent,
  BannerContextComponent,
  AouthWindowContext,
  AuthContextComponent,
  UserInfoContextComponent,
} from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserInfoContextComponent>
        <AuthContextComponent>
          <AouthWindowContext>
            <BannerContextComponent>
              <ThemeContextComponent>
                <App />
              </ThemeContextComponent>
            </BannerContextComponent>
          </AouthWindowContext>
        </AuthContextComponent>
      </UserInfoContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);
