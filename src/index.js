import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="min-h-screen bg flex flex-col overscroll-none">
      <Navbar />
      <div className="">
        <App />
      </div>
    </div>
  </React.StrictMode>
);