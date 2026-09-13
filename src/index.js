import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <title>Tautik Sinha Roy</title>
    <div className="min-h-screen bg flex flex-col w-screen overscroll-none">
      <Navbar /> {/* Navbar remains constant */}
      <App /> {/* Routed content changes */}
    </div>
  </BrowserRouter>
);
