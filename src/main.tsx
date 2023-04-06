import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./utils/i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading....</h1>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
