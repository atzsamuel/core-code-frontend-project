import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//import 'antd/dist/antd.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-drth1e4h.us.auth0.com"
        clientId="NQQh2dqTHU9iq45GKGNZSvMF5OmgbIt6"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
