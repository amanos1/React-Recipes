import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./context.jsx";
import App from "./App.jsx";
/*import "bootstrap/dist/css/bootstrap.css";*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
