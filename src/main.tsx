import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Spinner from "./components/Spinner.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Spinner percent={10} />
  </React.StrictMode>
);
