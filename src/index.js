import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/ttcommons/TT-Commons-ExtraLight.otf";
import "./fonts/ttcommons/TT-Commons-Bold.otf";
import "./fonts/ttcommons/TT-Commons-Medium.otf";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bip from "./routes/bip";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="bip" element={<Bip />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
