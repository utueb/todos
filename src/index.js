import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteComponent from "./RouteComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteComponent />
  </React.StrictMode>
);
