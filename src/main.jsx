// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import React from "react";

import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
