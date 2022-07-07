import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
//import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookiesProvider>
  </BrowserRouter>
);
/*
ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);*/
