import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UtilitiesContextProvider } from "./context/UtilitiesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UtilitiesContextProvider>
      <App />
    </UtilitiesContextProvider>
  </React.StrictMode>
);
